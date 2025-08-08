"use client";
import { products4 } from "@/data/products";
import React, { useState } from "react";
import Image from "next/image";
import LookbookCard2 from "@/components/productCards/LookbookCard2";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
interface ProductType {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  pinClass?: string;
}
export default function Lookbook() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  const [selected, setSelected] = useState<ProductType[]>([]);

  const handleSelect = (product: ProductType) => {
    if (selected.some((item) => item.id === product.id)) {
      setSelected((prev) => prev.filter((el) => el.id !== product.id));
    } else {
      setSelected((prev) => [...prev, product]);
    }
  };

  const totalPrice = selected.reduce((sum, product) => sum + product.price, 0);

  return (
    <section className="flat-spacing-2 pt-0">
      <div className="container">
        <div className="row flat-with-text-lookbook wrap-lookbook-hover align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="banner-img">
              <Image
                className="lazyload"
                data-src="/images/section/section-discover-1.jpg"
                alt="banner"
                src="/images/section/section-discover-1.jpg"
                width={945}
                height={1140}
              />
              {[0, 1, 2].map((index) => (
                <div
                  key={products4[index].id}
                  className={`tf-pin-btn pin-${
                    index + 1
                  } bundle-pin-item swiper-button ${
                    selected.some((item) => item.id === products4[index].id)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSelect(products4[index])}
                >
                  <span>{index + 1}</span>
                  <div className="loobook-product-wrap">
                    <LookbookCard2 product={products4[index]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="lookbook-content">
              <div className="box-title">
                <h3 className="title wow fadeInUp">
                  Unlock Amazing Savings With Our Combo Deals
                </h3>
                <p
                  className="sub-desc text-secondary wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Enjoy special savings by bundling your favorite office
                  essentials in one convenient purchase.
                </p>
              </div>
              <div className="wrap-cart-item bundle-hover-wrap mb_40">
                {products4.map((item, i) => (
                  <div
                    key={item.id}
                    className={`cart-item bundle-hover-item ${
                      selected.some((s) => s.id === item.id) ? "active" : ""
                    } ${item.pinClass}`}
                    onClick={() => handleSelect(item)}
                  >
                    <h6 className="number">{i + 1}</h6>
                    <div className="image-cart">
                      <Image
                        alt=""
                        src={item.imgSrc}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className="info">
                      <h6 className="name">
                        <Link
                          href={`/product-detail/${item.id}`}
                          className="link"
                        >
                          {item.title}
                        </Link>
                      </h6>
                      <h6 className="price">${item.price.toFixed(2)}</h6>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-lb">
                <a
                  href="#shoppingCart"
                  data-bs-toggle="modal"
                  className="tf-btn btn-onsurface"
                  onClick={() => {
                    selected.forEach((el) => addProductToCart(el.id));
                  }}
                >
                  <span>
                    {selected.length &&
                    selected.every((el) => isAddedToCartProducts(el.id))
                      ? "Selecteds Are Already in Cart"
                      : "Add Set To Cart"}
                  </span>
                  <div className="discount">
                    <span className="text-button-small">$99.00</span>
                    <span className="text-body-default">
                      {totalPrice.toFixed(2)}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
