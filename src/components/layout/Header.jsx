// src/components/layout/Header.jsx
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeToggleButton from "@/helper/ThemeToggleButton";

const Header = ({ sidebarActive, sidebarControl, mobileMenuControl }) => {
    return (
        <div className='navbar-header'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-auto'>
                    <div className='d-flex flex-wrap align-items-center gap-4'>
                        <button type='button' className='sidebar-toggle' onClick={sidebarControl}>
                            {sidebarActive ? (
                                <Icon icon='iconoir:arrow-right' className='icon text-2xl non-active' />
                            ) : (
                                <Icon icon='heroicons:bars-3-solid' className='icon text-2xl non-active' />
                            )}
                        </button>
                        <button onClick={mobileMenuControl} type='button' className='sidebar-mobile-toggle'>
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
                        {/* You can further componentize these dropdowns */}

                        {/* Language Dropdown */}
                        <div className='dropdown d-none d-sm-inline-block'>
                            {/* ... content of language dropdown ... */}
                        </div>

                        {/* Message Dropdown */}
                        <div className='dropdown'>
                            {/* ... content of message dropdown ... */}
                        </div>

                        {/* Notification Dropdown */}
                        <div className='dropdown'>
                            {/* ... content of notification dropdown ... */}
                        </div>

                        {/* Profile Dropdown */}
                        <div className='dropdown'>
                            <button className='d-flex justify-content-center align-items-center rounded-circle' type='button' data-bs-toggle='dropdown'>
                                <img src='/assets/images/user.png' alt='image_user' className='w-40-px h-40-px object-fit-cover rounded-circle' />
                            </button>
                            <div className='dropdown-menu to-top dropdown-menu-sm'>
                                <div className='py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                                    <div>
                                        <h6 className='text-lg text-primary-light fw-semibold mb-2'> Shaidul Islam </h6>
                                        <span className='text-secondary-light fw-medium text-sm'> Admin </span>
                                    </div>
                                    <button type='button' className='hover-text-danger'>
                                        <Icon icon='radix-icons:cross-1' className='icon text-xl' />
                                    </button>
                                </div>
                                <ul className='to-top-list'>
                                    <li> <Link className='dropdown-item ...' href='/view-profile'> <Icon icon='solar:user-linear' className='icon text-xl' /> My Profile</Link> </li>
                                    <li> <Link className='dropdown-item ...' href='/email'> <Icon icon='tabler:message-check' className='icon text-xl' /> Inbox</Link> </li>
                                    <li> <Link className='dropdown-item ...' href='/company'> <Icon icon='icon-park-outline:setting-two' className='icon text-xl' /> Setting</Link> </li>
                                    <li> <Link className='dropdown-item ...' href='#'> <Icon icon='lucide:power' className='icon text-xl' /> Log Out</Link> </li>
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