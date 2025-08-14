"use client";
import { useEffect, useState, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import SupplierTable from "@/components/Supplier"; 
import { Button } from "@/components/atom/buttons/Button";

// Load jQuery & DataTables one time
const loadJQueryAndDataTables = async () => {
  try {
    const $ = (await import("jquery")).default;
    window.jQuery = window.$ = $;
    await import("datatables.net-dt/js/dataTables.dataTables.js");
    return true;
  } catch (error) {
    console.error("Failed to load DataTables libraries", error);
    return false;
  }
};

const Supplier = () => {
  const [librariesLoaded, setLibrariesLoaded] = useState(false);
  const supplierTableRef = useRef(null);

  // Load libraries only once
  useEffect(() => {
    loadJQueryAndDataTables().then((loaded) => {
      setLibrariesLoaded(loaded);
    });
  }, []);

  const handleRefresh = () => {
    supplierTableRef.current?.refresh();
  };

  return (
    <>
      <Breadcrumb title="Supplier" />
      <div className="container-fluid">
        <div className="card basic-data-table">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Supplier List</h5>
            <div className="d-flex gap-2">
              <Button
                size="sm"
                color="primary"
                variant="soft"
                rightIcon="ei:plus"
                onClick={() =>
                  (window.location.href =
                    "/main/maintenance/supplier/addSupplier")
                }
              >
                Add Supplier
              </Button>
              <Button
                size="sm"
                color="secondary"
                variant="soft"
                rightIcon="ei:refresh"
                onClick={handleRefresh}
              >
                Refresh
              </Button>
            </div>
          </div>
          <div className="card-body">
            {librariesLoaded ? (
              <SupplierTable
                ref={supplierTableRef}
                librariesLoaded={librariesLoaded}
              />
            ) : (
              <div className="text-center p-5">Loading Table...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplier;
