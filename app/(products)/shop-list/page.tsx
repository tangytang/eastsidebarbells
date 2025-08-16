import Products1 from "@/components/products/Products1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Products1 defaultActiveLayout={1} />
    </>
  );
}
