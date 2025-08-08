import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/Descriptions1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import StickyProduct from "@/components/productDetails/StickyProduct";
import { allProducts } from "@/data/products";
import React from "react";

import type { Metadata } from "next";
import Details11 from "@/components/productDetails/Details11";

export const metadata: Metadata = {
  title:
    "Product Details || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
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
      <Details11 product={product} />
      <Descriptions1 />
      <RelatedProducts />
      <StickyProduct />
    </>
  );
}
