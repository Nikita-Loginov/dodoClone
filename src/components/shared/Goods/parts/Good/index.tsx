import Button from "@/components/controls/Button";
import Count from "@/components/controls/Count";

import "./index.scss";
import Link from "next/link";

const Good = () => {
  return (
    <div className="good">
      <Link className="good__img-box" href="/">
        <img
          src="https://media.dodostatic.net/image/r:584x584/0194d4fa65f277598a143a7ba341da53.avif"
          loading="lazy"
          alt="пицца"
          className="good__img"
        />
      </Link>

      <div className="good__content">
        <header className="good__content-top">
          <h3 className="good__name">Сырный цыпленок</h3>

          <div className="good__ingredients">hfjlsdlfhs</div>
        </header>

        <div className="good__details">
          <div className="good__price">
            <span>от </span>

            <div className="good__price-num">
              <span>395</span>

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
