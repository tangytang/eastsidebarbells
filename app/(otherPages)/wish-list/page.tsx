import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import SimmilerProducts from "@/components/otherPages/SimmilerProducts";
import Wishlist from "@/components/otherPages/Wishlist";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Wish List || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-3.jpg"
        pageName="Wish List"
        pageTitle="Wish List"
        parentPage=""
      />
      <Wishlist />
      <SimmilerProducts />
    </>
  );
}
