'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const PATH = '/relations';

// ===== Helpers token & header
const getToken = () =>
    typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

const authHeaders = () => {
    const t = getToken();
    return t ? { Authorization: `Bearer ${t}` } : {};
};

// ====== READ
async function fetchRelasi() {
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

export function useRelasiList() {
    return useQuery({
        queryKey: ['relations'],
        queryFn: fetchRelasi,
        staleTime: 60_000,
        retry: 0,
    });
}

// ====== CREATE
async function createRelasi(payload) {
    const r = await fetch(`${BASE}${PATH}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify(payload),
    });
    const t = await r.text().catch(() => '');
    if (!r.ok) throw new Error(`Create gagal: ${r.status} ${t || r.statusText}`);
    return t ? JSON.parse(t) : null;
}

export function useCreateRelasi() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: createRelasi,
        onSuccess: () => qc.invalidateQueries({ queryKey: ['relations'] }),
    });
}

// ====== UPDATE (PATCH)
async function patchRelasi({ id, payload }) {
    const r = await fetch(`${BASE}${PATH}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify(payload),
    });
    const t = await r.text().catch(() => '');
    if (!r.ok) throw new Error(`Update gagal: ${r.status} ${t || r.statusText}`);
    return t ? JSON.parse(t) : null;
}

export function useUpdateRelasi() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: patchRelasi,
        onSuccess: () => qc.invalidateQueries({ queryKey: ['relations'] }),
    });
}

// ====== DELETE
async function removeRelasi(id) {
    const r = await fetch(`${BASE}${PATH}/${id}`, {
        method: 'DELETE',
        headers: { ...authHeaders() },
    });
    const t = await r.text().catch(() => '');
    if (!r.ok) throw new Error(`Delete gagal: ${r.status} ${t || r.statusText}`);
    return true;
}

export function useDeleteRelasi() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: removeRelasi,
        onSuccess: () => qc.invalidateQueries({ queryKey: ['relations'] }),
    });
}
