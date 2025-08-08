import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="flat-spacing-2 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="flat-img-with-text-5 style-2">
              <div className="collection-position hover-img style-6">
                <div className="img-style">
                  <Image
                    className="lazyload effect-paralax"
                    data-src="/images/banner/banner-home5-1.jpg"
                    alt="banner-cls"
                    src="/images/banner/banner-home5-1.jpg"
                    width={630}
                    height={440}
                  />
                </div>
                <div className="content cls-content w-full">
                  <div className="cls-heading mb_21">
                    <h3 className="">
                      <a href="#" className="link text_white">
                        Ergonomic Chair Sale
                      </a>
                    </h3>
                    <p className="text_white text-body-default">
                      Reserved for long work hours.
                    </p>
                  </div>
                  <a href="#" className="tf-btn btn-white mx-auto">
                    Explore Collection <i className="icon-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div className="collection-position hover-img">
                <div className="img-style">
                  <Image
                    className="lazyload effect-paralax"
                    data-src="/images/banner/banner-home5-2.jpg"
                    alt="banner-cls"
                    src="/images/banner/banner-home5-2.jpg"
                    width={630}
                    height={440}
                  />
                </div>
                <div className="content cls-content w-full">
                  <div className="cls-heading mb_21">
                    <h3 className="">
                      <a href="#" className="link text_white">
                        Storage Cabinet Deals
                      </a>
                    </h3>
                    <p className="text_white text-body-default">
                      Reserved for organized workspaces.
                    </p>
                  </div>
                  <a href="#" className="tf-btn btn-white mx-auto">
                    View All Products
                    <i className="icon-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
