import Link from "next/link";
import React from "react";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Blog } from "@/types/blog";

interface BlogsProps {
  parentClass?: string;
}

export default function Blogs({
  parentClass = "flat-spacing-2 pt-0 section-news-insight",
}: BlogsProps) {
  const featuredBlog = blogs.find((blog) => blog.featured) as Blog;
  const regularBlogs = blogs.filter((blog) => !blog.featured) as Blog[];

  return (
    <section className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <h3 className="wow fadeInUp">News Insight</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Browse our Top Trending: the hottest picks loved by all.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-7">
            <div className="collection-position style-2 spacing-2 has-over">
              <Link
                href={`/blog-details/${featuredBlog.id}`}
                className="img-style no-opacity w-100"
              >
                <Image
                  className="lazyload"
                  data-src={featuredBlog.image}
                  alt="banner-cls"
                  src={featuredBlog.image}
                  width={featuredBlog.width}
                  height={featuredBlog.height}
                />
              </Link>
              <div className="content cls-content">
                <div className="cls-heading">
                  <ul className="meta mb-0">
                    <li className="text-button-small">
                      <a href="#" className="link text-white">
                        {featuredBlog.date}
                      </a>
                    </li>
                    <li className="text-button-small text-white">
                      by
                      <a href="#" className="link text-white">
                        {featuredBlog.author}
                      </a>
                    </li>
                  </ul>
                  <div>
                    <h4 className="mb_8">
                      <Link
                        href={`/blog-details/${featuredBlog.id}`}
                        className="link text_white"
                      >
                        {featuredBlog.title}
                      </Link>
                    </h4>
                    <p className="text_white">{featuredBlog.description}</p>
                  </div>
                </div>
                <Link
                  href={`/blog-details/${featuredBlog.id}`}
                  className="link text-white text-button"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="relatest-post">
              {regularBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="relatest-post-item style-2 style-row hover-image"
                >
                  <div className="image">
                    <Link href={`/blog-details/${blog.id}`}>
                      <Image
                        className="lazyload"
                        data-src={blog.image}
                        alt=""
                        src={blog.image}
                        width={blog.width}
                        height={blog.height}
                      />
                    </Link>
                    {blog.category && (
                      <div className="article-label">
                        <a href="#" className="text-button-small">
                          {blog.category}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="content">
                    <ul className="meta">
                      <li className="text-button-small">
                        <a href="#" className="link">
                          {blog.date}
                        </a>
                      </li>
                      <li className="text-button-small">
                        by
                        <a href="#" className="link">
                          {" "}
                          {blog.author}
                        </a>
                      </li>
                    </ul>
                    <h5 className="title mb-0">
                      <Link className="link" href={`/blog-details/${blog.id}`}>
                        {blog.title}
                      </Link>
                    </h5>
                    <p>{blog.description}</p>
                    <Link
                      href={`/blog-details/${blog.id}`}
                      className="text-button link text-decoration"
                    >
                      Read More
                    </Link>
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
