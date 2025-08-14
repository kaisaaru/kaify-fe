import { useState, useCallback } from 'react';
import axios from 'axios';


const PROXY_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * A custom hook to fetch data from a REST API via a proxy server.
 * It handles loading states, errors, and provides a simple interface for making requests.
 *
 * @returns {object} An object containing the fetched data, loading state, error state,
 * and functions to trigger API calls.
 */
const useApiProxy = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /**
     * A memoized function to make any API request through the proxy.
     * It's recommended to use the specific method functions like post(), get(), etc.
     * This function will automatically add the auth token to the headers if it exists.
     */
    const request = useCallback(async (endpoint, options = {}) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('authToken');

            // Prepare the headers
            const headers = {
                ...options.headers,
            };

            // If a token exists, add it to the Authorization header
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await axios({
                method: options.method || 'GET',
                url: `${PROXY_BASE_URL}${endpoint}`,
                data: options.body,
                headers: headers, // Use the updated headers
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

    /**
     * A helper function to make a POST request.
     * @param {string} endpoint - The API endpoint to hit.
     * @param {object} body - The request body.
     * @param {object} [options={}] - Optional configuration for the request.
     * @returns {Promise<any>} The response data from the API.
     */
     const get = useCallback((endpoint, options = {}) => {
        return request(endpoint, { 
            ...options, method: 'GET'
         });
    }, [request]);

    const patch = useCallback((endpoint, body, options = {}) => {
        return request(endpoint, { 
            ...options, method: 'PATCH', body
         });
    }, [request]);

    const del = useCallback((endpoint, options = {}) => {
        return request(endpoint, { 
            ...options, method: 'DELETE'
         });
    }, [request]);

    const post = useCallback((endpoint, body, options = {}) => {
        return request(endpoint, { 
            ...options, method: 'POST', body
         });
    }, [request]);

    return { data, error, loading, request, get, post, patch, del };
    
};

export default useApiProxy;
