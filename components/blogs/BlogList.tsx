import Link from "next/link";
import { listBlogArticles, relatedPosts } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import BlogSearch from "./BlogSearch";
import { Blog } from "@/types/blog";
// Define blog post structure

export default function BlogList() {
  return (
    <div className="main-content">
      {/* .blog-list-main */}
      <div className="blog-list-main flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-lg-30">
              <div className="wrap-list mb_40">
                {listBlogArticles.map((article: Blog, index: number) => (
                  <div className="blog-article-item style-list" key={index}>
                    <div className="article-thumb">
                      <Link href={`/blog-details/${article.id}`}>
                        <Image
                          className="lazyload"
                          data-src={article.image}
                          src={article.image}
                          alt="img-blog"
                          width={615}
                          height={461}
                        />
                      </Link>
                      <div className="article-label">
                        <a href="#" className="text-button-small">
                          {article.label}
                        </a>
                      </div>
                    </div>
                    <div className="article-content">
                      <ul className="meta">
                        <li className="text-button-small">
                          <a href="#" className="link">
                            {article.date}
                          </a>
                        </li>
                        <li className="text-button-small">
                          by{" "}
                          <a href="#" className="link">
                            {article.author}
                          </a>
                        </li>
                      </ul>
                      <h5 className="article-title">
                        <Link
                          href={`/blog-details/${article.id}`}
                          className="line-clamp-2 link"
                        >
                          {article.title}
                        </Link>
                      </h5>
                      <p className="article-description text_secondary text-body-default">
                        {article.description}
                      </p>
                      <Link
                        href={`/blog-details/${article.id}`}
                        className="tf-btn-link"
                      >
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="wg-pagination">
                <li>
                  <a href="#" className="pagination-item text-button">
                    1
                  </a>
                </li>
                <li className="active">
                  <div className="pagination-item text-button">2</div>
                </li>
                <li>
                  <a href="#" className="pagination-item text-button">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="pagination-item text-button">
                    <i className="icon-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="sidebar maxw-360">
                <div className="sidebar-item sidebar-search">
                  <BlogSearch />
                </div>
                <div className="sidebar-item sidebar-relatest-post">
                  <h5 className="sidebar-heading">Relatest Post</h5>
                  <div>
                    {relatedPosts.map((post: Blog, index: number) =>
                      post.layout === "standard" ? (
                        <div
                          className="relatest-post-item blog-article-item"
                          key={index}
                        >
                          <div className="article-thumb">
                            <Link href={`/blog-details/${post.id}`}>
                              <Image
                                className="lazyload"
                                data-src={post.image}
                                src={post.image}
                                alt="img-blog"
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
                                by{" "}
                                <a href="#" className="link">
                                  {post.author}
                                </a>
                              </li>
                            </ul>
                            <h6 className="article-title">
                              <Link
                                href={`/blog-details/${post.id}`}
                                className="line-clamp-2 link"
                              >
                                {post.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="relatest-post-item style-row hover-image"
                          key={index}
                        >
                          <div className="image">
                            <Link href={`/blog-details/${post.id}`}>
                              <Image
                                className="lazyloaded"
                                data-src={post.image}
                                src={post.image}
                                alt=""
                                width={240}
                                height={181}
                              />
                            </Link>
                            <div className="article-label">
                              <a href="#" className="text-button-small">
                                {post.label}
                              </a>
                            </div>
                          </div>
                          <div className="content">
                            <div className="title text-title">
                              <Link
                                className="link"
                                href={`/blog-details/${post.id}`}
                              >
                                {post.title}
                              </Link>
                            </div>
                            <ul className="meta">
                              <li className="text-button-small">{post.date}</li>
                              <li className="text-button-small">
                                by{" "}
                                <a href="#" className="link">
                                  {post.author}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="sidebar-item sidebar-categories">
                  <h5 className="sidebar-heading">Categories</h5>
                  <ul>
                    <li>
                      <a className="text-body-default link" href="#">
                        Office Trending
                      </a>
                    </li>
                    <li>
                      <a className="text-body-default link" href="#">
                        Ergonomic Solutions
                      </a>
                    </li>
                    <li>
                      <a className="text-body-default link" href="#">
                        Workspace Organization
                      </a>
                    </li>
                    <li>
                      <a className="text-body-default link" href="#">
                        Productivity Tips
                      </a>
                    </li>
                    <li>
                      <a className="text-body-default link" href="#">
                        Buyer's Guides
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-item sidebar-tag">
                  <h5 className="sidebar-heading">Popular Tag</h5>
                  <ul className="list-tags">
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Ergonomic
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Desk Setup
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Office Furniture
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Workspace
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Office Decor
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Wireless Keyboards
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-caption-1 link">
                        Monitor Stands
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.blog-list-main */}
    </div>
  );
}
