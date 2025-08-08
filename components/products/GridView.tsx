"use client";
import ProductCard from "../productCards/ProductCard";
import Pagination from "../common/Pagination";
import type { Product } from "@/types/product";

interface GridViewProps {
  products: Product[];
  cardStyle?: number;
  pagination?: boolean;
}

export default function GridView({
  products,
  pagination = true,
  cardStyle = 1,
}: GridViewProps) {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard cardStyle={cardStyle} key={index} product={product} />
      ))}
      {/* pagination */}
      {pagination ? (
        <>
          <Pagination />
        </>
      ) : null}
    </>
  );
}
