"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Option {
  value: string;
  thumbnail: string;
  text: string;
  selected?: boolean;
}

const optionsData: Option[] = [
  {
    value: "us",
    thumbnail: "/images/country/us.svg",
    text: "USD",
    selected: true,
  },
  {
    value: "vn",
    thumbnail: "/images/country/vn.svg",
    text: "VND",
  },
];

interface CurrencySelectProps {
  topStart?: boolean;
  light?: boolean;
  boxStyle?: boolean;
}

export default function CurrencySelect({
  topStart = false,
  light = false,
  boxStyle = false,
}: CurrencySelectProps) {
  const [selected, setSelected] = useState<Option>(optionsData[0]);
  const [isDDOpen, setIsDDOpen] = useState<boolean>(false);
  const languageSelect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageSelect.current &&
        !languageSelect.current.contains(event.target as Node)
      ) {
        setIsDDOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={languageSelect}
      onClick={() => setIsDDOpen((pre) => !pre)}
      className={`dropdown bootstrap-select image-select center style-default ${
        boxStyle ? "style-box" : ""
      } type-currencies ${light ? "color-white" : ""} dropup`}
    >
      <button
        type="button"
        tabIndex={-1}
        className={`btn dropdown-toggle btn-light ${isDDOpen ? "show" : ""}`}
        title="USD $ | United States"
      >
        <div className="filter-option">
          <div className="filter-option-inner">
            <div className="filter-option-inner-inner">
              <Image
                src={selected.thumbnail}
                width={20}
                height={15}
                alt="Currency"
              />
              {selected.text}
            </div>
          </div>
        </div>
      </button>
      <div
        className={`dropdown-menu ${isDDOpen ? "show" : ""}`}
        style={{
          maxHeight: "899.688px",
          overflow: "hidden",
          minHeight: 0,
          position: "absolute",
          inset: topStart ? "" : "auto auto 0px 0px",
          margin: 0,
          transform: `translate(0px, ${topStart ? 22 : -20}px)`,
        }}
        data-popper-placement={`${!topStart ? "top" : "bottom"}-start`}
      >
        <div
          className="inner show"
          style={{ maxHeight: "869.688px", overflowY: "auto", minHeight: 0 }}
        >
          <ul
            className="dropdown-menu inner show"
            role="presentation"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            {optionsData.map((elm, i) => (
              <li onClick={() => setSelected(elm)} key={i}>
                <a
                  className={`dropdown-item ${
                    selected.value === elm.value ? "active selected" : ""
                  }`}
                >
                  <span className="text">
                    <Image
                      src={elm.thumbnail}
                      width={20}
                      height={15}
                      alt={elm.text}
                    />
                    {elm.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
