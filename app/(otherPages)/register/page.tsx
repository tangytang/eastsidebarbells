import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
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
      <Topbar1 />
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
