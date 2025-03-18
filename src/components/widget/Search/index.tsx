"use client";

import { useState } from "react";

import SearchIcon from "@/components/icons/Input/SeacrhIcon";
import CloseIcon from "@/components/icons/Close/CloseIcon";

import "./index.scss";

const Search: React.FC = ({}) => {
  const [value, setValue] = useState("");

  const onChangeValue = (value: string) : void => {
    setValue(value);
  };

  const cleaningInputValue = () : void => {
    setValue("")
  }

  return (
    <form className="search">
      <label className="search__top">
        <div className="search__box">
          <span className="search__icon">
            <SearchIcon />
          </span>

          <input
            type="search"
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            placeholder="Поиск пиццы..."
            className="search__input"
          />
        </div>

        {value && (
          <button
            className="search__empty"
            onClick={cleaningInputValue}
            aria-label="очистить поле"
            type="button"
          >
            <CloseIcon />
          </button>
        )}
      </label>

      {/* .search */}
    </form>
  );
};

export default Search;
