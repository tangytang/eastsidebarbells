"use client";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
}

interface LookbookCard2Props {
  product: ProductType;
}

export default function LookbookCard2({ product }: LookbookCard2Props) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  return (
    <div className="loobook-product">
      <div className="img-style">
        <Image alt="img" src={product.imgSrc} width={200} height={200} />
      </div>
      <div className="content">
        <div className="info">
          <Link
            href={`/product-detail/${product.id}`}
            className="text-title text-line-clamp-1 link"
          >
            {product.title}
          </Link>
          <div className="price text-button">${product.price.toFixed(2)}</div>
        </div>
        <a
          href="#shoppingCart"
          data-bs-toggle="modal"
          className="btn-lookbook btn-line"
          onClick={() => {
            if (product.id) {
              addProductToCart(product.id);
            }
          }}
        >
          {isAddedToCartProducts(product.id) ? "Already Added" : "Add to Cart"}
        </a>
      </div>
    </div>
  );
}
