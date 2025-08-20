"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import useSupplier from "@/hook/useSupplier";

export function EditSupplier({ supplierId }) {
  const { getSupplier, updateSupplier, loading, error } = useSupplier();
  const router = useRouter();
  const params = useParams();
  const id = supplierId || params?.id; // ✅ use prop if available, else fallback to route param

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    bankAccount: "",
    note: "",
  });

  useEffect(() => {
    if (!id) return;
    const fetchSupplier = async () => {
      const supplier = await getSupplier(id);
      if (supplier) {
        setFormData({
          name: supplier.name || "",
          address: supplier.address || "",
          phone: supplier.phone || "",
          email: supplier.email || "",
          website: supplier.website || "",
          bankAccount: supplier.bankAccount || "",
          note: supplier.note || "",
        });
      }
    };
    fetchSupplier();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateSupplier(id, formData);
    if (res) {
      alert("Supplier updated successfully");
      if (!supplierId) {
        // only redirect when it's from the page, not the modal
        router.push("/main/maintenance/supplier");
      }
    }
  };

  return (
    <div className="card basic-data-table">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* your form fields unchanged */}
          {/* ... */}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Updating..." : "Update Supplier"}
          </button>
          {error && <p className="text-danger mt-2">{error.message}</p>}
        </form>
      </div>
    </div>
  );
}

export default EditSupplier;
