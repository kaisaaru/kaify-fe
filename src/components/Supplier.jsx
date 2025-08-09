"use client";
//import Swal from 'sweetalert2';
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

// const handleDelete = () => {
//   Swal.fire({
//     title: 'Are you sure?',
//     text: "This action cannot be undone!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#d33',
//     cancelButtonColor: '#6c757d',
//     confirmButtonText: 'Yes, delete it!',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // Proceed with the delete action here
//       // For example, call an API or emit an event
//       console.log('Deleted!');
//       Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
//     }
//   });
// };

const Supplier = () => {
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
        <h5 className='card-title mb-0'>Default Data Tables</h5>
        <Link
          href={'/main/maintenance/supplier/addSupplier'}
          className='btn btn-primary'
        >
          Add Supplier
        </Link>
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
                  <label className='form-check-label'>No</label>
                </div>
              </th>
              <th scope='col'>Nama Supplier</th>
              <th scope='col'>Alamat</th>
              <th scope='col'>Nomor HP</th>
              <th scope='col'>Website</th>
              <th scope='col'>Bank Account</th>
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
                <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                    Kathryn Murphy
                  </h6>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  jl.titit bulus
                </div>
              </td>
              <td>+628252432</td>
              <td>GPT.nigger</td>
              <td>
                Bank nigger
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
                onClick={(e) => {
                    e.preventDefault();
                    handleDelete();
                }}
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

export default Supplier;
