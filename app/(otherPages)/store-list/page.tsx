import Breadcumb from "@/components/common/Breadcumb";
import Features3 from "@/components/common/Features3";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import StoreLocation from "@/components/otherPages/StoreLocation";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Store List || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-8.jpg"
        pageName="Store List"
        pageTitle="Store List"
      />
      <StoreLocation />
      <Features3 parentClass="flat-spacing" />
    </>
  );
}
