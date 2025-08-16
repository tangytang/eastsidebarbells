import type { Metadata } from "next";
import Products2 from "@/components/products/Products2";

export const metadata: Metadata = {
  title: "Shop || Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
  description: "Quality Bumpers, Weights, Competition Plates for Crossfit, Powerlifting, and Hyrox in SG",
};

export default function page() {
  return (
    <>
      <Products2 />
    </>
  );
}
