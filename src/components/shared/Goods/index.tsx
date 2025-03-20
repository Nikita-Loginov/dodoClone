"use client";

import Good from "./parts/Good";
import "./index.scss";
import { useEffect, useRef } from "react";
import { useTypeStore } from "@/store/type";

const boxs = [
  {
    id: 1,
    title: "Мясные",
    dataName: "meat",
    items: [
      {
        id: 1,
        href: "/",
        srcImg:
          "https://media.dodostatic.net/image/r:292x292/0194d4f6904975a5a6427e297591980d.jpg",
        name: "Сырный цыпленок",
        ingredients:
          "Пряная говядина, баварские колбаски, пикантная пепперони, бекон, моцарелла и фирменный томатный соус",
        price: 395,
      },
      {
        id: 2,
        href: "/",
        srcImg:
          "https://media.dodostatic.net/image/r:292x292/0194d4fa65f277598a143a7ba341da53.jpg",
        name: "Мясная с аджикой",
        ingredients:
          "Баварские колбаски, острый соус аджика, острые колбаски чоризо, цыпленок, пикантная пепперони, моцарелла, фирменный томатный соус",
        price: 395,
      },
    ],
  },
  {
    id: 2,
    title: "Острые",
    dataName: "spicy",
    items: [
      {
        id: 1,
        href: "/",
        srcImg:
          "https://media.dodostatic.net/image/r:292x292/019591c6455276a4bb8ab7745efd46c1.jpg",
        name: "Кола-барбекю",
        ingredients:
          "Пряная говядина, пикантная пепперони, острые колбаски чоризо, соус кола-барбекю, моцарелла и фирменный томатный соус",
        price: 395,
      },
    ],
  },
  {
    id: 6,
    title: "Газировки",
    dataName: "soda",
    items: [
      {
        id: 1,
        href: "/",
        srcImg:
          "https://media.dodostatic.net/image/r:292x292/0194b770052874e5866fb322a5ccd52e.jpg",
        name: "Добрый Кола",
        price: 395,
      },
    ],
  },
];

const Goods: React.FC = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const { setActiveId } = useTypeStore();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(boxs[index].id);
              }
            });
          },
          { threshold: 0.9 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="goods">
      <div className="goods__boxs">
        {boxs.map((box, index) => (
          <div
            className="goods__box"
            key={box.id}
            id={box.dataName}
            ref={(el) => {
              refs.current[index] = el;
            }}
          >
            <h2 className="goods__box-title">{box.title}</h2>

            <div className="goods__items">
              {box.items.map((item) => (
                <Good key={item.id} item={{ ...item }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goods;
