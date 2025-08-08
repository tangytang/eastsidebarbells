"use client";
import ProductCard2 from "../productCards/ProductCard2";
import Pagination from "../common/Pagination";
import type { Product } from "@/types/product";

interface ListProps {
  products: Product[];
  pagination?: boolean;
}
export default function Listview({ products, pagination = true }: ListProps) {
  return (
    <>
      {/* card product list 1 */}
      {products.map((product, i) => (
        <ProductCard2 product={product} key={i} />
      ))}
      {/* pagination */}
      {pagination ? (
        <ul className="wg-pagination ">
          <Pagination />
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
