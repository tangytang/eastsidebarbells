import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Categories() {
  return (
    <section className="flat-spacing-2">
      <div className="container-full">
        <div className="row">
          <div className="col-12">
            <div className="text-center flat-spacing pt-0 line-bottom-container">
              <div className="wrap-cls-img">
                <div className="cls-img-item hover-img">
                  <Link href={`/shop`} className="image img-style">
                    <Image
                      data-src="/images/section/collections-banner.jpg"
                      alt="Cls Image"
                      src="/images/section/collections-banner.jpg"
                      width={441}
                      height={242}
                    />
                  </Link>
                  <h3>
                    <Link className="link" href={`/shop`}>
                      Storage Solutions
                    </Link>
                  </h3>
                </div>
                <div className="cls-img-item hover-img">
                  <Link href={`/shop`} className="image img-style">
                    <Image
                      data-src="/images/section/collections-banner-1.jpg"
                      alt="Cls Image"
                      src="/images/section/collections-banner-1.jpg"
                      width={441}
                      height={242}
                    />
                  </Link>
                  <h3>
                    <Link className="link" href={`/shop`}>
                      Lighting
                    </Link>
                  </h3>
                </div>
                <div className="cls-img-item hover-img">
                  <Link href={`/shop`} className="image img-style">
                    <Image
                      data-src="/images/section/collections-banner-2.jpg"
                      alt="Cls Image"
                      src="/images/section/collections-banner-2.jpg"
                      width={441}
                      height={242}
                    />
                  </Link>
                  <h3>
                    <Link className="link" href={`/shop`}>
                      Office Chairs
                    </Link>
                  </h3>
                </div>
                <div className="cls-img-item hover-img">
                  <Link href={`/shop`} className="image img-style">
                    <Image
                      data-src="/images/section/collections-banner-3.jpg"
                      alt="Cls Image"
                      src="/images/section/collections-banner-3.jpg"
                      width={441}
                      height={242}
                    />
                  </Link>
                  <h3>
                    <Link className="link" href={`/shop`}>
                      Accessories
                    </Link>
                  </h3>
                </div>
                <div className="cls-img-item hover-img">
                  <Link href={`/shop`} className="image img-style">
                    <Image
                      data-src="/images/section/collections-banner-4.jpg"
                      alt="Cls Image"
                      src="/images/section/collections-banner-4.jpg"
                      width={441}
                      height={242}
                    />
                  </Link>
                  <h3>
                    <Link className="link" href={`/shop`}>
                      Decor Office
                    </Link>
                  </h3>
                </div>
              </div>
              <Link href={`/shop`} className="btn-line">
                <span>View All Categiories</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
