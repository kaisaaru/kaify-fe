// src/components/layout/Siderbar.jsx
"use client";
import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

// --- Data from API ---
// This data is assumed to be pre-filtered by the API.
// Inactive (status: false) or soft-deleted (deleted_at: value) items are not sent.
const mockApiData = [
    {
        id: 8,
        name: 'Dashboard',
        icon: 'solar:home-smile-angle-outline',
        link: '/',
        order_num: 1,
        children: []
    },
    {
        id: 1,
        name: 'Maintenance',
        icon: 'heroicons:wrench-screwdriver',
        link: '#',
        order_num: 10,
        children: [
            { id: 2, name: 'Barang', link: '/main/maintenance/barang', order_num: 1, parent_id: 1 },
            { id: 3, name: 'Jenis Barang', link: '/main/maintenance/jenis-barang', order_num: 2, parent_id: 1 },
            { id: 4, name: 'Supplier', link: '/main/maintenance/supplier', order_num: 3, parent_id: 1 },
        ]
    },
    {
        id: 5,
        name: 'Transactions',
        icon: 'heroicons:shopping-cart',
        link: '#',
        order_num: 20,
        children: [
            { id: 6, name: 'Barang Masuk', link: '/main/barang-masuk', order_num: 1, parent_id: 5 },
            { id: 7, name: 'Barang Keluar', link: '/main/barang-keluar', order_num: 2, parent_id: 5 },
        ]
    },
    {
        id: 9,
        name: 'Reports',
        icon: 'heroicons:document-chart-bar',
        link: '#',
        order_num: 30,
        children: [
            { id: 10, name: 'Laporan Barang Masuk', link: '/main/report/barang-masuk', order_num: 1, parent_id: 9 },
            { id: 11, name: 'Laporan Barang Keluar', link: '/main/report/barang-keluar', order_num: 2, parent_id: 9 },
        ]
    },
    {
        id: 12,
        name: 'User Management',
        icon: 'heroicons:users',
        link: '#',
        order_num: 40,
        children: [
            { id: 13, name: 'User', link: '/main/user', order_num: 1, parent_id: 12 },
            { id: 14, name: 'Role', link: '/main/role', order_num: 2, parent_id: 12 },
            { id: 15, name: 'Accesses', link: '/main/menu-access', order_num: 2, parent_id: 12 },
        ]
    },
];


const Sidebar = ({ sidebarActive, mobileMenu, mobileMenuControl }) => {
    const pathname = usePathname();

    const menuItems = useMemo(() => {
        return mockApiData.sort((a, b) => a.order_num - b.order_num);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleDropdownClick = (event) => {
            event.preventDefault();
            const clickedLink = event.currentTarget;
            const clickedDropdown = clickedLink.closest(".dropdown");
            if (!clickedDropdown) return;
            const isActive = clickedDropdown.classList.contains("open");
            document.querySelectorAll(".sidebar-menu .dropdown").forEach((dropdown) => {
                if (dropdown !== clickedDropdown) {
                    dropdown.classList.remove("open");
                    const submenu = dropdown.querySelector(".sidebar-submenu");
                    if (submenu) submenu.style.maxHeight = "0px";
                }
            });
            if (isActive) {
                clickedDropdown.classList.remove("open");
                const submenu = clickedDropdown.querySelector(".sidebar-submenu");
                if (submenu) submenu.style.maxHeight = "0px";
            } else {
                clickedDropdown.classList.add("open");
                const submenu = clickedDropdown.querySelector(".sidebar-submenu");
                if (submenu) submenu.style.maxHeight = `${submenu.scrollHeight}px`;
            }
        };
        const dropdownTriggers = document.querySelectorAll(".sidebar-menu .dropdown > a");
        dropdownTriggers.forEach((trigger) => trigger.addEventListener("click", handleDropdownClick));

        const openActiveDropdown = () => {
            const activeLink = document.querySelector(".sidebar-submenu .active-page");
            if (activeLink) {
                const parentDropdown = activeLink.closest(".dropdown");
                if (parentDropdown) {
                    parentDropdown.classList.add("open");
                    const submenu = parentDropdown.querySelector(".sidebar-submenu");
                    if (submenu) submenu.style.maxHeight = `${submenu.scrollHeight}px`;
                }
            }
        };
        openActiveDropdown();

        return () => {
            dropdownTriggers.forEach((trigger) => trigger.removeEventListener("click", handleDropdownClick));
        };
    }, [pathname]);

    return (
        <aside className={ sidebarActive ? "sidebar active" : mobileMenu ? "sidebar sidebar-open" : "sidebar" } >
            <button onClick={mobileMenuControl} type='button' className='sidebar-close-btn'>
                <Icon icon='radix-icons:cross-2' />
            </button>
            <div>
                <Link href='/' className='sidebar-logo'>
                    <img src='/assets/images/logo.png' alt='site logo' className='light-logo' />
                    <img src='/assets/images/logo-light.png' alt='site logo' className='dark-logo' />
                    <img src='/assets/images/logo-icon.png' alt='site logo' className='logo-icon' />
                </Link>
            </div>

            <div className='sidebar-menu-area'>
                <ul className='sidebar-menu' id='sidebar-menu'>
                    {menuItems.map((item) => {
                        const isDropdown = item.children && item.children.length > 0;

                        if (isDropdown) {
                            return (
                                <li key={item.id} className='dropdown'>
                                    <Link href={item.link}>
                                        <Icon icon={item.icon || 'heroicons:folder'} className='menu-icon' />
                                        <span>{item.name}</span>
                                    </Link>
                                    <ul className='sidebar-submenu'>
                                        {/* No need to filter children; we map them directly after sorting. */}
                                        {item.children
                                            .sort((a,b) => a.order_num - b.order_num)
                                            .map((child) => (
                                                <li key={child.id}>
                                                    <Link
                                                        href={child.link}
                                                        className={pathname === child.link ? "active-page" : ""}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </li>
                            );
                        }

                        // Render a regular link
                        return (
                            <li key={item.id}>
                                <Link href={item.link} className={pathname === item.link ? "active-page" : ""}>
                                    <Icon icon={item.icon || 'heroicons:document'} className='menu-icon' />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;