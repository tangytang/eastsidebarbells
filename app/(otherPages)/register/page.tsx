import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Register from "@/components/otherPages/Register";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-5.jpg"
        pageName="Account"
        pageTitle="Register"
        parentPage=""
      />
      <Register />
    </>
  );
}
