import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Checkout from "@/components/otherPages/Checkout";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-4.jpg"
        pageName="Check Out"
        pageTitle="Check Out"
        parentPage=""
      />
      <Checkout />
    </>
  );
}
