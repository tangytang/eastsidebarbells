import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Terms from "@/components/otherPages/Terms";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Term Of Use || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-7.jpg"
        pageName="Terms Of Use"
        pageTitle="Terms Of Use"
      />
      <Terms />
    </>
  );
}
