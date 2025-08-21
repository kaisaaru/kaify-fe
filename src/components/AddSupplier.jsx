'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useSupplier from '@/hook/useSupplier';

export function AddSupplier({ onSuccess, onClose }) {
  const { createSupplier, loading, error } = useSupplier();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    bankAccount: '',
    note: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createSupplier(formData);
    if (res) {
      alert('Supplier created successfully');
      if (onSuccess) onSuccess(); // tell parent to refresh table
      if (onClose) onClose();     // close modal
      else router.push('/main/maintenance/supplier'); // fallback
    }
  };

  return (
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
        {loading ? 'Saving...' : 'Add Supplier'}
      </button>

      {error && <p className='text-danger mt-2'>{error.message}</p>}
    </form>
  );
}

export default AddSupplier;
