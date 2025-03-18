"use client";

import { useState } from "react";
import CkecksBox from "./parts/ChecksBox";
import Button from "@/components/controls/Button";
import RangeSlider from "../RangeSlider";

import "./index.scss";

const Filter: React.FC = () => {
  const [checkBoxs, setcheckBoxs] = useState([
    {
      id: 1,
      visibleItems: 6,
      items: [
        {
          text: "Можно собирать ",
          name: "check",
          checked: false,
        },
        {
          text: "Новинки",
          name: "check",
          checked: true,
        },
      ],
    },
    {
      id: 2,
      title: "Ингредиенты:",
      visibleItems: 6,
      items: [
        {
          text: "Сырный соус",
          name: "check",
          checked: false,
        },
        {
          text: "Моцарелла",
          name: "check",
          checked: true,
        },
        {
          text: "Чеснок",
          name: "check",
          checked: false,
        },
        {
          text: "Солённые огурчики",
          name: "check",
          checked: false,
        },
        {
          text: "Красный лук",
          name: "check",
          checked: false,
        },
        {
          text: "Cоус барбекю",
          name: "check",
          checked: false,
        },
        {
          text: "Нежный цыпленок",
          name: "check",
          checked: false,
        },
      ],
    },
    {
      id: 2,
      title: "Тип теста:",
      visibleItems: 6,
      items: [
        {
          text: "Традиционное",
          name: "check",
          checked: false,
        },
        {
          text: "Тонкое",
          name: "check",
          checked: true,
        },
      ],
    },
  ]);

  const showMoreItems = (index: number) => {
    setcheckBoxs((prev) =>
      prev.map((box, i) =>
        i === index - 1 ? { ...box, visibleItems: box.items.length } : box
      )
    );
  };

  return (
    <form className="filter">
      <h2 className="filter__title">Фильтрация</h2>

      <div className="filter__items">
        {checkBoxs.slice(0, 1).map((box, index) => (
          <CkecksBox
            box={{ ...box }}
            key={index}
            showMoreItems={() => showMoreItems(box.id)}
          />
        ))}

        <div className="filter__price">
          <h3 className="filter__price-title">Цена от и до:</h3>

          <div className="filter__price-content">
            <RangeSlider />
          </div>
        </div>

        {checkBoxs.slice(1).map((box, index) => (
          <CkecksBox
            box={{ ...box }}
            key={index}
            showMoreItems={() => showMoreItems(box.id)}
          />
        ))}
      </div>

      <Button type={"submit"} ariaLabel={"применить фильтр"}>
        Применить
      </Button>
    </form>
  );
};

export default Filter;
