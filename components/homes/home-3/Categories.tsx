import Link from "next/link";
import { categoryData } from "@/data/collections";
import React from "react";
import Image from "next/image";
export default function Categories() {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="col-12">
          <div className="heading-section style-2">
            <div className="left">
              <h3 className="wow fadeInUp">Shop By Categories</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Fresh styles just in! Elevate your look.
              </p>
            </div>
            <div className="right wow fadeInUp">
              <Link href={`/shop`} className="btn-line">
                <span>View All Products </span>
                <i className="icon-arrow-up-right" />
              </Link>
            </div>
          </div>
          <div className="wrap-categories overflow-x-auto style-2">
            {categoryData.map((category, index) => (
              <div
                className="categories-item hover-img style-2 wow fadeInUp"
                data-wow-delay={category.delay}
                key={index}
              >
                <div className="img-style">
                  <Link href={category.href}>
                    <Image
                      alt=""
                      src={category.imgSrc}
                      width={380}
                      height={380}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href={category.href} className="link">
                      {category.title}
                    </Link>
                  </h5>
                  <p className="text-body-default text_secondary">
                    {category.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
