import Link from "next/link";

import Container from "../Container";
import Search from "@/components/widget/Search";
import Popup from "@/components/widget/Popup";

import LogoIcon from "@/components/icons/Logo/LogoIcon";
import CartIcon from "@/components/icons/Cart/CartIcon";
import ArrowRightIcon from "@/components/icons/Arrow/ArrowRight";
import ProfileIcon from "@/components/icons/Profile/ProfileIcon";

import "./index.scss";

const Header: React.FC = ({}) => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__item">
            <Link
              href="/"
              title="додо клон"
              aria-label="перейти на главную"
              className="header__logo"
            >
              <span className="header__logo-icon">
                <LogoIcon />
              </span>

              <div className="header__logo-cocntent">
                <p className="header__logo-title">dodoClone</p>

                <p className="header__logo-text">вкусней уже некуда</p>
              </div>
            </Link>

            <Search />
          </div>

          <div className="header__details">
            <Popup
              items={[
                {
                  id: 1,
                  text: "Настройки",
                  href: "/settings",
                  ariaLabel: "перейти в настройки",
                },
                {
                  id: 2,
                  text: "Заказы",
                  href: "/orders",
                  ariaLabel: "перейти в заказы",
                },
                {
                  id: 3,
                  text: "Выйти",
                  href: "/exit",
                  ariaLabel: "выйти из профиля",
                },
              ]}
              activeIndex={1}
            >
              {/* верхняя чать попапа */}
              <span className="popup__btn-icon">
                <ProfileIcon />
              </span>

              <span className="popup__btn-text">Профиль</span>
            </Popup>

            <button className="header__cart">
              <div className="header__cart-price">
                <span className="header__cart-price-num">520</span>

                <span className="header__cart-price-currenty">₽</span>
              </div>

              <div className="header__cart-count">
                <div className="header__cart-count-box">
                  <span className="header__cart-count-icon">
                    <CartIcon />
                  </span>

                  <span className="header__cart-count-num">3</span>
                </div>

                <span className="header__cart-arrow">
                  <ArrowRightIcon />
                </span>
              </div>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
