import { storeLocations } from "@/data/storeLocations";
import React from "react";
import Image from "next/image";
export default function StoreLocation() {
  return (
    <section className="flat-spacing pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="swiper tf-sw-tablet"
              data-preview={1}
              data-space={15}
              data-screen={768}
            >
              <div className="swiper-wrapper tf-grid-layout-md wrap-box-location md-col-3">
                {storeLocations.map((store, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="location-item hover-img">
                      <a href="#" className="img-style">
                        <Image
                          className="lazyload"
                          data-src={store.imgSrc}
                          alt="home-1"
                          src={store.imgSrc}
                          width={390}
                          height={520}
                        />
                      </a>
                      <div className="content">
                        <h5>{store.name}</h5>
                        <div className="info">
                          <div className="text-body-default">
                            {store.address}
                          </div>
                          <div className="text-body-default">
                            Phone: {store.phone}
                          </div>
                          <div className="text-body-default">
                            Email:{" "}
                            <a href="#" className="link">
                              {store.email}
                            </a>
                          </div>
                        </div>
                        <a href="#" className="btn-line mx-auto">
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sw-pagination-tb sw-dots d-block d-md-none type-circle d-flex justify-content-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
