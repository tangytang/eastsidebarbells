import BlogList from "@/components/blogs/BlogList";
import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog List || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Breadcumb
        imgSrc="/images/page-title/page-title-1.jpg"
        pageName="Blogs"
        pageTitle="Blogs"
        parentPage=""
      />
      <BlogList />
    </>
  );
}
