"use client";

import Link from "next/link";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CurrencySelect from "../common/CurrencySelect";
import axios from "axios";

export default function Footer1() {
  const [success, setSuccess] = useState<boolean>(true);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const headingRefs = useRef<HTMLHeadingElement[]>([]);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        { email }
      );

      if ([200, 201].includes(response.status)) {
        form.reset();
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      console.error(
        "Error:",
        axios.isAxiosError(error) ? error.response?.data : "An error occurred"
      );
      setSuccess(false);
      handleShowMessage();
      form.reset();
    }
  };

  useEffect(() => {
    const headings = headingRefs.current;

    const toggleOpen = (event: Event) => {
      if (window.innerWidth < 992) {
        const target = event.target as HTMLElement;
        const parent = target.closest<HTMLElement>(".footer-col-block");
        if (!parent) return;

        const content = parent.querySelector<HTMLElement>(
          ".tf-collapse-content"
        );
        if (!content) return;

        if (parent.classList.contains("open")) {
          parent.classList.remove("open");
          content.style.height = "0px";
        } else {
          parent.classList.add("open");
          content.style.height = content.scrollHeight + 10 + "px";
        }
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []);

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-body">
              <div className="footer-left">
                <div className="footer-infor flex-grow-1 mb-5">
                  <div id="contact-me" className="footer-phone-number">
                    <h4 className="text_white number">
                      <a
                        href="https://wa.me/6598182573?text=Hi%2C%20I%27m%20interested%20in%20your%20products"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text_white"
                      >
                        +65 9818 2573
                      </a>
                    </h4>
                    <h4 className="text_white mail">
                      <a
                        href="mailto:strong@eastsidebarbells.com?subject=Product%20Inquiry&body=Hi%2C%20I%27m%20interested%20in%20your%20products"
                        className="text_white"
                      >
                        strong@eastsidebarbells.com
                      </a>
                    </h4>
                  </div>
                </div>

                {/* <div className="tf-collapse-content">
                  <ul className="tf-social-icon type-2">
                    {["facebook", "x", "instagram", "telegram"].map(
                      (platform, index) => (
                        <li key={index}>
                          <a href="#" className={`social-${platform}`}>
                            <i className={`icon icon-${platform}`} />
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div> */}
              </div>

              <div className="footer-col-block footer-newsletter">
                <div className="footer-menu">
                  {["Infomation", "Customer Services"].map((heading, i) => (
                    <div className="footer-col-block" key={i}>
                      <h5
                        ref={(el) => {
                          if (el) headingRefs.current[i] = el;
                        }}
                        className="footer-heading text_white footer-heading-mobile"
                      >
                        {heading}
                      </h5>
                      <div className="tf-collapse-content">
                        <ul className="footer-menu-list">
                          {(i === 0
                            ? [
                                ["Weightlifting Plates", "/shop"],
                                ["Crossfit Bumper Plates", "/shop"],
                                ["Barbells", "/shop"],
                                ["About Us", "/about"],
                                ["Personal Training", "/blog"],
                                ["Blog", "/blog"],
                              ]
                            : [
                                ["FAQ", "/faqs"],
                                ["Shipping", "/product-detail/1"],
                                ["Return & Refund", "/product-detail/1"],
                                ["Privacy Policy", "/term-of-use"],
                                ["Terms & Conditions", "/term-of-use"],
                              ]
                          ).map(([label, href], j) => (
                            <li className="text-body-default" key={j}>
                              <Link
                                href={href}
                                className="link footer-menu_item"
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-wrap">
                <div className="left">
                  <p className="text-body-default text_white">
                    © 2023 Eastside Barbells. All Rights Reserved.
                  </p>
                </div>
                <div className="center">
                  <div className="tf-currencies">
                    <CurrencySelect boxStyle light />
                  </div>
                </div>
                {/* <div className="tf-payment">
                  <ul>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <li key={i}>
                        <Image
                          alt={`Payment ${i}`}
                          src={`/images/payment/payment-${i}.png`}
                          width={76}
                          height={48}
                        />
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
