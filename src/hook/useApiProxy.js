'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';

const PROXY_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const useApiProxy = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
      const headers = { ...(options.headers || {}) };
      if (token) headers.Authorization = `Bearer ${token}`;

      const response = await axios({
        method: options.method || 'GET',
        url: `${PROXY_BASE_URL}${endpoint}`,
        data: options.body,
        headers,
        withCredentials: false, // karena pakai Bearer, bukan cookie httpOnly
      });

      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An unknown error occurred.';
      setError({ message: errorMessage, status: err.response?.status });
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const post = useCallback((endpoint, body, options = {}) => {
    return request(endpoint, { ...options, method: 'POST', body });
  }, [request]);

  return { data, error, loading, request, post };
};

export default useApiProxy;
