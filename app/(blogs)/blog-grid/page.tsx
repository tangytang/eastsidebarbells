import BlogGrid from "@/components/blogs/BlogGrid";
import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog Grid || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-1.jpg"
        pageName="Blogs"
        pageTitle="Blogs"
        parentPage=""
      />
      <BlogGrid />
    </>
  );
}
