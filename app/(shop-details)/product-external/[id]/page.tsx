import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/Descriptions1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import StickyProduct from "@/components/productDetails/StickyProduct";
import { allProducts } from "@/data/products";
import React from "react";

import type { Metadata } from "next";
import Details15 from "@/components/productDetails/Details15";

export const metadata: Metadata = {
  title:
    "Product Details || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <Breadcumb product={product} />
      <Details15 product={product} />
      <Descriptions1 />
      <StickyProduct />
    </>
  );
}
