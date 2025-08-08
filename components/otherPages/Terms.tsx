"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#terms", text: "1. Terms", active: true },
  { href: "#limitations", text: "2. Limitations" },
  { href: "#revisions-and-errata", text: "3. Revisions and errata" },
  { href: "#site-terms", text: "4. Site terms of use modifications" },
  { href: "#risks", text: "5. Risks" },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState(
    items[0].href.replace("#", "")
  );

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    setTimeout(() => {
      items.forEach((elm) => {
        const element = document.querySelector(elm.href);
        if (element) {
          observer.observe(element);
        }
      });
    });
    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [items]);

  const handleClick = (id: string) => {
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="main-content">
      {/* Terms of use */}
      <section className="flat-spacing">
        <div className="container">
          <div className="terms-of-use-wrap">
            <div className="left sticky-top">
              {items.map((item, i) => (
                <h6
                  key={i}
                  onClick={() => handleClick(item.href)}
                  className={`btn-scroll-target ${
                    activeSection == item.href.replace("#", "") ? "active" : ""
                  }`}
                >
                  {item.text}
                </h6>
              ))}
            </div>
            <div className="right">
              <h4 className="heading">Terms of use</h4>
              <div className="terms-of-use-item item-scroll-target" id="terms">
                <h5 className="terms-of-use-title">1. Terms</h5>
                <div className="terms-of-use-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer sed euismod justo, sit amet efficitur dui. Aliquam
                    sodales vestibulum velit, eget sollicitudin quam. Donec non
                    aliquam eros. Etiam sit amet lectus vel justo dignissim
                    condimentum.
                  </p>
                  <p>
                    In malesuada neque quis libero laoreet posuere. In consequat
                    vitae ligula quis rutrum. Morbi dolor orci, maximus a
                    pulvinar sed, bibendum ac lacus. Suspendisse in consectetur
                    lorem. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Aliquam
                    elementum, est sed interdum cursus, felis ex pharetra nisi,
                    ut elementum tortor urna eu nulla. Donec rhoncus in purus
                    quis blandit.
                  </p>
                  <p>
                    Etiam eleifend metus at nunc ultricies facilisis. Morbi
                    finibus tristique interdum. Nullam vel eleifend est, eu
                    posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                    molestie
                  </p>
                </div>
              </div>
              <div
                className="terms-of-use-item item-scroll-target"
                id="limitations"
              >
                <h5 className="terms-of-use-title">2. Limitations</h5>
                <div className="terms-of-use-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer sed euismod justo, sit amet efficitur dui. Aliquam
                    sodales vestibulum velit, eget sollicitudin quam. Donec non
                    aliquam eros. Etiam sit amet lectus vel justo dignissim
                    condimentum.
                  </p>
                  <p>
                    In malesuada neque quis libero laoreet posuere. In consequat
                    vitae ligula quis rutrum. Morbi dolor orci, maximus a
                    pulvinar sed, bibendum ac lacus. Suspendisse in consectetur
                    lorem. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Aliquam
                    elementum, est sed interdum cursus, felis ex pharetra nisi,
                    ut elementum tortor urna eu nulla. Donec rhoncus in purus
                    quis blandit.
                  </p>
                  <p>
                    Etiam eleifend metus at nunc ultricies facilisis. Morbi
                    finibus tristique interdum. Nullam vel eleifend est, eu
                    posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                    molestie
                  </p>
                </div>
              </div>
              <div
                className="terms-of-use-item item-scroll-target"
                id="revisions-and-errata"
              >
                <h5 className="terms-of-use-title">3. Revisions and errata</h5>
                <div className="terms-of-use-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer sed euismod justo, sit amet efficitur dui. Aliquam
                    sodales vestibulum velit, eget sollicitudin quam. Donec non
                    aliquam eros. Etiam sit amet lectus vel justo dignissim
                    condimentum.
                  </p>
                  <p>
                    In malesuada neque quis libero laoreet posuere. In consequat
                    vitae ligula quis rutrum. Morbi dolor orci, maximus a
                    pulvinar sed, bibendum ac lacus. Suspendisse in consectetur
                    lorem. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Aliquam
                    elementum, est sed interdum cursus, felis ex pharetra nisi,
                    ut elementum tortor urna eu nulla. Donec rhoncus in purus
                    quis blandit.
                  </p>
                  <p>
                    Etiam eleifend metus at nunc ultricies facilisis. Morbi
                    finibus tristique interdum. Nullam vel eleifend est, eu
                    posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                    molestie
                  </p>
                </div>
              </div>
              <div
                className="terms-of-use-item item-scroll-target"
                id="site-terms"
              >
                <h5 className="terms-of-use-title">
                  4. Site terms of use modifications
                </h5>
                <div className="terms-of-use-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer sed euismod justo, sit amet efficitur dui. Aliquam
                    sodales vestibulum velit, eget sollicitudin quam. Donec non
                    aliquam eros. Etiam sit amet lectus vel justo dignissim
                    condimentum.
                  </p>
                  <p>
                    In malesuada neque quis libero laoreet posuere. In consequat
                    vitae ligula quis rutrum. Morbi dolor orci, maximus a
                    pulvinar sed, bibendum ac lacus. Suspendisse in consectetur
                    lorem. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Aliquam
                    elementum, est sed interdum cursus, felis ex pharetra nisi,
                    ut elementum tortor urna eu nulla. Donec rhoncus in purus
                    quis blandit.
                  </p>
                  <p>
                    Etiam eleifend metus at nunc ultricies facilisis. Morbi
                    finibus tristique interdum. Nullam vel eleifend est, eu
                    posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                    molestie
                  </p>
                </div>
              </div>
              <div className="terms-of-use-item item-scroll-target" id="risks">
                <h5 className="terms-of-use-title">5. Risks</h5>
                <div className="terms-of-use-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer sed euismod justo, sit amet efficitur dui. Aliquam
                    sodales vestibulum velit, eget sollicitudin quam. Donec non
                    aliquam eros. Etiam sit amet lectus vel justo dignissim
                    condimentum.
                  </p>
                  <p>
                    In malesuada neque quis libero laoreet posuere. In consequat
                    vitae ligula quis rutrum. Morbi dolor orci, maximus a
                    pulvinar sed, bibendum ac lacus. Suspendisse in consectetur
                    lorem. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Aliquam
                    elementum, est sed interdum cursus, felis ex pharetra nisi,
                    ut elementum tortor urna eu nulla. Donec rhoncus in purus
                    quis blandit.
                  </p>
                  <p>
                    Etiam eleifend metus at nunc ultricies facilisis. Morbi
                    finibus tristique interdum. Nullam vel eleifend est, eu
                    posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                    molestie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Terms of use */}
    </div>
  );
}
