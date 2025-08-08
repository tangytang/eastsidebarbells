import Breadcumb from "@/components/common/Breadcumb";
import OrderDetails from "@/components/dashboard/OrderDetails";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "My Acccount Order Details || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-7.jpg"
        pageName="My Account"
        pageTitle="My Account"
      />
      <div className="btn-sidebar-account">
        <button data-bs-toggle="offcanvas" data-bs-target="#mbAccount">
          <i className="icon icon-squaresfour"></i>
        </button>
      </div>
      <OrderDetails />
    </>
  );
}
