import React from "react";

import type { Metadata } from "next";
import Products4 from "@/components/products/Products4";

export const metadata: Metadata = {
  title: "Shop || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Products4 />
    </>
  );
}
