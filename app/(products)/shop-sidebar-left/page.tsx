import type { Metadata } from "next";
import Products2 from "@/components/products/Products2";

export const metadata: Metadata = {
  title: "Shop || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Products2 />
    </>
  );
}
