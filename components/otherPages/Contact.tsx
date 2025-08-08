"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="main-content">
      {/* map */}
      <div className="wrap-map">
        <div id="map-contact" className="map-contact h590">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.148272329334!2d151.20657421407668!3d-33.858885268389294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae682c546039%3A0x16da940d587922a1!2sCircular%20Quay!5e0!3m2!1sen!2s!4v1745205798630!5m2!1sen!2s"
            width="100%"
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* /map */}
      <section className="flat-spacing">
        <div className="container">
          <div className="contact-us-content">
            <div className="row">
              <div className="col-lg-4 mb-lg-30">
                <h4 className="mb_30 wow fadeInUp">New York</h4>
                <div className="mb_28">
                  <h6 className="mb_8">Phone:</h6>
                  <p className="text-body-default">+1 666 234 8888</p>
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Email:</h6>
                  <p className="text-body-default">example@example.com</p>
                </div>
                <div className="mb_28">
                  <h6 className="mb_8">Address:</h6>
                  <p className="text-body-default">
                    2163 Phillips Gap Rd, West Jefferson, North Carolina, United
                    States
                  </p>
                </div>
                <div>
                  <h6 className="mb_8">Open Time:</h6>
                  <p className="text-body-default mb_4 open-time">
                    <span>Mon - Sat:</span>
                    7:30am - 8:00pm PST
                  </p>
                  <p className="text-body-default open-time">
                    <span>Sunday:</span>
                    9:00am - 5:00pm PST
                  </p>
                </div>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <h4 className="mb_7 wow fadeInUp">Get In Touch</h4>
                <p
                  className="text_secondary mb_24 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Use the form below to get in touch with the sales team
                </p>
                <form
                  id="contactform"
                  onSubmit={(e) => e.preventDefault()}
                  className="form-leave-comment"
                >
                  <div className="wrap">
                    <div className="cols">
                      <fieldset className="">
                        <input
                          className=""
                          type="text"
                          placeholder="Your Name*"
                          name="name"
                          id="name"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <fieldset className="">
                        <input
                          className=""
                          type="email"
                          placeholder="Your Email*"
                          name="email"
                          id="email"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="cols">
                      <fieldset className="">
                        <input
                          className=""
                          type="number"
                          placeholder="Phone*"
                          name="phone"
                          id="phone"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <fieldset className="">
                        <input
                          className=""
                          type="number"
                          placeholder="Order Numbers*"
                          name="order-numbers"
                          id="order-numbers"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                    </div>
                    <fieldset className="">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Your Message*"
                        tabIndex={2}
                        aria-required="true"
                        required
                        defaultValue={""}
                      />
                    </fieldset>
                  </div>
                  <div className="button-submit send-wrap">
                    <button className="tf-btn btn-onsurface" type="submit">
                      Send Message <i className="icon-arrow-up-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
