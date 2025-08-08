import React from "react";

import type { Metadata } from "next";
import Products5 from "@/components/products/Products5";

export const metadata: Metadata = {
  title: "Shop || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Products5 />
    </>
  );
}
