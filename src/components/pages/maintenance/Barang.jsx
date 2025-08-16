"use client";
import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useProducts } from "@/hook/useProducts";

const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  // await import("datatables.net-dt/css/jquery.dataTables.css");
  return $;
};

export default function Barang() {
  const { data, isLoading, error } = useProducts();
  const tableRef = useRef(null);
  const dtRef = useRef(null);

  const products = useMemo(() => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.data)) return data.data;
    if (Array.isArray(data.items)) return data.items;
    if (Array.isArray(data.result)) return data.result;
    return [];
  }, [data]);


  useEffect(() => {
    let cleanup = () => { };
    if (!products.length || !tableRef.current) return;

    (async () => {
      const $ = await loadJQueryAndDataTables();
      if (dtRef.current) {
        dtRef.current.destroy(true);
        dtRef.current = null;
      }
      dtRef.current = $(tableRef.current).DataTable({ pageLength: 10 });
      cleanup = () => {
        if (dtRef.current) {
          dtRef.current.destroy(true);
          dtRef.current = null;
        }
      };
    })();

    return () => cleanup();
  }, [products]);

  if (isLoading) return <div className="card"><div className="card-body">Memuat…</div></div>;
  if (error) return <div className="card"><div className="card-body text-danger">{error.message}</div></div>;

  return (
    <div className='card basic-data-table'>
      <div className='card-header'><h5 className='card-title mb-0'>Daftar Barang</h5></div>
      <div className='card-body'>
        <table className='table bordered-table mb-0' id='dataTable' ref={tableRef} data-page-length={10}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nomor</th>
              <th>Nama</th>
              <th>Spek</th>
              <th>Deskripsi</th>
              <th>Unit</th>
              <th>Fisik</th>
              <th>Selisih</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => {
              // mapping field sesuaikan dengan schema API kamu
              const sistem = p.stockSystem ?? 0;
              const fisik = p.stockPhysical ?? 0;
              const selisih = fisik - sistem;
              return (
                <tr key={p.id ?? i}>
                  <td>{String(i + 1).padStart(2, "0")}</td>
                  <td><Link href={`/barang/${p.id ?? ""}`} className="text-primary-600">{p.code ?? "-"}</Link></td>
                  <td>{p.name ?? "-"}</td>
                  <td>{p.unit ?? "-"}</td>
                  <td>{p.productTypeName ?? p.productTypeId ?? "-"}</td>
                  <td>{sistem}</td>
                  <td>{fisik}</td>
                  <td>{selisih}</td>
                  <td className="d-flex">
                    <Link href={`/barang/${p.id ?? ""}`} className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center" title="Detail">
                      <Icon icon='iconamoon:eye-light' />
                    </Link>
                    <Link href={`/barang/${p.id ?? ""}/edit`} className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center" title="Edit">
                      <Icon icon='lucide:edit' />
                    </Link>
                    <button className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center" title="Hapus">
                      <Icon icon='mingcute:delete-2-line' />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
