'use client';
import { useQuery } from '@tanstack/react-query';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

async function fetchProducts() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  const url = `${BASE}/products`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: 'no-store',
  });

  const json = await res.json().catch(() => null);
  console.log('GET', url, 'status=', res.status, 'json=', json); // 👈 lihat bentuk response

  if (res.status === 401) throw new Error('Unauthorized (401): silakan login dulu');
  if (!res.ok) throw new Error(`Fetch gagal: ${res.status} ${res.statusText}`);

  return json;
}


export function useProducts() {
  return useQuery({ queryKey: ['products'], queryFn: fetchProducts, staleTime: 60_000, retry: 0 });
}
