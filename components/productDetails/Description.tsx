import React from "react";

export default function Description({ headingStyle2 = false }) {
  return (
    <>
      {" "}
      <div className="right">
        {headingStyle2 ? (
          <div className="mb_12">Product Features</div>
        ) : (
          <h6 className="mb_12">Product Features</h6>
        )}

        <p className="mb_8 text_secondary">
          Breathable suspension keeps you cool and comfortable.
        </p>
        <p className="mb_8 text_secondary">
          Three chair sizes mean the most comfort to the largest range of users.
        </p>
        <p className="text_secondary">
          Adjustable PostureFit SL pads provide lumbar support and stabilize the
          base of the spine.
        </p>
      </div>
      <div className="left">
        {headingStyle2 ? (
          <div className="mb_12">Dimensions and weights</div>
        ) : (
          <h6 className="mb_12">Dimensions and weights</h6>
        )}

        <ul className="">
          <li className="text-body-default mb_8">
            OVERALL:
            <span className="text_secondary">64.5" w x 38.5"d x 35" h</span>
          </li>
          <li className="text-body-default mb_8">
            INSIDESEATING:
            <span className="text_secondary">
              50.5"wx22" w x 22" d x 19.5" h
            </span>
          </li>
          <li className="text-body-default mb_8">
            ARM:
            <span className="text_secondary">7"wx38.5"dx22.5"h</span>
          </li>
          <li className="text-body-default">
            LEGS:
            <span className="text_secondary">5.5"wx2"dx2"h</span>
          </li>
        </ul>
      </div>
    </>
  );
}
