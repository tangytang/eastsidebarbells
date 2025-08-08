import React from "react";

export default function Pagination() {
  return (
    <ul className="wg-pagination justify-content-center">
      <li>
        <a href="#" className="pagination-item text-button">
          1
        </a>
      </li>
      <li className="active">
        <div className="pagination-item text-button">2</div>
      </li>
      <li>
        <a href="#" className="pagination-item text-button">
          3
        </a>
      </li>
      <li>
        <a href="#" className="pagination-item text-button">
          <i className="icon-right" />
        </a>
      </li>
    </ul>
  );
}
