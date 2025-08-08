"use client";

import { socialIcons, teamMembers } from "@/data/teamMembers";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Team() {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section gap-8 text-center">
              <h4 className="wow fadeInUp">Meet Our Teams</h4>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Discover exceptional experiences through testimonials from our
                satisfied customers.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper tf-sw-team"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd27",
              }}
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="team-item hover-img wow fadeInUp"
                    data-wow-delay={member.delay}
                  >
                    <div className="img-style">
                      <a href="#">
                        <Image
                          className="lazyload"
                          data-src={member.image}
                          alt="image-team"
                          src={member.image}
                          width={615}
                          height={461}
                        />
                      </a>
                      <ul className="tf-social-icon style-2">
                        {socialIcons.map((icon, idx) => (
                          <li key={idx}>
                            <a href={icon.href} className={icon.className}>
                              <i className={`icon ${icon.icon}`} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="content">
                      <div>
                        <h5 className="name">
                          <a className="link text-line-clamp-1" href="#">
                            {member.name}
                          </a>
                        </h5>
                        <div className="infor text-caption-1 text-secondary-2">
                          {member.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-team sw-dots type-circle justify-content-center spd27" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
