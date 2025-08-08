"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import CartLength from "../common/CartLength";
export default function Header2() {
  const headerRef = useRef<HTMLElement>(null);

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollTop = 0;
    const delta = 5;
    let navbarHeight = 0;
    let didScroll = false;

    const handleScroll = () => {
      didScroll = true;
    };

    const checkScroll = () => {
      if (didScroll && headerRef.current) {
        const st = window.scrollY || document.documentElement.scrollTop;
        navbarHeight = headerRef.current.offsetHeight;

        if (st > navbarHeight) {
          if (st > lastScrollTop + delta) {
            // Scroll down
            headerRef.current.style.top = `-${navbarHeight}px`;
          } else if (st < lastScrollTop - delta) {
            // Scroll up
            headerRef.current.style.top = "0";
            headerRef.current.classList.add("header-bg");
          }
        } else {
          // At top of page
          headerRef.current.style.top = "";
          headerRef.current.classList.remove("header-bg");
        }

        lastScrollTop = st;
        didScroll = false;
      }
    };

    // Initial measurement
    if (headerRef.current) {
      navbarHeight = headerRef.current.offsetHeight;
    }

    // Set up event listeners
    window.addEventListener("scroll", handleScroll);
    const scrollInterval = setInterval(checkScroll, 250);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(scrollInterval);
    };
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    setScrollDirection("down");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (headerRef.current) {
      if (scrollDirection == "up") {
        headerRef.current.style.top = "0px";
        headerRef.current.classList.add("header-sticky");
      } else {
        headerRef.current.style.top = "-185px";
        headerRef.current.classList.remove("header-sticky");
      }
    }
  }, [scrollDirection]);

  return (
    <header
      ref={headerRef}
      className={`header-default header-absolute header-style-2 header-fixed `}
      id="header"
    >
      <div className="main-header has-border-y">
        <div className="container-full">
          <div className="row wrapper-header align-items-center">
            <div className="col-xl-3 col-2 d-xl-none">
              <a
                href="#mobileMenu"
                className="mobile-menu"
                data-bs-toggle="offcanvas"
                aria-controls="mobileMenu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                </svg>
              </a>
            </div>
            <div className="col-xl-5 d-none d-xl-block">
              <nav className="box-navigation text-center">
                <ul className="box-nav-ul justify-content-start">
                  <Nav textColor="text_white" />
                </ul>
              </nav>
            </div>
            <div className="col-xl-2 col-8 d-flex justify-content-center">
              <Link href={`/`} className="logo-header d-flex">
                <Image
                  alt="logo"
                  className="logo"
                  src="/images/logo/logo-white.svg"
                  width={154}
                  height={38}
                />
                <Image
                  alt="logo"
                  className="logo-black"
                  src="/images/logo/logo.svg"
                  width={154}
                  height={38}
                />
              </Link>
            </div>
            <div className="col-xl-5 col-2">
              <ul className="nav-icon">
                <li className="nav-search">
                  <a
                    href="#search"
                    data-bs-toggle="modal"
                    className="nav-icon-item text_white"
                  >
                    <span className="icon icon-search" />
                  </a>
                </li>
                <li className="nav-account">
                  <Link href={`/login`} className="nav-icon-item text_white">
                    <span className="icon icon-user" />
                  </Link>
                </li>
                <li className="nav-wishlist">
                  <Link
                    href={`/wish-list`}
                    className="nav-icon-item text_white"
                  >
                    <span className="icon icon-heart" />
                  </Link>
                </li>
                <li className="nav-cart">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="modal"
                    className="nav-icon-item text_white"
                  >
                    <span className="icon icon-cart" />
                    <span className="count-box text-button-small">
                      <CartLength />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
