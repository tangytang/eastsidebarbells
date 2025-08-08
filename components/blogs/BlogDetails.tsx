import Image from "next/image";
import React from "react";
import CommentForm from "./CommentForm";
import { Blog } from "@/types/blog";

interface BlogDetailsProps {
  blog: Blog;
}
export default function BlogDetails({ blog }: BlogDetailsProps) {
  return (
    <div className="blog-detail-wrap">
      <div className="inner">
        <div className="heading">
          <ul className="list-tags has-bg">
            <li>
              <a href="#" className="link">
                {blog.category ?? "Office"}
              </a>
            </li>
          </ul>
          <h3>{blog.title}</h3>
          <div className="wrap-meta">
            <ul className="meta">
              <li className="text-body-1">
                <i className="icon-calendar" />
                <a className="link" href="#">
                  {blog.date}
                </a>
              </li>
              <li className="text-body-1">
                <i className="icon-user" />
                <span>
                  by
                  <a href="#" className="link">
                    {blog.author ? blog.author : "Themesflat"}
                  </a>
                </span>
              </li>
            </ul>
            <ul className="meta info">
              <li className="text-body-1">
                <i className="icon-chat" />
                12
              </li>
              <li className="text-body-1">
                <i className="icon-eye" />
                260.2K
              </li>
              <li className="text-body-1">
                <i className="icon-clock" />5 Min Read
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <p className="text-secondary text-body-1 mb_12">
            Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus,
            ante vitae mattis gravida, purus sapien interdum magna, convallis
            volutpat est turpis pulvinar dui. Aenean eu turpis est. In hac
            habitasse platea dictumst.
          </p>
          <p className="text-secondary text-body-1">
            Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus,
            ante vitae matti gravida, purus sapien interdum magna, convallis
            volutpat est turpis pulvinar dui. Aenean eu turpis est. In hac
            habitasse platea dictumst. Integer at lobortis metus. Proin molestie
            eget massa vel gravida. Suspendisse nec ante vel augue consectetur
            mollis. Praesent interdu lacus ac est viverra hendrerit. Aenean eu
            turpis est.
          </p>
        </div>
        <div className="image-wrap">
          <Image
            className="lazyload"
            alt="img"
            src={blog.image ?? "/images/blog/blog-details.jpg"}
            width={1275}
            height={786}
          />
        </div>
        <div className="content">
          <h4 className="mb_16">Storage Solutions for an Organized Office</h4>
          <p className="text-secondary text-body-1 mb_24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            interdum sed mauris eu imperdiet. Donec congue orci nec mi luctus,
            ut faucibus mauris scelerisque. Donec orci lorem, volutpat a mauris
            nec, sodales imperdiet urna. Sed dictum enim libero. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Maecenas ligula
            libero, pharetra non dolor et, tempor bibendum magna. Mauris a
            efficitur nisi.
          </p>
          <div className="quote mb_24">
            <div className="wrap-content">
              <div className="icon">
                <i className="icon-quote" />
              </div>
              <div className="content">
                <h4 className="mb_20">
                  “If you set your goals ridiculously high and it's a failure,
                  you will fail above everyone else's success”
                </h4>
                <h6 className="author">Nelson Mandela</h6>
              </div>
            </div>
          </div>
          <p className="text-secondary text-body-1">
            Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus,
            ante vitae mattis gravida, purus sapien interdum magna, convallis
            volutpat est turpis pulvinar dui. Aenean eu turpis est. In hac
            habitasse platea dictumst. Integer at lobortis metus. Proin molestie
            eget massa vel gravida. Suspendisse nec ante vel augue consectetur
            mollis.
          </p>
        </div>
        <div className="bot d-flex justify-content-between gap-10 flex-wrap">
          <ul className="list-tags has-bg">
            <li className="text-body-default">Tag:</li>
            <li>
              <a href="#" className="link text-caption-2">
                Office
              </a>
            </li>
            <li>
              <a href="#" className="link text-caption-2">
                Furniture
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-between gap-16">
            <p className="text-body-default">Share this post:</p>
            <ul className="tf-social-icon style-1">
              <li>
                <a href="#" className="social-facebook">
                  <i className="icon icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-twiter">
                  <i className="icon icon-x" />
                </a>
              </li>
              <li>
                <a href="#" className="social-pinterest">
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-instagram">
                  <i className="icon icon-telegram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="related-post">
          <div className="pre w-50">
            <div className="text-btn-uppercase btn-direction">
              <a href="#">Previous</a>
            </div>
            <h6 className="fw-5">
              <a className="link line-clamp-2" href="#">
                Creating Collaborative Spaces with Flexible Office Furniture
              </a>
            </h6>
          </div>
          <div className="next w-50">
            <div className="text-btn-uppercase btn-direction text-end">
              <a href="#">Next</a>
            </div>
            <h6 className="fw-5 text-end">
              <a className="link line-clamp-2" href="#">
                Budget-Friendly Office Furniture Ideas for Startups
              </a>
            </h6>
          </div>
        </div>
        <div className="reply-comment">
          <h4 className="reply-comment-heading">03 Comments</h4>
          <div className="reply-comment-wrap">
            <div className="reply-comment-item">
              <div className="image">
                <Image
                  alt=""
                  src="/images/avatar/avatar-1.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div className="content">
                <div>
                  <h6>
                    <a href="#" className="link">
                      Guy Hawkins
                    </a>
                  </h6>
                  <div className="day text-caption-1">August 13, 2025</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra
                  arcu quam turpis risus amet turpis. Facilisis elementum
                  tincidunt pellentesque sed rutrum enim.
                </p>
                <div>
                  <a className="text-button link" href="#">
                    Reply
                  </a>
                </div>
              </div>
            </div>
            <div className="reply-comment-item type-reply">
              <div className="image">
                <Image
                  alt=""
                  src="/images/avatar/avatar-2.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div className="content">
                <div>
                  <div className="d-flex gap-12 align-items-center">
                    <h6>
                      <a href="#" className="link">
                        Eleanor Pena
                      </a>
                    </h6>
                    <div className="box-check">
                      <svg
                        width={10}
                        height={8}
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.39644 7.84288L0.146441 4.35628C-0.0488135 4.14681 -0.0488135 3.80718 0.146441 3.59769L0.853531 2.8391C1.04879 2.62961 1.36539 2.62961 1.56064 2.8391L3.75 5.18782L8.43936 0.157101C8.63461 -0.0523671 8.95121 -0.0523671 9.14647 0.157101L9.85356 0.915689C10.0488 1.12516 10.0488 1.46479 9.85356 1.67428L4.10355 7.8429C3.90828 8.05237 3.5917 8.05237 3.39644 7.84288Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="day text-caption-1">August 13, 2025</div>
                </div>
                <p>Great choice of Acronym AF1’s</p>
              </div>
            </div>
          </div>
        </div>
        <CommentForm />
        <ul className="tf-social-icon style-1">
          <li>
            <h6>Share:</h6>
          </li>
          <li>
            <a href="#" className="social-facebook">
              <i className="icon icon-facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="social-twiter">
              <i className="icon icon-x" />
            </a>
          </li>
          <li>
            <a href="#" className="social-pinterest">
              <i className="icon icon-instagram" />
            </a>
          </li>
          <li>
            <a href="#" className="social-instagram">
              <i className="icon icon-telegram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
