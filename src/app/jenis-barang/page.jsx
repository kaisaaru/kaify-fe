// jenis-barang/page.jsx

import JenisBarang from "@/components/JenisBarang";
import MasterLayout from "@/masterLayout/MasterLayout";
import { Icon } from "@iconify/react"; // <-- TAMBAHKAN IMPORT INI
import Link from "next/link"; // <-- TAMBAHKAN IMPORT INI

export const metadata = {
  title: "Jenis Barang - Kaify",
  description:
    "Wowdash NEXT JS is a developer-friendly, ready-to-use admin template designed for building attractive, scalable, and high-performing web applications.",
};

const Page = () => {
  return (
    <>
      <MasterLayout>
        {/* Hapus <Breadcrumb /> dan ganti dengan kode di bawah */}
        <div className='d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24'>
          <h6 className='fw-semibold mb-0'>Maintenance</h6>
          <ul className='d-flex align-items-center gap-2'>
            <li className='fw-medium'>
              <Link
                href=''
                className='d-flex align-items-center gap-1 hover-text-primary'
              >
                <Icon
                  icon='heroicons:wrench-screwdriver'
                  className='icon text-lg'
                />
                Maintenance
              </Link>
            </li>
            <li> - </li>
            <li className='fw-medium'>Jenis Barang</li>
          </ul>
        </div>

        {/* Jenis Barang */}
        <JenisBarang />
      </MasterLayout>
    </>
  );
};

export default Page;