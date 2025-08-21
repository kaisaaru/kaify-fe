"use client";
import useApiProxy from './useApiProxy';
import Cookies from 'js-cookie';

const useContact = () => {
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

  const getAllContacts = async () => {
    try {
      const res = await get('/contacts', getAuthHeaders());
      return Array.isArray(res) ? res : res?.data || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const getContact = async (id) => {
    return await get(`/contacts/${id}`, getAuthHeaders());
  };

  const createContact = async (contactData) => {
    return await post('/contacts', contactData, getAuthHeaders());
  };

  const updateContact = async (id, contactData) => {
    return await patch(`/contacts/${id}`, contactData, getAuthHeaders());
  };

  const deleteContact = async (id) => {
    return await del(`/contacts/${id}`, getAuthHeaders());
  };

  return {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
    loading,
    error,
    data
  };
};

export default useContact;
