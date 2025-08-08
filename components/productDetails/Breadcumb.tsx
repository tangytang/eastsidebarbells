import { allProducts } from "@/data/products";
import Link from "next/link";
import React from "react";

export default function Breadcumb({
  product = {
    id: 1,
    title: "Ergonomic Chair Pro",
  },
}) {
  const id = product.id;
  return (
    <div className="tf-breadcrumb">
      <div className="container">
        <div className="tf-breadcrumb-wrap">
          <div className="tf-breadcrumb-list">
            <Link href={`/`} className="text text-caption-1">
              Homepage
            </Link>
            <i className="icon icon-right" />
            <a href="#" className="text text-caption-1">
              Chair
            </a>
            <i className="icon icon-right" />
            <span className="text_secondary2 text-caption-1">
              {product.title ? product.title : ""}
            </span>
          </div>
          <div className="tf-breadcrumb-prev-next">
            <Link
              href={`/product-detail/${
                id == 1 ? allProducts[allProducts.length - 1].id : id - 1
              }`}
              className="tf-breadcrumb-prev"
            >
              <i className="icon icon-left" />
            </Link>
            <a href="#" className="tf-breadcrumb-back">
              <i className="icon icon-squaresfour" />
            </a>
            <Link
              href={`/product-detail/${
                id == allProducts[allProducts.length - 1].id ? 1 : id + 1
              }`}
              className="tf-breadcrumb-next"
            >
              <i className="icon icon-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
