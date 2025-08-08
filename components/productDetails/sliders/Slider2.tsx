"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Image from "next/image";
import Drift from "drift-zoom";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

type ImageType = {
  src: string;
  color: string;
  width: number;
  height: number;
  id?: number;
};

interface Slider1Props {
  activeColor?: string;
  setActiveColor?: (color: string) => void;
  firstItem?: string;
  slideItems?: ImageType[];
}

const defaultImages: ImageType[] = [
  {
    src: "/images/shop/product-1.jpg",
    color: "Gray",
    width: 900,
    height: 900,
  },
  {
    src: "/images/shop/product-1.1.jpg",
    color: "Grey",
    width: 600,
    height: 600,
  },
  {
    src: "/images/shop/product-1.2.jpg",
    color: "Beige",
    width: 600,
    height: 600,
  },
  {
    src: "/images/shop/product-1.3.jpg",
    color: "Beige",
    width: 600,
    height: 600,
  },
  {
    src: "/images/shop/product-1.4.jpg",
    color: "Beige",
    width: 1020,
    height: 1020,
  },
];

export default function Slider2({
  activeColor = "Black",
  setActiveColor = () => {},
  firstItem,
  slideItems = defaultImages,
}: Slider1Props) {
  const items: ImageType[] = slideItems.map((item, idx) => ({
    ...item,
    src: idx === 0 && firstItem ? firstItem : item.src,
    id: idx + 1,
  }));

  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

  useEffect(() => {
    const checkWindowSize = () => window.innerWidth >= 1200;

    if (!checkWindowSize()) return;

    const imageZoom = () => {
      const driftAll = document.querySelectorAll<HTMLElement>(".tf-image-zoom");
      const pane = document.querySelector(
        ".tf-zoom-main"
      ) as HTMLElement | null;

      driftAll.forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: pane!,
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

    const handleMouseOver = (event: Event) => {
      const target = event.target as HTMLElement;
      const parent = target.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event: Event) => {
      const target = event.target as HTMLElement;
      const parent = target.closest(".section-image-zoom");
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
      gallery: "#gallery-swiper-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
    };
  }, []);

  useEffect(() => {
    const target = items.find((elm) => elm.color === activeColor);
    if (target && swiperRef.current) {
      swiperRef.current.slideTo((target.id ?? 1) - 1);
    }
  }, [activeColor]);

  useEffect(() => {
    setTimeout(() => {
      const target = items.find((elm) => elm.color === activeColor);
      if (swiperRef.current && target) {
        swiperRef.current.slideTo(1);
        swiperRef.current.slideTo((target.id ?? 1) - 1);
      }
    });
  }, []);

  return (
    <>
      <Swiper
        dir="ltr"
        className="swiper tf-product-media-thumbs other-image-zoom"
        modules={[Thumbs, FreeMode]}
        onSwiper={setThumbSwiper}
        {...{
          spaceBetween: 10,
          slidesPerView: "auto",
          freeMode: true,
          direction: "horizontal",
          watchSlidesProgress: true,
          observer: true,
          observeParents: true,
        }}
      >
        {items.map((image, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide stagger-item"
            data-color={image.color}
          >
            <div className="item">
              <Image
                className="lazyload"
                data-src={image.src}
                alt=""
                src={image.src}
                width={image.width}
                height={image.height}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        dir="ltr"
        className="swiper tf-product-media-main"
        id="gallery-swiper-started"
        modules={[Thumbs]}
        thumbs={{ swiper: thumbSwiper }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          if (items[swiper.activeIndex]) {
            setActiveIndex(swiper.activeIndex);
            setActiveColor(items[swiper.activeIndex]?.color);
          }
        }}
      >
        {items.map((image, i) => (
          <SwiperSlide
            key={i}
            className="swiper-slide"
            data-color={image.color}
          >
            <a
              href={image.src}
              target="_blank"
              className="item"
              data-pswp-width="600"
              data-pswp-height="600"
            >
              <Image
                className="tf-image-zoom lazyload"
                data-zoom={image.src}
                data-src={image.src}
                alt=""
                src={image.src}
                width={900}
                height={900}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
