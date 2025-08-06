"use client";
import { useEffect, useState, useRef } from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import UserTable from "@/components/pages/user/TableUser";
import {Button} from "@/components/atom/buttons/Button";

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

const UserPage = () => {
    const [librariesLoaded, setLibrariesLoaded] = useState(false);
    const userTableRef = useRef(null);

    useEffect(() => {
        loadJQueryAndDataTables().then(setLibrariesLoaded);
    }, []);

    const handleRefresh = () => {
        if (userTableRef.current) {
            userTableRef.current.refresh();
        }
    };

    return (
        <>
            <Breadcrumb title='User Management' />
            <div className="container-fluid">
                <div className='card basic-data-table'>
                    <div className='card-header d-flex justify-content-between align-items-center'>
                        <h5 className='card-title mb-0'>User List</h5>
                        <Button size={'sm'} color={'primary'} variant={'soft'} rightIcon={'ei:plus'} children={'Add User'}/>
                    </div>
                    <div className='card-body'>
                        {librariesLoaded ? (
                            <UserTable ref={userTableRef} librariesLoaded={librariesLoaded} />
                        ) : (
                            <div className="text-center p-5">Loading Table...</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;
