"use client";

import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  [key: string]: any; // Optional: allows extra props like description, variants, etc.
};

interface LookBookCardProps {
  product: Product;
}

export default function LookBookCard({ product }: LookBookCardProps) {
  const { setQuickViewItem } = useContextElement();

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
          href="#quickView"
          data-bs-toggle="modal"
          onClick={() => setQuickViewItem(product)}
          className="btn-lookbook btn-line"
        >
          Quick View
        </a>
      </div>
    </div>
  );
}
