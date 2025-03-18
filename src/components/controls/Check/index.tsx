"use client";
import { useState } from "react";
import "./index.scss";

interface CheckBoxProps {
  text: string;
  name: string;
  checked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ text, name, checked }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return (
    <label className="check">
      <div className="check__content">
        <input
          type="checkbox"
          className="check__input"
          name={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <span className="check__box"></span>
      </div>

      <span className="check__text">{text}</span>
    </label>
  );
};

export default CheckBox;
