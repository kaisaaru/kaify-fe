"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Swal from "sweetalert2";
import useBootstrap from "@/helper/useBootstrap";
import {
  useKategoriProducts,
  useCreateKategori,
  useUpdateKategori,
  useDeleteKategori,
} from "@/hook/useKategoriProducts";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

export default function KategoriBarang() {
  useBootstrap();

  // ===== React Query =====
  const { data, isLoading, error } = useKategoriProducts();
  const createMut = useCreateKategori();
  const updateMut = useUpdateKategori();
  const deleteMut = useDeleteKategori();

  // ===== DataTables refs =====
  const tableRef = useRef(null);
  const dtRef = useRef(null);

  // ===== UI State =====
  const [mode, setMode] = useState("create"); // 'create' | 'edit'
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", code: "", description: "" });

  // Normalisasi & urutkan data (paling awal di atas)
  const kategoriProducts = useMemo(() => {
    const arr = Array.isArray(data)
      ? data
      : Array.isArray(data?.data)
      ? data.data
      : Array.isArray(data?.items)
      ? data.items
      : Array.isArray(data?.result)
      ? data.result
      : [];
    return [...arr].sort((a, b) => {
      if (a.createdAt && b.createdAt)
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (a.id && b.id) return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
      return (a.code || "").localeCompare(b.code || "");
    });
  }, [data]);

  // Init / re-init DataTables setiap data berubah (aman)
  useEffect(() => {
    let dt;
    let alive = true;

    (async () => {
      if (!tableRef.current) return;
      const $ = await loadJQueryAndDataTables();
      const table = tableRef.current;

      // destroy instance lama kalau ada
      if ($.fn.dataTable.isDataTable(table)) {
        try {
          $(table).DataTable().destroy(); // tanpa argumen ⇒ tidak “cabut” node
        } catch {}
      }

      // init setelah DOM render
      requestAnimationFrame(() => {
        if (!alive || !tableRef.current) return;
        dt = $(tableRef.current).DataTable({
          pageLength: 10,
          order: [], // pakai urutan array dari FE
          columnDefs: [{ orderable: false, targets: 0 }],
          autoWidth: false,
          retrieve: true,
        });
        dtRef.current = dt;
      });
    })();

    return () => {
      alive = false;
      try {
        if (dt && tableRef.current && tableRef.current.isConnected) dt.destroy();
      } catch {}
      dtRef.current = null;
    };
  }, [kategoriProducts]);

  // ===== Helpers =====
  const resetForm = () => {
    setForm({ name: "", code: "", description: "" });
    setEditingId(null);
    setMode("create");
  };

  const onOpenCreate = () => {
    resetForm();
    setMode("create");
  };

  const onOpenEdit = (row) => {
    setMode("edit");
    setEditingId(row.id);
    setForm({
      name: row.name ?? "",
      code: row.code ?? "",
      description: row.description ?? "",
    });
  };

  const closeModalSafely = () => {
    const modalEl = document.getElementById("modalKategori");
    if (!modalEl) return;
    const bs =
      window?.bootstrap?.Modal?.getInstance?.(modalEl) ||
      (window?.bootstrap?.Modal ? new window.bootstrap.Modal(modalEl) : null);
    if (bs) {
      bs.hide();
    } else {
      modalEl.classList.remove("show");
      modalEl.setAttribute("aria-hidden", "true");
      modalEl.style.display = "none";
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("padding-right");
    }
  };

  const reloadPage = () => {
    // Hard reload: paling bersih untuk integrasi DataTables
    window.location.reload();
    // Kalau mau soft: gunakan router.refresh() (tapi rawan bentrok DT)
    // router.refresh();
  };

  // ===== Submit Create/Update =====
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "create") {
        await createMut.mutateAsync({
          name: form.name,
          code: form.code,
          description: form.description || null,
        });
        await Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Kategori berhasil ditambahkan!",
          timer: 1200,
          showConfirmButton: false,
        });
      } else {
        await updateMut.mutateAsync({
          id: editingId,
          payload: {
            name: form.name,
            code: form.code,
            description: form.description || null,
          },
        });
        await Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Kategori berhasil diperbarui!",
          timer: 1200,
          showConfirmButton: false,
        });
      }
      closeModalSafely();
      resetForm();
      reloadPage(); // ⬅️ langsung reload
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err?.message || "Terjadi kesalahan",
      });
    }
  };

  // ===== Delete =====
  const onDelete = async (row) => {
    const ask = await Swal.fire({
      icon: "warning",
      title: "Hapus Kategori?",
      html: `Anda akan menghapus <b>${row.name ?? row.code ?? "-"}</b>.`,
      showCancelButton: true,
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    });
    if (!ask.isConfirmed) return;

    try {
      await deleteMut.mutateAsync(row.id);
      await Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Kategori berhasil dihapus.",
        timer: 1100,
        showConfirmButton: false,
      });
      reloadPage(); // ⬅️ reload juga
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err?.message || "Gagal menghapus",
      });
    }
  };

  // ===== Render =====
  if (isLoading)
    return (
      <div className="card">
        <div className="card-body">Memuat…</div>
      </div>
    );
  if (error)
    return (
      <div className="card">
        <div className="card-body text-danger">{error.message}</div>
      </div>
    );

  return (
    <div className="card basic-data-table">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Data Kategori Barang</h5>
        <button
          type="button"
          className="btn btn-primary text-sm btn-sm px-6 py-6 w-20 radius-8 d-flex align-items-center gap-2"
          data-bs-toggle="modal"
          data-bs-target="#modalKategori"
          onClick={onOpenCreate}
        >
          <Icon icon="heroicons:plus" className="icon text-lg line-height-1" />
          Tambah
        </button>
      </div>

      <div className="card-body">
        <table
          className="table bordered-table mb-0"
          id="dataTable"
          ref={tableRef}
          data-page-length={10}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Kode</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kategoriProducts.map((p, i) => (
              <tr key={p.id ?? i}>
                <td>{String(i + 1).padStart(2, "0")}</td>
                <td>
                  <Link href="#" className="text-primary-600">
                    {p.code ?? "-"}
                  </Link>
                </td>
                <td>{p.name ?? "-"}</td>
                <td>{p.description ?? "-"}</td>
                <td className="d-flex">
                  <button
                    type="button"
                    className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                    title="Edit"
                    data-bs-toggle="modal"
                    data-bs-target="#modalKategori"
                    onClick={() => onOpenEdit(p)}
                  >
                    <Icon icon="lucide:edit" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(p)}
                    className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                    title="Hapus"
                  >
                    <Icon icon="mingcute:delete-2-line" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal Create / Edit */}
        <div
          className="modal fade"
          id="modalKategori"
          tabIndex={-1}
          aria-labelledby="modalKategoriLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog custom-width modal-dialog-centered">
            <div className="modal-content radius-16 bg-base">
              <div className="modal-header py-14 px-20 border border-top-0 border-start-0 border-end-0">
                <h1 className="modal-title fs-6" id="modalKategoriLabel">
                  {mode === "create" ? "Tambah Kategori" : "Edit Kategori"}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>

              <div className="modal-body p-20">
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-12 mb-14">
                      <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                        Nama Kategori :
                      </label>
                      <input
                        type="text"
                        className="form-control radius-8 form-control-sm"
                        placeholder="Enter Nama Kategori"
                        value={form.name}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, name: e.target.value }))
                        }
                        required
                      />
                    </div>

                    <div className="col-12 mb-14">
                      <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                        Kode Kategori :
                      </label>
                      <input
                        type="text"
                        className="form-control radius-8 form-control-sm"
                        placeholder="Enter Kode Kategori"
                        value={form.code}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, code: e.target.value }))
                        }
                        required
                      />
                    </div>

                    <div className="col-12 mb-14">
                      <label
                        htmlFor="desc"
                        className="form-label fw-semibold text-primary-light text-sm mb-6"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control form-control-sm"
                        id="desc"
                        rows={3}
                        placeholder="Write some text"
                        value={form.description}
                        onChange={(e) =>
                          setForm((s) => ({
                            ...s,
                            description: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="d-flex align-items-center justify-content-center gap-2 mt-16">
                      <button
                        type="reset"
                        onClick={resetForm}
                        className="btn btn-outline-danger btn-sm px-3 py-1"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm px-3 py-1"
                        disabled={createMut.isPending || updateMut.isPending}
                      >
                        {mode === "create"
                          ? createMut.isPending
                            ? "Menyimpan..."
                            : "Tambah"
                          : updateMut.isPending
                          ? "Mengubah..."
                          : "Simpan"}
                      </button>
                    </div>

                    {(createMut.isError || updateMut.isError) && (
                      <div className="text-danger mt-2 small">
                        {createMut.error?.message ||
                          updateMut.error?.message ||
                          "Terjadi kesalahan"}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
      </div>
    </div>
  );
}
