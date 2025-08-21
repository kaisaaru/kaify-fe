"use client";
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import useSupplier from "@/hook/useSupplier";
import Modal from "@/components/Modal";
import EditSupplier from "@/components/EditSupplier";
import AddSupplier from "@/components/AddSupplier";

const SupplierTable = forwardRef(({ librariesLoaded }, ref) => {
  const { getAllSuppliers, deleteSupplier } = useSupplier();
  const dataTableRef = useRef(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedSupplierId, setSelectedSupplierId] = useState(null);

  // Expose refresh method to parent
  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    refresh() {
      if (dataTableRef.current) {
        dataTableRef.current.ajax.reload(null, false);
      }
    },
    openAddModal() {
      setIsAddOpen(true);
    },
  }));


  useEffect(() => {
    if (!librariesLoaded) return;

    const $ = window.jQuery;
    const tableElement = $("#suppliers-table");

    if ($.fn.DataTable.isDataTable(tableElement)) return;

    const dataTable = tableElement.DataTable({
      serverSide: false, // client-side mode
      processing: true,
      ajax: (data, callback) => {
        let aborted = false;

        (async () => {
          try {
            const suppliers = await getAllSuppliers(); // returns { data: [] }
            if (!aborted) {
              callback({ data: suppliers.data || suppliers });
            }
          } catch (err) {
            console.error("Error fetching suppliers:", err);
            if (!aborted) {
              callback({ data: [] });
            }
          }
        })();

        // return an abortable object to prevent xhr.abort errors
        return { abort: () => { aborted = true; } };
      },
      columns: [
        {
          data: null,
          orderable: false,
          render: (data, type, row, meta) => meta.row + 1,
        },
        { data: "name", defaultContent: "<em>N/A</em>" },
        { data: "address", defaultContent: "<em>N/A</em>" },
        { data: "phone", defaultContent: "<em>N/A</em>" },
        { data: "website", defaultContent: "<em>N/A</em>" },
        { data: "bankAccount", defaultContent: "<em>N/A</em>" },
        { data: "note", defaultContent: "<em>N/A</em>" },
        {
          data: "id",
          orderable: false,
          render: (id) => `
          <a href="/main/maintenance/supplier/${id}" 
             class="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center add-supplier-btn" 
             title="View">
             <i class="iconify" data-icon="iconamoon:eye-light"></i>
          </a>
          <a href="#" data-contact-id="${id}
             class="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center edit-supplier-btn" 
             title="Edit">
             <i class="iconify" data-icon="lucide:edit"></i>
          </a>
          <a href="#" data-supplier-id="${id}" 
             class="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center delete-supplier-btn" 
             title="Delete">
             <i class="iconify" data-icon="mingcute:delete-2-line"></i>
          </a>
        `,
        },
      ],
      responsive: true,
      pageLength: 10,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search...",
      },
      pagingType: "simple_numbers",
    });

    dataTableRef.current = dataTable;

    //Add handler
    tableElement.on("click", ".add-supplier-btn", function (e) {
      e.preventDefault();
      const supplierId = $(this).data("supplier-id");
      setSelectedSupplierId(supplierId);
      setIsEditOpen(true);
    });


    //Edit handler
    tableElement.on("click", ".edit-supplier-btn", function (e) {
      e.preventDefault();
      const supplierId = $(this).data("supplier-id");
      setSelectedSupplierId(supplierId);
      setIsEditOpen(true);
    });

    // Delete handler
    tableElement.on("click", ".delete-supplier-btn", async function (e) {
      e.preventDefault();
      const supplierId = $(this).data("supplier-id");
      if (confirm("Are you sure you want to delete this supplier?")) {
        try {
          await deleteSupplier(supplierId);

          // Instead of reloading entire table, remove the row directly
          const row = $(this).closest("tr");
          dataTable.row(row).remove().draw(false);
        } catch (err) {
          console.error("Failed to delete supplier:", err);
        }
      }
    });

    // Iconify render after draw
    const iconifyScan = () => {
      if (window.Iconify) window.Iconify.scan();
    };
    dataTable.on("draw", iconifyScan);

    return () => {
      dataTable.off("draw", iconifyScan);
      tableElement.off("click", ".delete-supplier-btn");
      if ($.fn.DataTable.isDataTable(tableElement)) {
        tableElement.DataTable().destroy();
      }
    };

  }, [librariesLoaded]);



  return (
    <div className="table-responsive">
      <table id="suppliers-table" className="table bordered-table w-100">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Supplier</th>
            <th>Alamat</th>
            <th>Nomor HP</th>
            <th>Website</th>
            <th>Bank Account</th>
            <th>Note</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>{/* Filled by DataTables */}</tbody>
      </table>

      <Modal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title="Add Supplier"
      >
        <AddSupplier
          onSuccess={() => ref.current?.refresh()}
          onClose={() => setIsAddOpen(false)}
        />
      </Modal>


      <Modal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Edit Supplier"
      >
        {selectedSupplierId && <EditSupplier supplierId={selectedSupplierId} />}
      </Modal>
    </div>
  );
});

export default SupplierTable;
