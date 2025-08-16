"use client";
import Link from "next/link";

import React from "react";
import CurrencySelect from "../common/CurrencySelect";
import {
  blogLinks,
  demoPages,
  otherPages,
  shopDetailPages,
  shopPages,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import LanguageSelect from "../common/LanguageSelect";

type NavProps = {
  textColor?: string;
};

type MenuLink = {
  href: string;
  label?: string;
  src?: string;
  alt?: string;
  name?: string;
};

type MenuGroup = {
  title: string;
  links: MenuLink[];
};

type DemoPage = {
  href: string;
  src: string;
  alt: string;
  name: string;
};
export default function MobileMenu() {
  const pathname = usePathname();
  const isMenuActive = (link: MenuLink): boolean => {
    return link.href?.split("/")[1] === pathname.split("/")[1];
  };

  const isMenuParentActive = (menu: MenuLink[]): boolean => {
    return menu.some((elm) => isMenuActive(elm));
  };

  const isMenuParentActive2 = (menu: MenuGroup[]): boolean => {
    return menu.some((elm) => isMenuParentActive(elm.links));
  };
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li
              className={`nav-mb-item ${
                isMenuParentActive(demoPages) ? "active" : ""
              } `}
            >
              <a
                href="#dropdown-menu-one"
                className="collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-one"
              >
                <span>Home</span>
                <span className="btn-open-sub" />
              </a>
              <div id="dropdown-menu-one" className="collapse">
                <ul className="sub-nav-menu">
                  {demoPages.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className={`sub-nav-link ${
                          isMenuActive(link) ? "active" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`nav-mb-item ${
                isMenuParentActive(demoPages) ? "active" : ""
              } `}
            >
              <a
                href="#dropdown-menu-one"
                className="collapsed mb-menu-link"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-one"
              >
                <span>Products</span>
                <span className="btn-open-sub" />
              </a>
              <div id="dropdown-menu-one" className="collapse">
                <ul className="sub-nav-menu">
                  {shopDetailPages.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className={`sub-nav-link ${
                          isMenuActive(link) ? "active" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          <div className="mb-other-content">
            <div className="group-icon">
              <Link href={`/wish-list`} className="site-nav-icon">
                <svg
                  className="icon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Wishlist
              </Link>
              <Link href={`/search-result`} className="site-nav-icon">
                <svg
                  className="icon"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.35 21.0004L17 16.6504"
                    stroke="#181818"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Search
              </Link>
            </div>
            <div className="mb-notice">
              <Link href={`/contact`} className="text-need">
                Need help ?
              </Link>
            </div>
            <ul className="mb-info">
              <li>
                Email: <b>strong@eastsidebarbells.com</b>
              </li>
              <li>
                Phone: <b>(65) 98182573</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <div className="bottom-bar-language">
            <div className="tf-currencies">
              <CurrencySelect />
            </div>
            <div className="tf-languages">
              <LanguageSelect parentClassName="image-select center style-default type-languages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
