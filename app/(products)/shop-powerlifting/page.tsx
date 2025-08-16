import Products from "@/components/products/Products";
import React from "react";
import { SEO } from "@/components/common/Seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Weights, Bumpers, Calibrated Plates for Powerlifting",
  description: "Our calibrated weight plates are designed to meet the demands of powerlifting."
}

export default function page() {
  return (
    <>
      <Products initialFilters={{ categories: ["weightlifting"] }} />
    </>
  );
}
