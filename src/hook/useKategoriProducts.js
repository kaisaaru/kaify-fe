'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const PATH = '/product-types';

// ===== Helpers token & header
const getToken = () =>
  typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

const authHeaders = () => {
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
};

// ====== READ
async function fetchKategori() {
  const r = await fetch(`${BASE}${PATH}`, {
    headers: { Accept: 'application/json', ...authHeaders() },
    cache: 'no-store',
  });
  if (!r.ok) {
    const t = await r.text().catch(() => '');
    throw new Error(`GET gagal: ${r.status} ${t || r.statusText}`);
  }
  return r.json();
}

export function useKategoriProducts() {
  return useQuery({
    queryKey: ['product-types'],
    queryFn: fetchKategori,
    staleTime: 60_000,
    retry: 0,
  });
}

// ====== CREATE dengan pre-check code & fallback PATCH
async function createOrReviveKategori(payload) {
  const r = await fetch(`${BASE}${PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(payload),
  });
  if (r.ok) return r.json().catch(() => null);

  // kalau server balas 500 saat code duplikat (soft-deleted),
  // berikan pesan yang jelas
  const body = await r.text().catch(() => '');
  throw new Error(
    'Gagal menambah. Kode sudah pernah digunakan. ' +
    'Gunakan kode lain atau minta admin menghapus permanen/restore. ' +
    `(server: ${r.status} ${body || r.statusText})`
  );
}


export function useCreateKategori() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createOrReviveKategori,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['product-types'] }),
  });
}

// ====== UPDATE (PATCH)
async function patchKategori({ id, payload }) {
  const r = await fetch(`${BASE}${PATH}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(payload),
  });
  const t = await r.text().catch(() => '');
  if (!r.ok) throw new Error(`Update gagal: ${r.status} ${t || r.statusText}`);
  return t ? JSON.parse(t) : null;
}

export function useUpdateKategori() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: patchKategori,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['product-types'] }),
  });
}

// ====== DELETE
async function removeKategori(id) {
  const r = await fetch(`${BASE}${PATH}/${id}`, {
    method: 'DELETE',
    headers: { ...authHeaders() },
  });
  const t = await r.text().catch(() => '');
  if (!r.ok) throw new Error(`Delete gagal: ${r.status} ${t || r.statusText}`);
  return true;
}

export function useDeleteKategori() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: removeKategori,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['product-types'] }),
  });
}
