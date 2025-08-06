"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

const JenisBarang = () => {
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
      <div className='card-header'>
        <h5 className='card-title mb-0'>Data Jenis Barang</h5>
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
              <th scope='col'>Nama Jenis Barang</th>
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
      </div>
    </div>
  );
};

export default JenisBarang;
