// File: src/hooks/useApiProxy.js

import { useState, useCallback } from 'react';
import axios from 'axios';

// The base URL of your proxy server.
// Make sure this matches the port your proxy server is running on.
const PROXY_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * A custom hook to fetch data from a REST API via a proxy server.
 * It handles loading states, errors, and provides a simple interface for making requests.
 *
 * @returns {object} An object containing the fetched data, loading state, error state,
 * and a `request` function to trigger the API call.
 */
const useApiProxy = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /**
     * A memoized function to make an API request through the proxy.
     * @param {string} endpoint - The API endpoint to hit (e.g., '/users', '/posts/1').
     * @param {object} [options={}] - Optional configuration for the request.
     * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} [options.method='GET'] - The HTTP method.
     * @param {object} [options.body] - The request body for POST/PUT requests.
     * @param {object} [options.headers] - Custom headers for the request.
     */
    const request = useCallback(async (endpoint, options = {}) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await axios({
                method: options.method || 'GET',
                url: `${PROXY_BASE_URL}${endpoint}`,
                data: options.body,
                headers: options.headers,
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

    return { data, error, loading, request };
};

export default useApiProxy;
