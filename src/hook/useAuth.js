'use client';
import Cookies from 'js-cookie';
import useApiProxy from './useApiProxy';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const { data, error, loading, post } = useApiProxy();
  const router = useRouter();

  const login = async (email, password) => {
    const response = await post('/auth/login', { email, password }, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (response?.access_token) {
      const token = response.access_token;
      Cookies.set('authToken', token, { expires: 7, sameSite: 'lax' });
      if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', token);
      }
    }

    return response;
  };

  const logout = () => {
    Cookies.remove('authToken');
    if (typeof window !== 'undefined') localStorage.removeItem('authToken');
    router.push('/auth/sign-in');
  };

  return { login, logout, loading, error, data };
};

export default useAuth;
