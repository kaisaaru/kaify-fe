import useApiProxy from './useApiProxy';

/**
 * Custom hook for supplier CRUD operations.
 */
const useSupplier = () => {
  const { get, post, put, del, loading, error, data } = useApiProxy();

  const getSupplier = async (id) => {
    const endpoint = `/suppliers/${id}`;
    return await get(endpoint);
  };

  const createSupplier = async (supplierData) => {
    const endpoint = `/suppliers`;
    return await post(endpoint, supplierData, {
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const updateSupplier = async (id, supplierData) => {
    const endpoint = `/suppliers/${id}`;
    return await put(endpoint, supplierData, {
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return { getSupplier, createSupplier, updateSupplier, loading, error, data };
};

export default useSupplier;
