'use client';
import Cookies from 'js-cookie';

export default function getUserFromToken() {
  try {
    const token = Cookies.get('authToken') || (typeof window !== 'undefined' ? localStorage.getItem('authToken') : null);
    if (!token) return null;
    const [, payload] = token.split('.'); // header.payload.signature
    if (!payload) return null;
    const json = JSON.parse(typeof window === 'undefined'
      ? Buffer.from(payload, 'base64').toString('utf8')
      : decodeURIComponent(escape(window.atob(payload))));
    // Sesuaikan claim sesuai backend kamu (contoh):
    return {
      name: json.name || json.full_name || json.user?.name,
      username: json.username || json.preferred_username || json.user?.username,
      role: json.role || json.user?.role
    };
  } catch {
    return null;
  }
}
