import Breadcumb from "@/components/common/Breadcumb";

import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar1 />
      <Header1 parentClass="header-default border-bot" />
      <Breadcumb
        imgSrc="/images/page-title/page-title-9.jpg"
        pageName="Shop"
        pageTitle="Shop"
        parentPage=""
      />
      {children}
    </>
  );
}
