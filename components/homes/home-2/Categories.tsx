import Link from "next/link";
import Image from "next/image";
import { categories2 } from "@/data/collections";
import React from "react";

export default function Categories() {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Shop By Categories</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Fresh styles just in! Elevate your look.
              </p>
            </div>
            <div className="wrap-categories overflow-x-auto style-2 has-boxshadow">
              {categories2.map((category, index) => (
                <div
                  className="categories-item wow fadeInUp"
                  data-wow-delay={category.delay}
                  key={index}
                >
                  <div className="icon">
                    <i className={category.iconClass} />
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <Link href={`/shop-default`} className="link">
                        {category.title}
                      </Link>
                    </h5>
                    <p className="text-body-default text_secondary">
                      {category.itemCount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
