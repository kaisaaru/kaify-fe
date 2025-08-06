"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

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
        <button
          type='button'
          className='btn btn-primary text-sm btn-sm px-6 py-6 w-20 radius-8 d-flex align-items-center gap-2'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >
          <Icon
            icon='fa6-regular:square-plus'
            className='icon text-lg line-height-1'
          />
          Tambah
        </button>
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
              <th scope='col'>Nomor Barang</th>
              <th scope='col'>Nama Barang</th>
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
              <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Add New Event
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
                        Event Title :{" "}
                      </label>
                      <input
                        type='text'
                        className='form-control radius-8'
                        placeholder='Enter Event Title '
                      />
                    </div>
                    <div className='col-md-6 mb-20'>
                      <label
                        htmlFor='startDate'
                        className='form-label fw-semibold text-primary-light text-sm mb-8'
                      >
                        Start Date
                      </label>
                      <div className='position-relative'>
                        <span className='position-absolute end-0 top-50 translate-middle-y me-12 line-height-1'>
                          <Icon
                            icon='solar:calendar-linear'
                            className='icon text-lg'
                          ></Icon>
                        </span>
                      </div>
                    </div>
                    <div className='col-md-6 mb-20'>
                      <label
                        htmlFor='endDate'
                        className='form-label fw-semibold text-primary-light text-sm mb-8'
                      >
                        End Date
                      </label>
                      <div className='position-relative'>
                        <span className='position-absolute end-0 top-50 translate-middle-y me-12 line-height-1'>
                          <Icon
                            icon='solar:calendar-linear'
                            className='icon text-lg'
                          ></Icon>
                        </span>
                      </div>
                    </div>
                    <div className='col-12 mb-20'>
                      <label
                        htmlFor='endDate'
                        className='form-label fw-semibold text-primary-light text-sm mb-8'
                      >
                        Label{" "}
                      </label>
                      <div className='d-flex align-items-center flex-wrap gap-28'>
                        <div className='form-check checked-success d-flex align-items-center gap-2'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='label'
                            id='Personal'
                          />
                          <label
                            className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                            htmlFor='Personal'
                          >
                            <span className='w-8-px h-8-px bg-success-600 rounded-circle' />
                            Personal
                          </label>
                        </div>
                        <div className='form-check checked-primary d-flex align-items-center gap-2'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='label'
                            id='Business'
                          />
                          <label
                            className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                            htmlFor='Business'
                          >
                            <span className='w-8-px h-8-px bg-primary-600 rounded-circle' />
                            Business
                          </label>
                        </div>
                        <div className='form-check checked-warning d-flex align-items-center gap-2'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='label'
                            id='Family'
                          />
                          <label
                            className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                            htmlFor='Family'
                          >
                            <span className='w-8-px h-8-px bg-warning-600 rounded-circle' />
                            Family
                          </label>
                        </div>
                        <div className='form-check checked-secondary d-flex align-items-center gap-2'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='label'
                            id='Important'
                          />
                          <label
                            className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                            htmlFor='Important'
                          >
                            <span className='w-8-px h-8-px bg-lilac-600 rounded-circle' />
                            Important
                          </label>
                        </div>
                        <div className='form-check checked-danger d-flex align-items-center gap-2'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='label'
                            id='Holiday'
                          />
                          <label
                            className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                            htmlFor='Holiday'
                          >
                            <span className='w-8-px h-8-px bg-danger-600 rounded-circle' />
                            Holiday
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 mb-20'>
                      <label
                        htmlFor='desc'
                        className='form-label fw-semibold text-primary-light text-sm mb-8'
                      >
                        Description
                      </label>
                      <textarea
                        className='form-control'
                        id='desc'
                        rows={4}
                        cols={50}
                        placeholder='Write some text'
                        defaultValue={""}
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
