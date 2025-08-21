"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Swal from "sweetalert2";
import useBootstrap from "@/helper/useBootstrap";
import Modal from "@/components/Modal";
import useContact from "@/hook/useContact";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

export default function Contact() {
  useBootstrap();

  // React Query
  const {
    data,
    error,
    loading,
    getContact,
    getAllContacts,
    createContact,
    updateContact,
    deleteContact,
  } = useContact();

  useEffect(() => {
    (async () => {
      await getAllContacts();
    })();
  }, []);

  // DataTable
  const tableRef = useRef(null);
  const dtRef = useRef(null);

  // UI State
  const [mode, setMode] = useState("create");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "client",
    notes: "",
    credit_limit: "",
    debit_limit: "",
  });

  const Contact = useMemo(() => {
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
      return (a.name || "").localeCompare(b.name || "");
    });
  }, [data]);

  // init datatable (depend on Contact)
  useEffect(() => {
    let dt;
    let alive = true;
    (async () => {
      if (!tableRef.current) return;
      const $ = await loadJQueryAndDataTables();
      const table = tableRef.current;
      if ($.fn.dataTable.isDataTable(table)) {
        try { $(table).DataTable().destroy(); } catch { }
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
      try { if (dt && tableRef.current?.isConnected) dt.destroy(); } catch { }
      dtRef.current = null;
    };
  }, [Contact]);

  const [submitting, setSubmitting] = useState(false);

  // helpers
  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      type: "client",
      notes: "",
      credit_limit: "",
      debit_limit: "",
    });
    setEditingId(null);
    setMode("create");
  };
  const onOpenCreate = () => { resetForm(); setMode("create"); };
  const onOpenEdit = (row) => {
    setMode("edit");
    setEditingId(row.id);
    setForm({
      name: row.name ?? "",
      email: row.email ?? "",
      phone: row.phone ?? "",
      type: row.type ?? "client",
      notes: row.notes ?? "",
      credit_limit: row.credit_limit ?? "",
      debit_limit: row.debit_limit ?? "",
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const formEl = document.querySelector("#contactForm");
    if (formEl && !formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }
    submitForm();
  };


  // submit
  const submitForm = async () => {
    setSubmitting(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        type: form.type,
        notes: form.notes || null,
        credit_limit: form.credit_limit ? Number(form.credit_limit) : null,
        debit_limit: form.debit_limit ? Number(form.debit_limit) : null,
      };

      if (mode === "create") {
        await createContact(payload);
        console.log("Contact created:", payload);
        console.log("Updated contacts:", data);
        await Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Kontak berhasil ditambahkan!",
          timer: 1200,
          showConfirmButton: false,
        });
      } else {
        await updateContact(editingId, payload);
        await Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Kontak berhasil diperbarui!",
          timer: 1200,
          showConfirmButton: false,
        });
      }
      resetForm();
      window.location.reload();
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err?.message || "Terjadi kesalahan",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // delete
  const onDelete = async (row) => {
    const ask = await Swal.fire({
      icon: "warning",
      title: "Hapus Kontak?",
      html: `Anda akan menghapus <b>${row.name ?? row.email ?? "-"}</b>.`,
      showCancelButton: true,
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    });
    if (!ask.isConfirmed) return;

    try {
      await deleteContact(row.id); // ✅ call directly
      await Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Kontak berhasil dihapus.",
        timer: 1100,
        showConfirmButton: false,
      });
      window.location.reload();
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err?.message || "Gagal menghapus",
      });
    }
  };


  // render
  if (loading) return <div className="card"><div className="card-body">Memuat…</div></div>;
  if (error) return <div className="card"><div className="card-body text-danger">{error.message}</div></div>;

  return (
    <div className="card basic-data-table">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Data Kontak</h5>
        <button
          type="button"
          className="btn btn-primary btn-sm d-flex align-items-center gap-2"
          data-bs-toggle="modal"
          data-bs-target="#modalContact"
          onClick={onOpenCreate}
        >
          <Icon icon="heroicons:plus" />
          Tambah
        </button>
      </div>

      <div className="card-body">
        <table className="table bordered-table mb-0" id="dataTable" ref={tableRef}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Telepon</th>
              <th>Tipe</th>
              <th>Notes</th>
              <th>Credit Limit</th>
              <th>Debit Limit</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Contact.map((p, i) => (
              <tr key={p.id ?? i}>
                <td>{String(i + 1).padStart(2, "0")}</td>
                <td>{p.name ?? "-"}</td>
                <td>{p.email ?? "-"}</td>
                <td>{p.phone ?? "-"}</td>
                <td>{p.type ?? "-"}</td>
                <td>{p.notes ?? "-"}</td>
                <td>{p.credit_limit ?? "-"}</td>
                <td>{p.debit_limit ?? "-"}</td>
                <td className="d-flex">
                  <button
                    type="button"
                    className="btn btn-sm btn-success me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modalContact"
                    onClick={() => onOpenEdit(p)}
                  >
                    <Icon icon="lucide:edit" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(p)}
                    className="btn btn-sm btn-danger"
                  >
                    <Icon icon="mingcute:delete-2-line" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        <Modal
          id="modalContact"
          title={mode === "create" ? "Tambah Kontak" : "Edit Kontak"}
          onPrimary={handleSubmit}    
          onSecondary={resetForm}
          primaryText={submitting ? "..." : (mode === "create" ? "Tambah" : "Simpan")}
        >
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 mb-3">
                <label className="form-label">Nama *</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={(e) => setForm(s => ({ ...s, name: e.target.value }))}
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={(e) => setForm(s => ({ ...s, email: e.target.value }))}
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Telepon</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.phone}
                  onChange={(e) => setForm(s => ({ ...s, phone: e.target.value }))}
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Tipe *</label>
                <select
                  className="form-select"
                  value={form.type}
                  onChange={(e) => setForm(s => ({ ...s, type: e.target.value }))}
                  required
                >
                  <option value="client">Client</option>
                  <option value="supplier">Supplier</option>
                </select>
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Notes</label>
                <textarea
                  className="form-control"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm(s => ({ ...s, notes: e.target.value }))}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Credit Limit</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.credit_limit}
                  onChange={(e) => setForm(s => ({ ...s, credit_limit: e.target.value }))}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Debit Limit</label>
                <input
                  type="number"
                  className="form-control"
                  value={form.debit_limit}
                  onChange={(e) => setForm(s => ({ ...s, debit_limit: e.target.value }))}
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
