import React from "react";
import Image from "next/image";

export default function Benefit() {
  return (
    <section className="flat-spacing-2 about-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6">
            <div className="img-style">
              <Image
                className="lazyload"
                alt="Home gym equipment Singapore"
                width={630}
                height={720}
                src="/images/section/home-gym-singapore.jpg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6">
            <div className="box-about">
              <div className="heading-section spacing-3">
                <h3 className="wow fadeInUp">
                  Proudly Singaporean Strength Gear
                </h3>
                <p
                  className="text-body-1 text_secondary wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  At Eastsidebarbells, we deliver high-performance strength
                  training equipment built for powerlifting, CrossFit, and
                  Olympic weightlifting. Every barbell, plate, and rack is
                  selected for its durability, functionality, and ability to
                  perform under heavy loads — perfect for both home gyms and
                  commercial facilities.
                </p>
              </div>

              <div className="benefit">
                {/* Quality */}
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icon">
                    <i className="icon-frame-3" />
                  </div>
                  <div className="content">
                    <h4 className="title">Quality</h4>
                    <p className="text-body-default text_secondary">
                      We use the best materials and construction methods to
                      ensure every lift feels solid and your gear lasts for
                      years of training — whether it’s a squat rack, barbell, or
                      bumper plate.
                    </p>
                  </div>
                </div>

                {/* Support */}
                <div
                  className="benefit-item wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <i className="icon-frame-2" />
                  </div>
                  <div className="content">
                    <h4 className="title">Support</h4>
                    <p className="text-body-default text_secondary">
                      We live and breathe strength sports. Our team provides
                      expert advice to help you choose the right equipment and
                      progress toward your lifting goals.
                    </p>
                  </div>
                </div>

                {/* Functionality */}
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
                      Every product we offer is tested for real-world training —
                      from deadlifts and cleans to snatches and squats —
                      ensuring it meets the needs of serious lifters without
                      unnecessary extras.
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
