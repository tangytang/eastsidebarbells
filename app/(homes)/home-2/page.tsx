import Products1 from "@/components/common/Products1";

import Features from "@/components/common/Features";
import Categories from "@/components/homes/home-2/Categories";
import Collections from "@/components/common/Collections3";
import Collections2 from "@/components/homes/home-2/Collections2";
import Hero from "@/components/homes/home-2/Hero";
import Lookbook from "@/components/homes/home-2/Lookbook";
import Products2 from "@/components/homes/home-2/Products2";
import Topbar2 from "@/components/headers/Topbar2";
import React from "react";
import Testimonials from "@/components/common/Testimonials";
import Blogs from "@/components/common/Blogs";
import Shopgram from "@/components/homes/home-2/Shopgram";

import Header1 from "@/components/headers/Header1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home 02 || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Hero />
      <Categories />
      <Collections />
      <Products1 cardStyle={2} />
      <Collections2 />
      <Products2 />
      <Lookbook />
      <Features parentClass="flat-spacing-2 line-top-container" />
      <Testimonials parentClass="flat-spacing-2 section-testimonials" />
      <Blogs parentClass="flat-spacing-2 section-news-insight" />
      <Shopgram />
    </>
  );
}
