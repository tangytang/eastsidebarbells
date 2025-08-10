import Products from "@/components/products/Products";
import React from "react";
import { SEO } from "@/components/common/Seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Rubber Bumpers & Weights | Crossfit & Hyrox",
  description: "Rubber bumpers and weights provide a larger surface area for reduced impact and sound absorption during workouts."
}

export default function page() {
  return (
    <>
      <Products initialFilters={{ categories: ["crossfit"] }} />
    </>
  );
}
