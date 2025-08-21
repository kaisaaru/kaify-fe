"use client";
import useApiProxy from './useApiProxy';
import Cookies from 'js-cookie';

const useSupplier = () => {
  const { get, post, patch, del, loading, error, data } = useApiProxy();

  const getAuthHeaders = () => {
    const token = Cookies.get('authToken');
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const getAllSuppliers = async () => {
    try {
      const res = await get('/suppliers', getAuthHeaders());
      return Array.isArray(res) ? res : res?.data || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  };



  const getSupplier = async (id) => {
    return await get(`/suppliers/${id}`, getAuthHeaders());
  };

  const createSupplier = async (supplierData) => {
    return await post('/suppliers', supplierData, getAuthHeaders());
  };

  const updateSupplier = async (id, supplierData) => {
    return await patch(`/suppliers/${id}`, supplierData, getAuthHeaders());
  };

  const deleteSupplier = async (id) => {
    return await del(`/suppliers/${id}`, getAuthHeaders());
  };

  return {
    getAllSuppliers,
    getSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier,
    loading,
    error,
    data
  };
};

export default useSupplier;
