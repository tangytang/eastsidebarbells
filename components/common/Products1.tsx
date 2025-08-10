import ProductCard from "@/components/productCards/ProductCard";
import { products } from "@/data/products";
import React from "react";

export default function Products1({
  id,
  cardStyle = 1,
}: {
  id?: string;
  cardStyle?: number;
}) {
  return (
    <section id={id} className="flat-spacing-5 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Buy Quality Weights</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Load your barbells with our premium bumpers and plates for a
                solid workout.
              </p>
            </div>
            <div className="tf-grid-layout tf-col-2 lg-col-4">
              {products.map((product, index) => (
                <ProductCard
                  cardStyle={cardStyle}
                  product={product}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
