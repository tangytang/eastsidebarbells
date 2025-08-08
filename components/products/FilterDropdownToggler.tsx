"use client";
import { useEffect } from "react";

export default function FilterDropdownToggler() {
  useEffect(() => {
    const wrapperFilterDropdown = document.querySelector(
      ".wrapper-filter-dropdown"
    );
    if (!wrapperFilterDropdown) return;

    const handleFilterDropdownClick = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      mouseEvent.stopPropagation();
      document.querySelector(".dropdown-filter")?.classList.toggle("show");
      const filterDropdown = event.currentTarget as HTMLElement;
      filterDropdown.classList.toggle("active");

      const icon = filterDropdown.querySelector(".icon");
      if (icon) {
        if (filterDropdown.classList.contains("active")) {
          icon.classList.remove("icon-filter");
          icon.classList.add("icon-close");
        } else {
          icon.classList.remove("icon-close");
          icon.classList.add("icon-filter");
        }
      }

      if (window.innerWidth <= 1200) {
        document.querySelector(".overlay-filter")?.classList.add("show");
      }
    };

    const handleDocumentClick = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      const target = mouseEvent.target as HTMLElement;
      if (!target.closest(".wrapper-filter-dropdown")) {
        document.querySelector(".dropdown-filter")?.classList.remove("show");
        document.querySelector(".filterDropdown")?.classList.remove("active");
        const icons = document.querySelectorAll(".filterDropdown .icon");
        icons.forEach((icon) => {
          icon.classList.remove("icon-close");
          icon.classList.add("icon-filter");
        });
      }
    };

    const handleCloseFilterClick = (event: Event) => {
      event.preventDefault();
      document.querySelector(".dropdown-filter")?.classList.remove("show");
      document.querySelector(".filterDropdown")?.classList.remove("active");
      const icons = document.querySelectorAll(".filterDropdown .icon");
      icons.forEach((icon) => {
        icon.classList.remove("icon-close");
        icon.classList.add("icon-filter");
      });
      document.querySelector(".overlay-filter")?.classList.remove("show");
    };

    // Add event listeners
    const filterDropdowns = document.querySelectorAll(".filterDropdown");
    filterDropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", handleFilterDropdownClick);
    });

    document.addEventListener("click", handleDocumentClick);

    const closeFilters = document.querySelectorAll(
      ".close-filter, .overlay-filter"
    );
    closeFilters.forEach((element) => {
      element.addEventListener("click", handleCloseFilterClick);
    });

    // Cleanup function
    return () => {
      filterDropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleFilterDropdownClick);
      });
      document.removeEventListener("click", handleDocumentClick);
      closeFilters.forEach((element) => {
        element.removeEventListener("click", handleCloseFilterClick);
      });
    };
  }, []);

  return (
    <button id="filterDropdown" className="filterDropdown tf-btn-filter">
      <span className="icon icon-filter" />
      <span className="text">Filters</span>
    </button>
  );
}
