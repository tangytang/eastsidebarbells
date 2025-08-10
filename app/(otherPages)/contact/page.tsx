import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Contact from "@/components/otherPages/Contact";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Contact />
    </>
  );
}
