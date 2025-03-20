"use client";
import { useEffect, useRef, useState } from "react";

import Popup from "../Popup";

import { useTypeStore } from "@/store/type";

import "./index.scss";

const Type: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const { activeId, setActiveId, items } = useTypeStore();
  const typeBox = useRef<HTMLDivElement | null>(null);

  const handleClickLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
      scrollBox(e);
      setActiveId(index);
  };

  const scrollBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    const href = target.getAttribute("href")?.split("#").at(-1);

    if (href) {
      const box = document.querySelector(`#${href}`);

      if (box) {
        const header = document.querySelector(".top") as HTMLElement;
        const headerHeight = header ? header.offsetHeight : 0;

        const boxRect = box.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;

        const offsetY = boxRect.top + scrollY - headerHeight;

        window.scrollTo({
          top: offsetY,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="type" ref={typeBox}>
      <div className="type__items">
        {items.slice(0, visibleCount).map((item) => (
          <a
            key={item.id}
            href={item.href}
            title={item.text}
            aria-label={`посмотреть товары из типа "${item.text.toLowerCase()}"`}
            className={`type__item ${activeId === item.id ? "active" : ""}`}
            onClick={(e) => handleClickLink(e, item.id)}
          >
            {item.text}
          </a>
        ))}
      </div>

      <Popup items={[...items.slice(visibleCount)]} visibleCount={visibleCount} func={handleClickLink}>
        <p className="type__more-text">Ещё </p>

        <span className="type__more-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.000000"
            height="6.000000"
            viewBox="0 0 10 6"
            fill="none"
          >
            <defs />
            <path
              id="Vector"
              d="M0.22 0.22C0.36 0.08 0.55 0 0.75 0C0.95 0 1.14 0.08 1.28 0.22L5 4.1L8.72 0.22C8.86 0.08 9.05 0 9.25 0C9.45 0.01 9.64 0.09 9.77 0.23C9.91 0.38 9.99 0.58 10 0.78C10 0.99 9.92 1.18 9.78 1.33L5.53 5.77C5.39 5.91 5.2 6 5 6C4.8 6 4.61 5.91 4.47 5.77L0.22 1.33C0.07 1.19 0 0.99 0 0.78C0 0.57 0.07 0.37 0.22 0.22Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </span>
      </Popup>
    </div>
  );
};

export default Type;
