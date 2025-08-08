import React from "react";
import ProductCard from "../productCards/ProductCard";
import { products } from "@/data/products";

export default function Wishlist() {
  return (
    <section className="flat-spacing pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf-grid-layout tf-col-2 lg-col-4">
              {products.slice(0, 4).map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
