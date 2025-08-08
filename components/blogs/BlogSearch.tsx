"use client";

export default function BlogSearch() {
  return (
    <form className="form-search" onSubmit={(e) => e.preventDefault()}>
      <fieldset className="text">
        <input
          type="email"
          placeholder="Your email address"
          className=""
          name="email"
          tabIndex={0}
          defaultValue=""
          aria-required="true"
          required
        />
      </fieldset>
      <button className="" type="submit">
        <svg
          className="icon"
          width={20}
          height={20}
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
      </button>
    </form>
  );
}
