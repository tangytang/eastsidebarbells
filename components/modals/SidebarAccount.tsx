import React from "react";
import SidebarNav from "../dashboard/SidebarNav";

export default function SidebarAccount() {
  return (
    <div
      className="offcanvas offcanvas-start canvas-sidebar"
      id="mbAccount"
      aria-modal="true"
      role="dialog"
    >
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <span className="text-btn-uppercase">SIDEBAR ACCOUNT</span>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </header>

        <SidebarNav parentClass="canvas-body sidebar-mobile-append" />
      </div>
    </div>
  );
}
