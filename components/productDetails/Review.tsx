import React from "react";

export default function Review({ headingStyle2 = false }) {
  return (
    <>
      <div className="tab-reviews-heading">
        <div className="top">
          <div className="text-center">
            <div className="number text-display">4.9</div>
            <div className="list-star">
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
              <i className="icon icon-star" />
            </div>
            <p>(168 Ratings)</p>
          </div>
          <div className="rating-score">
            <div className="item">
              <div className="number-1 text-caption-1">5</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "94.67%" }} />
              </div>
              <div className="number-2 text-caption-1">59</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">4</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "60%" }} />
              </div>
              <div className="number-2 text-caption-1">46</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">3</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">2</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
            <div className="item">
              <div className="number-1 text-caption-1">1</div>
              <i className="icon icon-star" />
              <div className="line-bg">
                <div style={{ width: "0%" }} />
              </div>
              <div className="number-2 text-caption-1">0</div>
            </div>
          </div>
        </div>
        <div>
          <div className="tf-btn btn-white has-border radius-4 btn-comment-review btn-cancel-review">
            Cancel Review
          </div>
          <div className="tf-btn btn-white has-border radius-4 btn-comment-review btn-write-review">
            Write a review
          </div>
        </div>
      </div>
      <div className="reply-comment style-1 cancel-review-wrap">
        <div className="d-flex mb_24 gap-20 align-items-center justify-content-between flex-wrap">
          <h4 className="">03 Comments</h4>
          <div className="d-flex align-items-center gap-12">
            <div className="text-caption-1">Sort by:</div>
            <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
              <div className="btn-select">
                <span className="text-sort-value">Most Recent</span>
                <span className="icon icon-down" />
              </div>
              <div className="dropdown-menu">
                <div className="select-item active">
                  <span className="text-value-item">Most Recent</span>
                </div>
                <div className="select-item">
                  <span className="text-value-item">Oldest</span>
                </div>
                <div className="select-item">
                  <span className="text-value-item">Most Popular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reply-comment-wrap">
          <div className="reply-comment-item">
            <div className="user">
              <div className="image">
                <img
                  alt=""
                  src="/images/avatar/user-default.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                {headingStyle2 ? (
                  <div>
                    <a href="#" className="link">
                      Superb quality apparel that exceeds expectations
                    </a>
                  </div>
                ) : (
                  <h6>
                    <a href="#" className="link">
                      Superb quality apparel that exceeds expectations
                    </a>
                  </h6>
                )}

                <div className="day text-secondary-2 text-caption-1">
                  1 days ago &nbsp;&nbsp;&nbsp;-
                </div>
              </div>
            </div>
            <p className="text-secondary">
              Great theme - we were looking for a theme with lots of built in
              features and flexibility and this was perfect. We expected to need
              to employ a developer to add a few finishing touches. But we
              actually managed to do everything ourselves. We did have one small
              query and the support given was swift and helpful.
            </p>
          </div>
          <div className="reply-comment-item type-reply">
            <div className="user">
              <div className="image">
                <img
                  alt=""
                  src="/images/avatar/admin-default.jpg"
                  width={104}
                  height={104}
                />
              </div>
              <div>
                {headingStyle2 ? (
                  <div>
                    <a href="#" className="link">
                      Reply from GearO
                    </a>
                  </div>
                ) : (
                  <h6>
                    <a href="#" className="link">
                      Reply from GearO
                    </a>
                  </h6>
                )}

                <div className="day text-secondary-2 text-caption-1">
                  1 days ago &nbsp;&nbsp;&nbsp;-
                </div>
              </div>
            </div>
            <p className="text-secondary">
              We love to hear it! Part of what we love most about GearO is how
              much it empowers store owners like yourself to build a beautiful
              website without having to hire a developer :) Thank you for this
              fantastic review!
            </p>
          </div>
          <div className="reply-comment-item">
            <div className="user">
              <div className="image">
                <img
                  alt=""
                  src="/images/avatar/user-default.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                {headingStyle2 ? (
                  <div>
                    <a href="#" className="link">
                      Superb quality apparel that exceeds expectations
                    </a>
                  </div>
                ) : (
                  <h6>
                    <a href="#" className="link">
                      Superb quality apparel that exceeds expectations
                    </a>
                  </h6>
                )}

                <div className="day text-secondary-2 text-caption-1">
                  1 days ago &nbsp;&nbsp;&nbsp;-
                </div>
              </div>
            </div>
            <p className="text-secondary">
              Great theme - we were looking for a theme with lots of built in
              features and flexibility and this was perfect. We expected to need
              to employ a developer to add a few finishing touches. But we
              actually managed to do everything ourselves. We did have one small
              query and the support given was swift and helpful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
