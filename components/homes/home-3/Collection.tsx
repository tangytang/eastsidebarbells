import React from "react";
import Image from "next/image";
export default function Collection() {
  return (
    <section>
      <div className="container-2">
        <div className="row">
          <div className="col-12">
            <div className="collection-position style-full style-6">
              <div className="img-style">
                <Image
                  className="lazyload effect-paralax"
                  data-src="/images/banner/banner-9.jpg"
                  alt="banner-cls"
                  src="/images/banner/banner-9.jpg"
                  width={2208}
                  height={864}
                />
              </div>
              <div className="content cls-content">
                <div className="cls-heading">
                  <h3 className="wow fadeInUp">
                    <a href={`#`} className="link text_white">
                      Eastside Resale Program
                    </a>
                  </h3>
                  <p
                    className="text_white text-body-default wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Buy and sell quality second-hand strength equipment such as:
                    barbells, weight plates, dumbbells, benches, and more.
                  </p>
                </div>
                <a
                  href={`#`}
                  className="tf-btn btn-white mx-auto wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Explore Collection <i className="icon-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
