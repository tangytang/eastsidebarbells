import React from "react";

import type { Metadata } from "next";
import Products6 from "@/components/products/Products6";

export const metadata: Metadata = {
  title: "Shop || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Products6 />
    </>
  );
}
