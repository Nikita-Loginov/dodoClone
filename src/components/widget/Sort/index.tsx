"use client";
import { useEffect, useState } from "react";
import SortIcon from "@/components/icons/Sort/SortIcon";

import "./index.scss";

const items = [
  {
    id: 1,
    text: "рейтингу",
  },
  {
    id: 2,
    text: "цене",
  },
  {
    id: 3,
    text: "алфавиту",
  },
];

const Sort: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (!target.closest('.sort')) {
            setIsOpen(false)
        }
    }

    document.addEventListener('click', clickOutside)

    return () => {
        document.removeEventListener('click', clickOutside)
    }
  }, [])

  const clickItem = (activeIndex : number) : void => {
    setActiveIndex(activeIndex)
    setIsOpen(false)
  }

  const toggleSort = (): void => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={`sort ${isOpen ? 'open' : ''}`}>
      <button className="sort__active" onClick={toggleSort}>
        <div className="sort__active-title">
          <span className="sort__active-icon">
            <SortIcon />
          </span>

          <span>Сортировка:</span>
        </div>

        <p className="sort__active-text">{items[activeIndex].text}</p>
      </button>

      <ul className="sort__list">
        {items.map((item, index) => (
          <li
            key={item.id}
            onClick={() => clickItem(index)}
            className={`sort__link ${index === activeIndex ? "active" : ""}`}
          >
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
