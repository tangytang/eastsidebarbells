"use client";
export default function ReviewForm() {
  return (
    <form
      className="form-write-review write-review-wrap"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="heading">
        <h4>Write a review:</h4>
        <div className="list-rating-check">
          <input type="radio" id="star5" name="rate" defaultValue={5} />
          <label htmlFor="star5" title="text" />
          <input type="radio" id="star4" name="rate" defaultValue={4} />
          <label htmlFor="star4" title="text" />
          <input type="radio" id="star3" name="rate" defaultValue={3} />
          <label htmlFor="star3" title="text" />
          <input type="radio" id="star2" name="rate" defaultValue={2} />
          <label htmlFor="star2" title="text" />
          <input type="radio" id="star1" name="rate" defaultValue={1} />
          <label htmlFor="star1" title="text" />
        </div>
      </div>
      <div className="mb_32">
        <div className="mb_8">Review Title</div>
        <fieldset className="mb_20">
          <input
            className=""
            type="text"
            placeholder="Give your review a title"
            name="text"
            tabIndex={2}
            defaultValue=""
            aria-required="true"
            required
          />
        </fieldset>
        <div className="mb_8">Review</div>
        <fieldset className="d-flex mb_20">
          <textarea
            className=""
            rows={4}
            placeholder="Write your comment here"
            tabIndex={2}
            aria-required="true"
            required
            defaultValue={""}
          />
        </fieldset>
        <div className="cols mb_20">
          <fieldset className="">
            <input
              className=""
              type="text"
              placeholder="You Name (Public)"
              name="text"
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
              placeholder="Your email (private)"
              name="email"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required
            />
          </fieldset>
        </div>
        <div className="d-flex align-items-center check-save gap-12">
          <input
            type="checkbox"
            name="availability"
            className="tf-check"
            id="check1"
          />
          <label className="text-secondary text-caption-1" htmlFor="check1">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div className="button-submit">
        <button className="tf-btn btn-onsurface radius-4" type="submit">
          Submit Reviews
        </button>
      </div>
    </form>
  );
}
