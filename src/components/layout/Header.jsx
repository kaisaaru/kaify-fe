// src/components/layout/Header.jsx
'use client'; // <-- Step 1: Make it a client component

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeToggleButton from "@/helper/ThemeToggleButton";
import useAuth from "@/hook/useAuth";
// import useCurrentUser from "@/hook/useCurrentUser"; // opsi A
import useCurrentUserFromJwt from "@/hook/useCurrentUserFromJwt"; // opsi B (fallback)

const Header = ({ sidebarActive, sidebarControl, mobileMenuControl }) => {
    const { logout } = useAuth();
    const { user } = useCurrentUserFromJwt(); // pakai ini kalau belum ada /auth/me

    return (
        <div className='navbar-header'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-auto'>
                    <div className='d-flex flex-wrap align-items-center gap-4'>
                        <button
                            type='button'
                            className='sidebar-toggle'
                            onClick={sidebarControl}
                        >
                            {sidebarActive ? (
                                <Icon
                                    icon='iconoir:arrow-right'
                                    className='icon text-2xl non-active'
                                />
                            ) : (
                                <Icon
                                    icon='heroicons:bars-3-solid'
                                    className='icon text-2xl non-active '
                                />
                            )}
                        </button>
                        <button
                            onClick={mobileMenuControl}
                            type='button'
                            className='sidebar-mobile-toggle'
                        >
                            <Icon icon='heroicons:bars-3-solid' className='icon' />
                        </button>
                        <form className='navbar-search'>
                            <input type='text' name='search' placeholder='Search' />
                            <Icon icon='ion:search-outline' className='icon' />
                        </form>
                    </div>
                </div>
                <div className='col-auto'>
                    <div className='d-flex flex-wrap align-items-center gap-3'>
                        <ThemeToggleButton />
                        {/* ... other dropdowns ... */}

                        {/* Profile Dropdown */}
                        <div className='dropdown'>
                            <button className='d-flex justify-content-center align-items-center rounded-circle' type='button' data-bs-toggle='dropdown'>
                                <img src='/assets/images/user.png' alt='image_user' className='w-40-px h-40-px object-fit-cover rounded-circle' />
                            </button>
                            <div className='dropdown-menu to-top dropdown-menu-sm'>
                                <div className='py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                                    <div>
                                        <h6 className='text-lg text-primary-light fw-semibold mb-2'>
                                            {(user?.username || 'MASA GADA WOI')}
                                        </h6>
                                        <span className='text-secondary-light fw-medium text-sm'>
                                            {(user?.role || 'User')}
                                        </span>
                                    </div>
                                    <button type='button' className='hover-text-danger'>
                                        <Icon icon='radix-icons:cross-1' className='icon text-xl' />
                                    </button>
                                </div>
                                <ul className='to-top-list'>
                                    <li> <Link className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3' href='/view-profile'> <Icon icon='solar:user-linear' className='icon text-xl' /> My Profile</Link> </li>
                                    <li> <Link className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3' href='/email'> <Icon icon='tabler:message-check' className='icon text-xl' /> Inbox</Link> </li>
                                    <li> <Link className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3' href='/company'> <Icon icon='icon-park-outline:setting-two' className='icon text-xl' /> Setting</Link> </li>
                                    {/* Step 3: Updated Log Out element */}
                                    <li>
                                        <button type='button' className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3' onClick={logout}>
                                            <Icon icon='lucide:power' className='icon text-xl' /> Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;