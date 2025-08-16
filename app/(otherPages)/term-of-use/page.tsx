import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Terms from "@/components/otherPages/Terms";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Term Of Use || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Topbar2 />
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
