// useAuth.js - UPDATED
import Cookies from 'js-cookie';
import useApiProxy from './useApiProxy';
import { useRouter } from 'next/navigation';

/**
 * Custom hook for handling authentication.
 * @returns {object} An object containing login/logout functions, loading state, error state, and data.
 */
const useAuth = () => {
    const { data, error, loading, post } = useApiProxy();
    const router = useRouter(); // 2. Initialize the router

    /**
     * Function to handle user login.
     * @param {string} email - The user's email.
     * @param {string} password - The user's password.
     */
    const login = async (email, password) => {
        const endpoint = `/auth/login`;
        const body = { email, password };
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await post(endpoint, body, options);

        if (response && response.access_token) {
            Cookies.set('authToken', response.access_token, { expires: 7 });
        }

        return response;
    };

    /**
     * 3. Create the logout function.
     * Removes the authentication cookie and redirects to the sign-in page.
     */
    const logout = () => {
        // Remove the cookie
        Cookies.remove('authToken');

        router.push('/auth/sign-in');
    };

    return { login, logout, loading, error, data };
};

export default useAuth;