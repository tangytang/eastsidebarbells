import BlogDetails from "@/components/blogs/BlogDetails";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";
import type { Metadata } from "next";
import Breadcumb from "@/components/blogs/Breadcumb";
import { allBlogs } from "@/data/blogs";

export const metadata: Metadata = {
  title:
    "Blog Details || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = allBlogs.find((p) => p.id === Number(id));

  return (
    <>
      <Topbar1 />
      <Header1 />
      <div className="main-content">
        {blog ? (
          <>
            <Breadcumb />
            <BlogDetails blog={blog} />
            <RelatedBlogs />
          </>
        ) : (
          <div
            className="text-center py-5 my-5"
            style={{ minHeight: "calc(100vh - 650px)" }}
          >
            <h2 className="text-2xl font-semibold text-red-500">
              Blog Not Found
            </h2>
            <p className="mt-2 text-gray-600">
              The blog you're looking for doesn't exist.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
