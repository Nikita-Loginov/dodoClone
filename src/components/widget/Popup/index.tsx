"use client";

import React, { useState } from "react";
import Link from "next/link";

import "./index.scss";
import { useTypeStore } from "@/store/type";

type ILink = {
  id: number;
  text: string;
  href?: string;
  ariaLabel?: string;
};

interface PopupProps {
  items: ILink[];
  activeIndex?: number;
  children: React.ReactNode;
  visibleCount?: number;
  func?: (e: React.MouseEvent<HTMLAnchorElement>, index: number) => void;
}

const Popup: React.FC<PopupProps> = ({
  children,
  items,
  activeIndex,
  func,
  visibleCount,
}) => {
  const [activeItem, setActiveItem] = useState<number>(
    activeIndex ? activeIndex : -1
  );
  const { activeId } = useTypeStore();

  return (
    <div className="popup">
      <button className="popup__btn" type="button">
        {children}
      </button>

      <ul
        className="popup__list"
        aria-label="список детальных страниц для профиля"
      >
        {items.map((item, index) => (
          <li
            className={`popup__link ${
              activeItem - 1 === index ? "active" : ""
            }`}
            key={item.id}
          >
            <Link
              href={item.href ? item.href : ""}
              className={`popup__item ${
                activeItem - 1 === index ? "active" : ""
              } ${(visibleCount && (activeId - visibleCount) === index + 1)  ? "activeType" : ""}`}
              aria-label={item.ariaLabel}
              title={item.text}
              onClick={(e) => {
                if (func) {
                  func(e, item.id);
                }
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
