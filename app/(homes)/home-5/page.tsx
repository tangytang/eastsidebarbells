import Blogs from "@/components/common/Blogs";
import Collections from "@/components/common/Collections";
import Collections2 from "@/components/common/Collections2";
import Collections3 from "@/components/common/Collections3";
import Lookbook from "@/components/common/Lookbook";
import Products1 from "@/components/common/Products1";
import ShopGram from "@/components/common/ShopGram";

import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-5/Banner";
import Collections5 from "@/components/homes/home-5/Collections";
import React from "react";

import type { Metadata } from "next";
import Topbar2 from "@/components/headers/Topbar2";

export const metadata: Metadata = {
  title: "Home 05 || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 parentClass="header-default border-bot" />
      <Collections3 parentClass="slider-home5" />
      <Collections5 />
      <Products1 cardStyle={5} />
      <Lookbook />
      <Collections2 />
      <Banner />
      <Collections />
      <Blogs parentClass="flat-spacing-2 pt-0 section-news-insight" />
      <ShopGram />
    </>
  );
}
