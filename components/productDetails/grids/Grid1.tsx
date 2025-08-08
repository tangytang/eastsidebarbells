"use client";

import { useEffect, useRef, useState } from "react";
import Drift from "drift-zoom";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Image from "next/image";

interface GalleryItem {
  href: string;
  scrollColor: string;
  imgSrc: string;
  width: number;
  height: number;
  alt?: string;
  src?: string;
}

interface Grid1Props {
  activeColor?: string;
  setActiveColor?: (color: string) => void;
  firstItem: string;
}

const galleryItems: GalleryItem[] = [
  {
    href: "/images/shop/product-1.jpg",
    scrollColor: "Beige",
    imgSrc: "/images/shop/product-1.jpg",
    width: 900,
    height: 900,
  },
  {
    href: "/images/shop/product-1.2.jpg",
    scrollColor: "Gray",
    imgSrc: "/images/shop/product-1.2.jpg",
    width: 600,
    height: 600,
  },
  {
    href: "/images/shop/product-1.3.jpg",
    scrollColor: "Grey",
    imgSrc: "/images/shop/product-1.3.jpg",
    width: 600,
    height: 600,
  },
  {
    href: "/images/shop/product-1.4.jpg",
    scrollColor: "Grey",
    imgSrc: "/images/shop/product-1.4.jpg",
    width: 1020,
    height: 1020,
  },
];

export default function Grid1({
  activeColor = "beige",
  setActiveColor = () => {},
  firstItem,
}: Grid1Props) {
  const [finalItem, setFinalItem] = useState<GalleryItem[]>([]);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const itemsFinal = [...galleryItems];
      itemsFinal[0].src = firstItem;
      setFinalItem(itemsFinal);
    });
  }, [firstItem]);

  useEffect(() => {
    const imageZoom = () => {
      const driftAll = document.querySelectorAll<HTMLElement>(".tf-image-zoom");
      const pane = document.querySelector<HTMLElement>(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane || undefined,
          inlinePane: 0,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };

    imageZoom();
    const zoomElements =
      document.querySelectorAll<HTMLElement>(".tf-image-zoom");

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const parent = target.closest<HTMLElement>(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const parent = target.closest<HTMLElement>(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
    };
  }, []);

  const scrollToTarget = () => {
    const heightScroll = window.scrollY;
    const targetElement = document.querySelector<HTMLElement>(
      `[data-scroll='${activeColor}']`
    );

    if (targetElement) {
      setTimeout(() => {
        if (window.scrollY === heightScroll) {
          targetElement?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 200);
    }
  };

  useEffect(() => {
    scrollToTarget();
  }, [activeColor]);

  useEffect(() => {
    setTimeout(() => {
      const options = {
        rootMargin: "-50% 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollValue = entry.target.getAttribute("data-scroll");
            if (scrollValue) {
              setActiveColor(scrollValue);
            }
          }
        });
      }, options);

      const elements = document.querySelectorAll<HTMLElement>(
        ".item-scroll-target"
      );
      elements.forEach((el) => observer.observe(el));
      observerRef.current = observer;
    }, 1000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setActiveColor]);

  return (
    <div className="slider-scroll">
      <div
        className="d-flex flex-column gap-20 wrapper-gallery-scroll"
        id="gallery-started"
      >
        {finalItem.map((link, index) => (
          <a
            href={link.imgSrc}
            className="item item-scroll-target"
            data-scroll={link.scrollColor}
            data-pswp-width={`${link.width}px`}
            data-pswp-height={`${link.height}px`}
            key={index}
          >
            <Image
              className="tf-image-zoom lazyload radius-12 w-100"
              data-zoom={link.imgSrc}
              alt={link.alt || ""}
              src={link.imgSrc}
              width={link.width}
              height={link.height}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
