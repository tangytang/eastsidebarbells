import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";

import React, { useEffect, useState } from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar2 />
      <Header1 parentClass="header-default border-bot" />
      {children}
    </>
  );
}
