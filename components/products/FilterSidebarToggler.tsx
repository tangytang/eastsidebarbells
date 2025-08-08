"use client";
import { useEffect } from "react";

export default function FilterSidebarToggler() {
  useEffect(() => {
    const handleFilterShopClick = () => {
      if (window.innerWidth <= 1200) {
        document
          .querySelectorAll(".sidebar-filter, .overlay-filter")
          .forEach((el) => {
            el.classList.add("show");
          });
      }
    };

    const handleCloseFilterClick = () => {
      document
        .querySelectorAll(".sidebar-filter, .overlay-filter")
        .forEach((el) => {
          el.classList.remove("show");
        });
    };

    // Get elements
    const filterShopElements = document.querySelectorAll(".filterShop");
    const closeFilterElements = document.querySelectorAll(
      ".close-filter, .overlay-filter"
    );

    // Add event listeners
    filterShopElements.forEach((el) => {
      el.addEventListener("click", handleFilterShopClick);
    });

    closeFilterElements.forEach((el) => {
      el.addEventListener("click", handleCloseFilterClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      filterShopElements.forEach((el) => {
        el.removeEventListener("click", handleFilterShopClick);
      });

      closeFilterElements.forEach((el) => {
        el.removeEventListener("click", handleCloseFilterClick);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <button id="filterShop" className="filterShop tf-btn-filter">
      <span className="icon icon-filter" />
      <span className="text">Filters</span>
    </button>
  );
}
