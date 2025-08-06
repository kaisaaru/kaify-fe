// src/components/MasterLayout.jsx
"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Siderbar";
import Script from "next/script";


const MasterLayout = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const sidebarControl = () => {
    setSidebarActive(!sidebarActive);
  };

  const mobileMenuControl = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
      <section className={mobileMenu ? "overlay active" : "overlay"}>
        <Sidebar
            sidebarActive={sidebarActive}
            mobileMenu={mobileMenu}
            mobileMenuControl={mobileMenuControl}
        />

        <main className={sidebarActive ? "dashboard-main active" : "dashboard-main"}>
          <Header
              sidebarActive={sidebarActive}
              sidebarControl={sidebarControl}
              mobileMenuControl={mobileMenuControl}
          />

          <div className='dashboard-main-body'>{children}</div>

          <Footer />
        </main>
          <Script src="https://code.iconify.design/3/3.1.0/iconify.min.js" />
      </section>
  );
};

export default MasterLayout;