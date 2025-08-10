import Products from "@/components/products/Products";
import React from "react";
import { SEO } from "@/components/common/Seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Quality Weights & Bumpers for Weightlifting",
  description: "Competition plates are calibrated plates ideal for weightlifters and powerlifters. Their high density ensures minimal bounce and maximum durability, perfect for heavy lifting."
}

export default function page() {
  return (
    <>
      <Products initialFilters={{ categories: ["weightlifting"] }} />
    </>
  );
}
