import Products from "@/components/products/Products";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Products initialFilters={{ categories: ["accessory"] }} />
    </>
  );
}
