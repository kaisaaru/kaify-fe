"use client";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import useApiProxy from "@/hook/useApiProxy";

const UserTable = forwardRef(({ librariesLoaded }, ref) => {
    const { request } = useApiProxy();
    const dataTableRef = useRef(null);

    useImperativeHandle(ref, () => ({
        refresh() {
            if (dataTableRef.current) {
                dataTableRef.current.ajax.reload(null, false); // 'false' prevents resetting the current page
            }
        }
    }));

    useEffect(() => {
        if (!librariesLoaded) return;

        const $ = window.jQuery;
        const tableElement = $('#users-table');

        if ($.fn.DataTable.isDataTable(tableElement)) {
            return;
        }

        const dataTable = tableElement.DataTable({
            serverSide: true,
            processing: true,
            ajax: (data, callback, settings) => {
                const limit = data.length;
                const offset = data.start;
                const searchQuery = data.search.value;

                const endpoint = `/users?limit=${limit}&offset=${offset}&search=${searchQuery}`;

                request(endpoint).then(apiResponse => {
                    callback({
                        draw: data.draw,
                        recordsTotal: apiResponse ? apiResponse.total : 0,
                        recordsFiltered: apiResponse ? apiResponse.total : 0,
                        data: apiResponse ? apiResponse.data : [],
                    });
                });
            },
            columns: [
                {
                    data: null,
                    orderable: false,
                    render: (data, type, row, meta) => {
                        const pageInfo = tableElement.DataTable().page.info();
                        return pageInfo.start + meta.row + 1;
                    }
                },
                { data: 'name', render: (data) => data || 'N/A' },
                { data: 'email', defaultContent: '<em>Not provided</em>' },
                { data: 'username', defaultContent: '<em>Not provided</em>' },
                {
                    data: 'role.name',
                    render: (data) => {
                        const role = data || 'N/A';
                        let badgeClass = 'bg-secondary-focus text-secondary-main';
                        if (role.toLowerCase() === 'admin') badgeClass = 'bg-success-focus text-success-main';
                        return `<span class="badge ${badgeClass}">${role}</span>`;
                    }
                },
                {
                    data: 'createdAt',
                    render: (data) => {
                        if (!data) return '<em>N/A</em>';
                        return new Date(data).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
                    },
                },
                {
                    data: 'id',
                    orderable: false,
                    render: (id) => `
                        <a href="/users/view/${id}" class="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center" title="View"><i class="iconify" data-icon="iconamoon:eye-light"></i></a>
                        <a href="/users/edit/${id}" class="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center" title="Edit"><i class="iconify" data-icon="lucide:edit"></i></a>
                        <a href="#" class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center" title="Delete" data-user-id="${id}"><i class="iconify" data-icon="mingcute:delete-2-line"></i></a>
                      `,
                },
            ],
            responsive: true,
            pageLength: 10,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search...",
            },
            pagingType: 'simple_numbers',
        });

        dataTableRef.current = dataTable;

        const iconifyScan = () => {
            if (window.Iconify) window.Iconify.scan();
        }
        dataTable.on('draw', iconifyScan);

        return () => {
            dataTable.off('draw', iconifyScan);
            if ($.fn.DataTable.isDataTable(tableElement)) {
                tableElement.DataTable().destroy();
            }
        };
    }, [librariesLoaded, request]);

    return (
        <div className="table-responsive">
            <table id='users-table' className='table bordered-table w-100'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* DataTables will populate this via AJAX */}
                </tbody>
            </table>
        </div>
    );
});

export default UserTable;
