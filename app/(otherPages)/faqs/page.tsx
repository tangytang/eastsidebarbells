import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Faqs from "@/components/otherPages/Faqs";
import React from "react";

import { SEO } from "@/components/common/Seo";

export const metadata = SEO;

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Breadcumb pageName="Faqs" pageTitle="Faqs" />
      <Faqs />
    </>
  );
}
