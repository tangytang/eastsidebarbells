import React from "react";

export default function Share() {
  return (
    <div
      className="modal modalCentered fade tf-product-modal modal-part-content"
      id="share_social"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Share</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="overflow-y-auto">
            <ul className="tf-social-icon">
              <li>
                <a href="#" className="social-facebook">
                  <i className="icon icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-twiter">
                  <i className="icon icon-x" />
                </a>
              </li>
              <li>
                <a href="#" className="social-instagram">
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-amazon">
                  <i className="icon icon-telegram" />
                </a>
              </li>
            </ul>
            <form className="form-share" method="post" acceptCharset="utf-8">
              <fieldset>
                <input
                  type="text"
                  defaultValue="https://smartdesk-html.vercel.app/"
                  tabIndex={0}
                  aria-required="true"
                />
              </fieldset>
              <div className="button-submit">
                <button className="tf-btn radius-4 btn-onsurface" type="button">
                  Copy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
