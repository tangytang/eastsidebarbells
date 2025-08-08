"use client";
import Link from "next/link";

import { blogArticles } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Blog } from "@/types/blog";

export default function RelatedBlogs() {
  return (
    <section className="flat-spacing-8">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Related Articles</h3>
              <p className="text-body-1 wow fadeInUp" data-wow-delay="0.1s">
                Discover the Hottest Fashion News and Trends Straight from the
                Runway
              </p>
            </div>
            <Swiper
              className="swiper tf-sw-recent"
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd1",
              }}
            >
              {blogArticles.map((post: Blog, i: number) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div
                    className="blog-article-item wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <div className="article-thumb">
                      <Link href={`/blog-details/${post.id}`}>
                        <Image
                          className="lazyload"
                          alt="img-blog"
                          src={post.image}
                          width={615}
                          height={461}
                        />
                      </Link>
                      <div className="article-label">
                        <a href="#" className="text-button-small">
                          {post.label}
                        </a>
                      </div>
                    </div>
                    <div className="article-content">
                      <ul className="meta">
                        <li className="text-button-small">
                          <a href="#" className="link">
                            {post.date}
                          </a>
                        </li>
                        <li className="text-button-small">
                          by
                          <a href="#" className="link">
                            {post.author}
                          </a>
                        </li>
                      </ul>
                      <h5 className="article-title">
                        <Link
                          href={`/blog-details/${post.id}`}
                          className="line-clamp-2 link"
                        >
                          {post.title}{" "}
                        </Link>
                      </h5>
                      <p className="article-description text_secondary text-body-default">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination-recent sw-dots type-circle d-flex justify-content-center spd1" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
