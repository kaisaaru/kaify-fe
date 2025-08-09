"use client";import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import useSupplier from '@/hooks/useSupplier';

export function EditSupplier() {
  const { getSupplierById, updateSupplier, loading, error } = useSupplier();
  const router = useRouter();
  const { id } = useParams(); // assumes dynamic route /suppliers/[id]/edit

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    bankAccount: '',
    note: '',
  });

  // Fetch supplier data when component mounts
  useEffect(() => {
    if (!id) return;

    const fetchSupplier = async () => {
      const supplier = await getSupplierById(id);
      if (supplier) {
        setFormData({
          name: supplier.name || '',
          address: supplier.address || '',
          phone: supplier.phone || '',
          email: supplier.email || '',
          website: supplier.website || '',
          bankAccount: supplier.bankAccount || '',
          note: supplier.note || '',
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
      alert('Supplier updated successfully');
      router.push('/suppliers');
    }
  };

  return (
    <div className='card basic-data-table'>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>

          {/* Address */}
          <div className='mb-3'>
            <label className='form-label'>Address</label>
            <textarea
              name='address'
              value={formData.address}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>

          {/* Phone */}
          <div className='mb-3'>
            <label className='form-label'>Phone</label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>

          {/* Email */}
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='form-control'
            />
          </div>

          {/* Website */}
          <div className='mb-3'>
            <label className='form-label'>Website</label>
            <input
              type='url'
              name='website'
              value={formData.website}
              onChange={handleChange}
              className='form-control'
            />
          </div>

          {/* Bank Account */}
          <div className='mb-3'>
            <label className='form-label'>Bank Account</label>
            <input
              type='text'
              name='bankAccount'
              value={formData.bankAccount}
              onChange={handleChange}
              className='form-control'
            />
          </div>

          {/* Note */}
          <div className='mb-3'>
            <label className='form-label'>Note</label>
            <textarea
              name='note'
              value={formData.note}
              onChange={handleChange}
              className='form-control'
            />
          </div>

          <button type='submit' className='btn btn-primary' disabled={loading}>
            {loading ? 'Updating...' : 'Update Supplier'}
          </button>

          {error && <p className='text-danger mt-2'>{error.message}</p>}
        </form>
      </div>
    </div>
  );
}

export default EditSupplier;