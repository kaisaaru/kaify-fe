"use client";
import Select from 'react-select';
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

const jenisBarangOptions = [
  { value: 'jenis1', label: 'Jenis 1' },
  { value: 'jenis2', label: 'Jenis 2' },
  { value: 'jenis3', label: 'Jenis 3' }
];

const Barang = () => {
  useEffect(() => {
    let table;
    loadJQueryAndDataTables()
      .then(($) => {
        window.$ = window.jQuery = $;
        // Initialize DataTable
        table = $("#dataTable").DataTable({
          pageLength: 10,
        });
      })
      .catch((error) => {
        console.error("Error loading jQuery or DataTables:", error);
      });

    return () => {
      // Cleanup DataTable instance
      if (table) table.destroy(true);
    };
  }, []);
  return (
    <div className='card basic-data-table'>
      <div className='card-header d-flex justify-content-between align-items-center'>
        <h5 className='card-title mb-0'>Data Barang</h5>

        <div className='d-flex gap-2'>
          <button
            type='button'
            className='btn btn-success text-sm btn-sm px-6 py-6 w-20 radius-8 d-flex align-items-center gap-2'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <Icon icon='heroicons:printer' className='icon text-lg line-height-1' />
            Print
          </button>
          <button
            type='button'
            className='btn btn-primary text-sm btn-sm px-6 py-6 w-20 radius-8 d-flex align-items-center gap-2'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <Icon icon='heroicons:plus' className='icon text-lg line-height-1' />
            Tambah
          </button>
        </div>
      </div>
      <div className='card-body'>
        <table
          className='table bordered-table mb-0'
          id='dataTable'
          data-page-length={10}
        >
          <thead>
            <tr>
              <th scope='col'>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>#</label>
                </div>
              </th>
              <th scope='col'>Nomor</th>
              <th scope='col'>Nama</th>
              <th scope='col'>Harga</th>
              <th scope='col'>Satuan</th>
              <th scope='col'>Kategori</th>
              <th scope='col'>Sistem</th>
              <th scope='col'>Fisik</th>
              <th scope='col'>Selisih</th>
              <th scope='col'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>01</label>
                </div>
              </td>
              <td>
                <Link href='#' className='text-primary-600'>
                  #526534
                </Link>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  {/* <img
                    src='assets/images/user-list/user-list1.png'
                    alt=''
                    className='flex-shrink-0 me-12 radius-8'
                  /> */}
                  <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Kathryn Murphy
                  </h6>
                </div>
              </td>
              <td>
                Rp. 100.000
              </td>
              <td>biji</td>
              <td>K001</td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='iconamoon:eye-light' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='lucide:edit' />
                </Link>
                <Link
                  href='#'
                  className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
                >
                  <Icon icon='mingcute:delete-2-line' />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Modal Add Event */}
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-lg modal-dialog modal-dialog-centered'>
            <div className='modal-content radius-16 bg-base'>
              <div className='modal-header py-16 px-20 border border-top-0 border-start-0 border-end-0'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Tambah Barang
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body p-24'>
                <form action='#'>
                  <div className='row'>
                    <div className='col-12 mb-20'>
                      <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                        Nama Barang :{" "}
                      </label>
                      <input
                        type='text'
                        className='form-control radius-8'
                        placeholder='Enter Nama Barang '
                      />
                    </div>
                    <div className='col-12 mb-20'>
                      <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                        Jenis Barang:
                      </label>
                      <Select
                        className='react-select-container form control radius-8'
                        classNamePrefix='react-select'
                        options={jenisBarangOptions}
                        placeholder='Pilih Jenis Barang'
                        isClearable
                      />
                    </div>
                    <div className='col-12 mb-20'>
                      <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                        Stok :{" "}
                      </label>
                      <input
                        type='number'
                        className='form-control radius-8'
                        placeholder='Enter Stok '
                      />
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                      <button
                        type='reset'
                        className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
                      >
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className='btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8'
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barang;
