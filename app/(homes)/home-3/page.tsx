import Blogs from "@/components/common/Blogs";
import Lookbook from "@/components/common/Lookbook";
import Products1 from "@/components/common/Products1";
import Header2 from "@/components/headers/Header2";
import ShopGram from "@/components/common/ShopGram";
import Categories from "@/components/homes/home-3/Categories";
import Collection from "@/components/homes/home-3/Collection";
import Hero from "@/components/homes/home-3/Hero";
import Products2 from "@/components/homes/home-3/Products2";
import Testimonials from "@/components/homes/home-3/Testimonials";
import React from "react";
import Features from "@/components/common/Features";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home 03 || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <div className="space-1"></div>
      <Header2 />
      <Hero />
      <Categories />
      <Products1 cardStyle={3} />
      <Lookbook />
      <Products2 />
      <Testimonials />
      <Collection />
      <Blogs parentClass="flat-spacing-2 section-news-insight" />
      <ShopGram />
      <Features parentClass="flat-spacing-2 pt-0" />
    </>
  );
}
