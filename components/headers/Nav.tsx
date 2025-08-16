"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavProps = {
  textColor?: string;
};

type MenuLink = {
  href: string;
  label: string;
  src?: string;
  alt?: string;
  name?: string;
};

type MenuGroup = {
  title?: string;
  links: MenuLink[];
};

type MenuJSON = {
  otherPages: MenuLink[]; // ABOUT dropdown
  shopDetailPages: MenuGroup[]; // PRODUCTS mega menu
  /** Accepts either strings or objects; we'll normalize below */
  productCategories?: Array<string | MenuLink>;
};

// 1) JSON INPUT — now with category links
const MENU_JSON_STRING = `
{
  "otherPages": [
    { "href": "/about", "label": "About Us" },
    { "href": "/blog", "label": "Blog" },
    { "href": "/faqs", "label": "FAQ" }
  ],
  "shopDetailPages": [
    {
      "links": [
        { "href": "/shop-crossfit", "label": "Crossfit" },
        { "href": "/shop-weightlifting", "label": "Olympic Weightlifting" },
        { "href": "/shop-powerlifting", "label": "Powerlifting" }
      ]
    }
  ],
  "productCategories": [
    { "href": "/shop", "label": "Weights & Bumpers (12)" },
    { "href": "/shop-bars", "label": "Barbells (3)" },
    { "href": "/shop-bars", "label": "Accessories (3)" }
  ]
}
` as const;

// 2) Fallbacks + loaders
const DEFAULT_MENU: MenuJSON = {
  otherPages: [],
  shopDetailPages: [],
  productCategories: [
    // strings still supported; will normalize to {href,label}
    "Lighting Solutions(9)",
    "Cleaning Supplies(15)",
    "Printing & Paper(2)",
    "Top 100 Offers(100)",
    "New Arrivals(30)",
    "Value of the Day(31)",
  ],
};

function loadMenu(json: string): MenuJSON {
  try {
    const parsed = JSON.parse(json) as Partial<MenuJSON>;
    return {
      otherPages: parsed.otherPages ?? DEFAULT_MENU.otherPages,
      shopDetailPages: parsed.shopDetailPages ?? DEFAULT_MENU.shopDetailPages,
      productCategories:
        parsed.productCategories ?? DEFAULT_MENU.productCategories,
    };
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Nav] Failed to parse MENU_JSON_STRING:", e);
    }
    return DEFAULT_MENU;
  }
}

// Normalize categories: support either "Label" or {href,label}
function normalizeCategories(
  items: Array<string | MenuLink> | undefined
): MenuLink[] {
  if (!items) return [];
  return items.map((it) =>
    typeof it === "string"
      ? { href: "/shop", label: it } // default link for legacy strings
      : { href: it.href, label: it.label }
  );
}

export default function Nav({ textColor = "" }: NavProps) {
  const pathname = usePathname();
  const raw = React.useMemo(() => loadMenu(MENU_JSON_STRING), []);
  const otherPages = raw.otherPages;
  const shopDetailPages = raw.shopDetailPages;
  const productCategories = normalizeCategories(raw.productCategories);

  const isMenuActive = (link: MenuLink): boolean => {
    return (link.href ?? "").split("/")[1] === pathname.split("/")[1];
  };

  const isMenuParentActive = (menu: MenuLink[]): boolean => {
    return menu?.some((elm) => isMenuActive(elm)) ?? false;
  };

  const isMenuParentActive2 = (menu: MenuGroup[]): boolean => {
    return menu?.some((elm) => isMenuParentActive(elm.links)) ?? false;
  };

  return (
    <>
      {/* HOME */}
      <li className="menu-item">
        <Link
          href="/"
          className={`item-link ${
            isMenuActive({ href: "/", label: "Home" }) ? "active" : ""
          } ${textColor}`}
        >
          HOME
        </Link>
      </li>

      {/* ABOUT (PAGES MENU) */}
      <li className="menu-item position-relative">
        <a
          href="#"
          className={`item-link ${
            isMenuParentActive(otherPages) ? "active" : ""
          } ${textColor}`}
        >
          ABOUT
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {otherPages.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`menu-link-text ${
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

      {/* PRODUCTS MENU */}
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${
            isMenuParentActive2(shopDetailPages) ? "active" : ""
          } ${textColor}`}
        >
          PRODUCTS
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu mega-menu mega-menu-1">
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                {/* Categories block */}
                <div className="mega-menu-item">
                  <div className="list-categories-inner">
                    <div className="menu-heading text-title">
                      Browse Categories
                    </div>
                    <ul>
                      {productCategories.map((cat, index) => (
                        <li key={index}>
                          <Link
                            href={cat.href}
                            className="categories-item text_secondary"
                          >
                            <span className="inner-left">{cat.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="box-cate-bottom">
                      <Link href="/shop" className="btn-line">
                        <span>View All Products </span>
                        <i className="icon-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Link columns from JSON */}
                {shopDetailPages.map((group, index) => (
                  <div className="mega-menu-item" key={index}>
                    {group.title ? (
                      <div className="menu-heading text-title">
                        {group.title}
                      </div>
                    ) : null}
                    <ul className="menu-list">
                      {group.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={link.href}
                            className={`menu-link-text text_secondary link ${
                              isMenuActive(link) ? "active" : ""
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Static promo tile (optional to JSON-ify later) */}
                <div className="mega-menu-item">
                  <div className="collection-position hover-img style-4">
                    <Link href="/product-detail/1" className="img-style w-100">
                      <Image
                        className="lazyload"
                        data-src="/images/banner/leadman-weight-collection.webp"
                        alt="banner-cls"
                        src="/images/banner/leadman-weight-collection.webp"
                        width={877}
                        height={877}
                      />
                    </Link>
                    <div className="content cls-content">
                      <h6>
                        <Link href="/product-detail/1" className="link">
                          Weightlifting Plates
                        </Link>
                      </h6>
                      <h6>25 products</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* CONTACT */}
      <li className="menu-item">
        <Link
          href="/#contact-me"
          className={`item-link ${
            isMenuActive({ href: "/", label: "Home" }) ? "active" : ""
          } ${textColor}`}
        >
          CONTACT
        </Link>
      </li>
    </>
  );
}
