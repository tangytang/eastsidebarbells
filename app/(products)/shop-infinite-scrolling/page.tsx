import React from "react";

import type { Metadata } from "next";
import Products6 from "@/components/products/Products6";

export const metadata: Metadata = {
  title: "Shop || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Products6 />
    </>
  );
}
