import React from "react";
import Image from "next/image";
export default function Benefit() {
  return (
    <section className="flat-spacing-2 about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-style">
              <Image
                className="lazyload"
                alt="img_box-about"
                width={630}
                height={720}
                src="/images/section/box-about.jpg"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-about">
              <div className="heading-section spacing-3">
                <h3 className="wow fadeInUp">Danish Design DNA</h3>
                <p
                  className="text-body-1 text_secondary wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  GearO products reflect the values of craftsmanship,
                  simplicity, functionality and quality materials that define
                  our Danish design roots.
                </p>
              </div>
              <div className="benefit">
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icon">
                    <i className="icon-frame-3" />
                  </div>
                  <div className="content">
                    <h4 className="title">Form</h4>
                    <p className="text-body-default text_secondary">
                      We carefully consider each detail, giving our designs a
                      feeling of pure precision and purposeful craft.
                    </p>
                  </div>
                </div>
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="icon-frame-2" />
                  </div>
                  <div className="content">
                    <h4 className="title">Feel</h4>
                    <p className="text-body-default text_secondary">
                      Irresistibly crafted. Our products are intuitively
                      inviting and welcoming, appealing to the senses.
                    </p>
                  </div>
                </div>
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="icon-frame-1" />
                  </div>
                  <div className="content">
                    <h4 className="title">Functionality</h4>
                    <p className="text-body-default text_secondary">
                      Our designs are purposeful, carrying on the Danish
                      tradition of design that values functionality and form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
