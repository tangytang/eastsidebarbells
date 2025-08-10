import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import About from "@/components/otherPages/About";
import Benefit from "@/components/otherPages/Benefit";
import Team from "@/components/otherPages/Team";
import Testimonials from "@/components/otherPages/Testimonials";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us || Buy Barbells & Weights in Singapore",
  description:
    "Buy Barbells & Weights in Singapore for Weightlifting, Crossfit, Powerlifting,Hyrox, and more.",
};

export default function page() {
  return (
    <>
      <Topbar2 />
      <Header1 />
      <Breadcumb />
      <About />
      <Benefit />
      {/* <Testimonials />
      <Team /> */}
    </>
  );
}
