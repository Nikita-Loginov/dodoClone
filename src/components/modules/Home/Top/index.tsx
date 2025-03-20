"use client";

import Container from "@/components/shared/Container";
import Type from "@/components/widget/Type";
import Sort from "@/components/widget/Sort";
import Filter from "@/components/widget/Filter";
import Goods from "@/components/shared/Goods";

import { useTypeStore } from "@/store/type";

import "./index.scss";

const Top: React.FC = () => {
  const {activeId, items} = useTypeStore();
  return (
    <>
      <section className="top">
        <Container>
          <div className="top__inner">
            <h1 className="top__title">{items[activeId - 1].text}</h1>

            <div className="top__content">
              <Type />

              <Sort />
            </div>
          </div>
        </Container>
      </section>

      <section className="goods-box">
        <Container>
          <div className="goods-box__inner">

            <Filter />

            <Goods/>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Top;
