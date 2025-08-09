"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#terms", text: "1. Terms", active: true },
  { href: "#limitations", text: "2. Limitations" },
  { href: "#revisions-and-errata", text: "3. Revisions and Errata" },
  { href: "#site-terms", text: "4. Site Terms of Use Modifications" },
  { href: "#risks", text: "5. Risks" },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState(
    items[0].href.replace("#", "")
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px" }
    );

    setTimeout(() => {
      items.forEach((elm) => {
        const element = document.querySelector(elm.href);
        if (element) observer.observe(element);
      });
    });

    return () => observer.disconnect();
  }, []);

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
              <h4 className="heading">Terms of Use</h4>

              <div className="terms-of-use-item item-scroll-target" id="terms">
                <h5 className="terms-of-use-title">1. Terms</h5>
                <div className="terms-of-use-content">
                  <p>
                    Welcome to our website. These Terms of Use (“Terms”) govern
                    your access to and use of our site, products, and services,
                    including the purchase of branded weightlifting equipment
                    and accessories (collectively, the “Services”). By accessing
                    or using the Services, you agree to be bound by these Terms
                    and our Privacy Policy. If you do not agree, do not use the
                    Services.
                  </p>
                  <p>
                    You represent that you are at least the age of majority in
                    your jurisdiction and have the legal capacity to enter into
                    these Terms. If you are using the Services on behalf of a
                    company or organization, you represent that you have
                    authority to bind that entity, and “you” refers to that
                    entity.
                  </p>
                  <p>
                    <strong>Account & Security.</strong> You may need an account
                    to purchase or access certain features. You are responsible
                    for maintaining the confidentiality of your credentials and
                    for all activities under your account. Notify us immediately
                    of any unauthorized use.
                  </p>
                  <p>
                    <strong>Ordering & Payment.</strong> All orders are offers
                    to purchase subject to acceptance by us. We may reject or
                    cancel orders at our discretion (e.g., suspected fraud,
                    pricing/stock errors). Prices are listed in the currency
                    shown at checkout and exclude/include applicable taxes
                    (including VAT/GST) and shipping as indicated. You authorize
                    us to charge your selected payment method for the total
                    amount shown at checkout.
                  </p>
                  <p>
                    <strong>Shipping & Delivery.</strong> Delivery estimates are
                    not guarantees and may vary due to carrier delays, customs,
                    or events beyond our control. Title and risk of loss pass to
                    you upon our delivery to the carrier.
                  </p>
                  <p>
                    <strong>Returns & Exchanges.</strong> If offered, returns
                    are accepted only in accordance with our Returns Policy
                    posted on the site. Items must be unused, in original
                    packaging, and include proof of purchase. Certain items
                    (e.g. used bars/plates, clearance, custom-branded, or
                    hygiene items like lifting straps with skin contact) may be
                    non-returnable.
                  </p>
                  <p>
                    <strong>Product Information.</strong> We aim to display
                    accurate product descriptions, specifications, load ratings,
                    and imagery. Minor variations in color/finish may occur due
                    to manufacturing changes or display settings. Load ratings
                    are based on controlled testing; actual performance depends
                    on proper installation and use.
                  </p>
                  <p>
                    <strong>Intellectual Property.</strong> All content on the
                    site—including text, images, logos, product names, and
                    designs—is owned by us or our licensors and protected by
                    applicable IP laws. You may not copy, distribute, modify, or
                    create derivative works without prior written consent. Our
                    trademarks and trade dress may not be used without
                    authorization. Third-party marks referenced remain the
                    property of their respective owners.
                  </p>
                  <p>
                    <strong>User Content.</strong> If you submit reviews,
                    photos, or other materials, you grant us a worldwide,
                    royalty-free, perpetual license to use, reproduce, modify,
                    and display such content in connection with the Services,
                    subject to our Privacy Policy. You confirm you own or have
                    the necessary rights to the content you submit.
                  </p>
                  <p>
                    <strong>Prohibited Uses.</strong> You agree not to misuse
                    the Services, including by (i) violating laws, (ii)
                    infringing IP, (iii) attempting to gain unauthorized access,
                    (iv) interfering with site operation, (v) using bots or
                    scraping except as allowed by robots.txt, or (vi) reselling
                    products in violation of our distribution policies.
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
                    <strong>No Medical Advice.</strong> Content provided on the
                    site is for general information only and is not medical,
                    health, or training advice. Consult a qualified professional
                    before beginning any fitness program or using strength
                    equipment.
                  </p>
                  <p>
                    <strong>Use at Your Own Risk.</strong> Weight training and
                    fitness activities involve inherent risks, including serious
                    injury or death. You are solely responsible for assessing
                    your physical condition and ensuring proper setup,
                    technique, and supervision.
                  </p>
                  <p>
                    <strong>Installation & Maintenance.</strong> Some products
                    require professional installation (e.g., wall/rig mounts).
                    You are responsible for correct assembly, torqueing,
                    anchoring to appropriate substrates, routine inspection, and
                    maintenance (e.g., tightening hardware, checking collars,
                    lubricating sleeves, replacing worn parts). Misuse,
                    alteration, or failure to maintain voids any warranty and
                    increases risk of injury.
                  </p>
                  <p>
                    <strong>Limited Warranty.</strong> To the maximum extent
                    permitted by law, products are provided with the limited
                    warranty stated on the product page or warranty card, if
                    any. We disclaim all other warranties, express or implied,
                    including merchantability, fitness for a particular purpose,
                    and non-infringement.
                  </p>
                  <p>
                    <strong>Limitation of Liability.</strong> To the fullest
                    extent permitted by law, in no event shall we be liable for
                    any indirect, incidental, special, consequential, exemplary,
                    or punitive damages, or for lost profits or data, arising
                    out of or relating to the Services or products, even if we
                    have been advised of the possibility of such damages. Our
                    total aggregate liability for any claim shall not exceed the
                    amount you paid for the product(s) giving rise to the claim.
                  </p>
                  <p>
                    <strong>Indemnity.</strong> You agree to indemnify and hold
                    us harmless from any claims, damages, liabilities, costs,
                    and expenses (including reasonable attorneys’ fees) arising
                    out of your breach of these Terms, misuse of the Services,
                    or violation of law or third-party rights.
                  </p>
                </div>
              </div>

              <div
                className="terms-of-use-item item-scroll-target"
                id="revisions-and-errata"
              >
                <h5 className="terms-of-use-title">3. Revisions and Errata</h5>
                <div className="terms-of-use-content">
                  <p>
                    The materials appearing on our site could include technical,
                    typographical, or photographic errors. Specifications,
                    pricing, availability, and shipping information may change
                    without notice. We do not warrant that any of the materials
                    are accurate, complete, or current, and we may update or
                    correct them at any time.
                  </p>
                  <p>
                    <strong>Pricing/Stock Errors.</strong> If a product is
                    listed at an incorrect price or with incorrect information,
                    we reserve the right to refuse or cancel orders placed for
                    that product, whether or not the order has been confirmed or
                    your payment method charged. If your payment has already
                    been processed, we will issue a refund.
                  </p>
                </div>
              </div>

              <div
                className="terms-of-use-item item-scroll-target"
                id="site-terms"
              >
                <h5 className="terms-of-use-title">
                  4. Site Terms of Use Modifications
                </h5>
                <div className="terms-of-use-content">
                  <p>
                    We may revise these Terms at any time by posting an updated
                    version on the site with a new “Last Updated” date. Changes
                    are effective upon posting unless otherwise stated. Your
                    continued use of the Services after changes become effective
                    constitutes acceptance of the revised Terms.
                  </p>
                  <p>
                    If you do not agree to the updated Terms, you must stop
                    using the Services and, if applicable, contact us regarding
                    account closure and any outstanding orders.
                  </p>
                </div>
              </div>

              <div className="terms-of-use-item item-scroll-target" id="risks">
                <h5 className="terms-of-use-title">5. Risks</h5>
                <div className="terms-of-use-content">
                  <p>
                    <strong>Fitness Risks.</strong> Weightlifting, powerlifting,
                    and related activities carry risks of acute and chronic
                    injury. Always warm up, use spotters and proper safety
                    devices (e.g., collars, safety pins/straps), and train
                    within your abilities. Discontinue use and seek medical
                    attention if you experience pain, dizziness, or shortness of
                    breath.
                  </p>
                  <p>
                    <strong>Environmental & Surface Risks.</strong> Ensure
                    floors and platforms are suitable for loads and impacts.
                    Using plates/bars on unsuitable surfaces can cause damage to
                    equipment, floors, or structures and may void warranty.
                  </p>
                  <p>
                    <strong>Third-Party Components.</strong> Combining our
                    products with third-party parts or accessories may affect
                    safety and performance. Use only compatible components and
                    follow all instructions.
                  </p>
                  <p>
                    <strong>Governing Law; Disputes.</strong> These Terms and
                    any disputes arising out of or relating to the Services or
                    products shall be governed by the laws of the jurisdiction
                    indicated on our invoice/checkout page, without regard to
                    conflict-of-laws rules. Exclusive venue shall be the courts
                    located in that jurisdiction. Where required by law, you and
                    we will first attempt to resolve disputes informally and, if
                    applicable, through mandatory mediation/arbitration before
                    litigation.
                  </p>
                  <p>
                    <strong>Contact.</strong> Questions about these Terms,
                    warranty claims, or returns can be directed to the contact
                    details published on our site’s “Contact” page.
                  </p>
                  <p className="mt-3 text-muted">
                    <em>Last Updated: {new Date().toLocaleDateString()}</em>
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
