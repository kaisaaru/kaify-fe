"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Swal from "sweetalert2";
import useBootstrap from "@/helper/useBootstrap";
import {
    useRelasiList,
    useCreateRelasi,
    useUpdateRelasi,
    useDeleteRelasi,
} from "@/hook/useRelasi";

const loadJQueryAndDataTables = async () => {
    const $ = (await import("jquery")).default;
    await import("datatables.net-dt/js/dataTables.dataTables.js");
    return $;
};

export default function Relasi() {
    useBootstrap();

    // ===== React Query =====
    const { data, isLoading, error } = useRelasiList();
    const createMut = useCreateRelasi();
    const updateMut = useUpdateRelasi();
    const deleteMut = useDeleteRelasi();

    // ===== DataTables refs =====
    const tableRef = useRef(null);
    const dtRef = useRef(null);

    // ===== UI State =====
    const [mode, setMode] = useState("create"); // 'create' | 'edit'
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({
        code: "",
        name: "",
        role: "supplier",
        email: "",
        phone: "",
        address: "",
        npwp: "",
        plafon_debet: "",
        plafon_kredit: "",
        city: "",
        notes: "",
    });

    // Normalisasi & urutkan data (paling awal di atas)
    const relations = useMemo(() => {
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
            if (a.created_at && b.created_at)
                return new Date(a.created_at) - new Date(b.created_at);
            if (a.id && b.id) return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
            return (a.code || "").localeCompare(b.code || "");
        });
    }, [data]);

    // Init / re-init DataTables setiap data berubah
    useEffect(() => {
        let dt;
        let alive = true;

        (async () => {
            if (!tableRef.current) return;
            const $ = await loadJQueryAndDataTables();
            const table = tableRef.current;

            if ($.fn.dataTable.isDataTable(table)) {
                try {
                    $(table).DataTable().destroy();
                } catch { }
            }

            requestAnimationFrame(() => {
                if (!alive || !tableRef.current) return;
                dt = $(tableRef.current).DataTable({
                    pageLength: 10,
                    order: [],
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
            } catch { }
            dtRef.current = null;
        };
    }, [relations]);

    // ===== Helpers =====
    const resetForm = () => {
        setForm({
            code: "",
            name: "",
            role: "supplier",
            email: "",
            phone: "",
            address: "",
            npwp: "",
            plafon_debet: "",
            plafon_kredit: "",
            city: "",
            notes: "",
        });
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
            code: row.code ?? "",
            name: row.name ?? "",
            role: row.role ?? "supplier",
            email: row.email ?? "",
            phone: row.phone ?? "",
            address: row.address ?? "",
            npwp: row.npwp ?? "",
            plafon_debet: row.plafon_debet ?? "",
            plafon_kredit: row.plafon_kredit ?? "",
            city: row.city ?? "",
            notes: row.notes ?? "",
        });
    };

    const closeModalSafely = () => {
        const modalEl = document.getElementById("modalRelasi");
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

    const reloadPage = () => window.location.reload();

    // ===== Submit Create/Update =====
    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            // pastikan angka
            plafon_debet:
                form.plafon_debet === "" ? undefined : Number(form.plafon_debet),
            plafon_kredit:
                form.plafon_kredit === "" ? undefined : Number(form.plafon_kredit),
            // kosongkan string jadi undefined agar tidak ditulis null sembarangan
            email: form.email || undefined,
            phone: form.phone || undefined,
            address: form.address || undefined,
            npwp: form.npwp || undefined,
            city: form.city || undefined,
            notes: form.notes || undefined,
        };

        try {
            if (mode === "create") {
                await createMut.mutateAsync(payload);
                await Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Relasi berhasil ditambahkan!",
                    timer: 1200,
                    showConfirmButton: false,
                });
            } else {
                await updateMut.mutateAsync({ id: editingId, payload });
                await Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Relasi berhasil diperbarui!",
                    timer: 1200,
                    showConfirmButton: false,
                });
            }
            closeModalSafely();
            resetForm();
            reloadPage();
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
            title: "Hapus Relasi?",
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
                text: "Relasi berhasil dihapus.",
                timer: 1100,
                showConfirmButton: false,
            });
            reloadPage();
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
                <h5 className="card-title mb-0">Data Relasi</h5>
                <button
                    type="button"
                    className="btn btn-primary text-sm btn-sm px-6 py-6 w-20 radius-8 d-flex align-items-center gap-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modalRelasi"
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
                            <th>Role</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Kota</th>
                            <th>NPWP</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {relations.map((r, i) => (
                            <tr key={r.id ?? i}>
                                <td>{String(i + 1).padStart(2, "0")}</td>
                                <td>
                                    <Link href="#" className="text-primary-600">
                                        {r.code ?? "-"}
                                    </Link>
                                </td>
                                <td>{r.name ?? "-"}</td>
                                <td className="text-capitalize">{r.role ?? "-"}</td>
                                <td>{r.email ?? "-"}</td>
                                <td>{r.phone ?? "-"}</td>
                                <td>{r.city ?? "-"}</td>
                                <td>{r.npwp ?? "-"}</td>
                                <td className="d-flex">
                                    <button
                                        type="button"
                                        className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                        title="Edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalRelasi"
                                        onClick={() => onOpenEdit(r)}
                                    >
                                        <Icon icon="lucide:edit" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(r)}
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
                    id="modalRelasi"
                    tabIndex={-1}
                    aria-labelledby="modalRelasiLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog custom-width modal-dialog-centered">
                        <div className="modal-content radius-16 bg-base">
                            <div className="modal-header py-14 px-20 border border-top-0 border-start-0 border-end-0">
                                <h1 className="modal-title fs-6" id="modalRelasiLabel">
                                    {mode === "create" ? "Tambah Relasi" : "Edit Relasi"}
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
                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Kode
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="Masukkan kode"
                                                value={form.code}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, code: e.target.value }))
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Nama
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="Masukkan nama"
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, name: e.target.value }))
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Role
                                            </label>
                                            <select
                                                className="form-select form-select-sm radius-8"
                                                value={form.role}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, role: e.target.value }))
                                                }
                                            >
                                                <option value="supplier">Supplier</option>
                                                <option value="customer">Customer</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Kota
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="Masukkan kota"
                                                value={form.city}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, city: e.target.value }))
                                                }
                                            />
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="email@contoh.com"
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, email: e.target.value }))
                                                }
                                            />
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Telepon
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="08xxxxxxxxxx"
                                                value={form.phone}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, phone: e.target.value }))
                                                }
                                            />
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                NPWP
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="12.345.678.9-012.345 / 15 digit"
                                                value={form.npwp}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, npwp: e.target.value }))
                                                }
                                            />
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Plafon Debet
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="0"
                                                value={form.plafon_debet}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, plafon_debet: e.target.value }))
                                                }
                                            />
                                        </div>

                                        <div className="col-md-6 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Plafon Kredit
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control radius-8 form-control-sm"
                                                placeholder="0"
                                                value={form.plafon_kredit}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, plafon_kredit: e.target.value }))
                                                }
                                            />
                                        </div>

                                        <div className="col-12 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Alamat
                                            </label>
                                            <textarea
                                                className="form-control form-control-sm"
                                                rows={2}
                                                placeholder="Alamat lengkap"
                                                value={form.address}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, address: e.target.value }))
                                                }
                                            />
                                        </div>

                                        <div className="col-12 mb-14">
                                            <label className="form-label fw-semibold text-primary-light text-sm mb-6">
                                                Catatan
                                            </label>
                                            <textarea
                                                className="form-control form-control-sm"
                                                rows={2}
                                                placeholder="Catatan"
                                                value={form.notes}
                                                onChange={(e) =>
                                                    setForm((s) => ({ ...s, notes: e.target.value }))
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
