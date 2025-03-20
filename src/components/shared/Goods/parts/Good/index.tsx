import Button from "@/components/controls/Button";
import Count from "@/components/controls/Count";

import "./index.scss";
import Link from "next/link";

interface GoodProps {
  id: number;
  href: string;
  srcImg: string;
  name: string;
  ingredients?: string;
  price: number;
}

interface GoodComponentProps {
  item: GoodProps;
}

const Good = ({item} : GoodComponentProps) => {
  return (
    <div className="good">
      <Link className="good__img-box" href={item.href}>
        <img
          src={`${item.srcImg}`}
          loading="lazy"
          alt="пицца"
          className="good__img"
        />
      </Link>

      <div className="good__content">
        <header className="good__content-top">
          <h3 className="good__name">{item.name}</h3>

          {item.ingredients && <div className="good__ingredients">{item.ingredients}</div>}
        </header>

        <div className="good__details">
          <div className="good__price">
            <span>от </span>

            <div className="good__price-num">
              <span>{item.price}</span>

              <span>₽</span>
            </div>
          </div>

          <div className="good__cart">
            <Button type="button" ariaLabel="добавить в корзину">
              + Добавить
            </Button>

            <Count />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
