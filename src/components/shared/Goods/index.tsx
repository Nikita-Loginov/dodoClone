import Good from "./parts/Good";

import './index.scss'

const Goods: React.FC = () => {
  return (
    <div className="goods">
      <div className="goods__boxs">
        <div className="goods__box" id="meat">
          <h2 className="goods__box-title">Мясные</h2>

          <div className="goods__items">
            <Good />

            <Good />

            <Good />
          </div>
        </div>

        <div className="goods__box" id="spicy">
          <h2 className="goods__box-title">Мясные</h2>

          <div className="goods__items">
            <Good />
          </div>
        </div>

        <div className="goods__box" id="">
          <h2 className="goods__box-title">Мясные</h2>

          <div className="goods__items">
            <Good />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;