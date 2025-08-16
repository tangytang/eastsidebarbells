import Breadcumb from "@/components/common/Breadcumb";
import AccountAddress from "@/components/dashboard/AccountAddress";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "My Account Address || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Topbar2 />
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
      <AccountAddress />
    </>
  );
}
