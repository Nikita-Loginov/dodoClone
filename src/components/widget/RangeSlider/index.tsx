"use client";

import { useState } from "react";
import Slider from "@mui/material/Slider";

import "./index.scss";

export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([1000, 2000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="rangeSlider">
      <div className="rangeSlider__numbers">
        <div className="rangeSlider__number">
          <span>{value[0]}</span>

          <span>₽</span>
        </div>

        <div className="rangeSlider__number">
          <span>{value[1]}</span>

          <span>₽</span>
        </div>
      </div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0} // Минимальное значение
        max={3000} // Максимальное значение
        sx={{
          // Стилизация ползунков
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#678677",
            border: "2px solid currentColor",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(25, 118, 210, 0.16)",
            },
          },
          // Стилизация трека между ползунками
          "& .MuiSlider-track": {
            height: 8,
            backgroundColor: "#678677",
          },
          // Стилизация базовой линии
          "& .MuiSlider-rail": {
            height: 8,
            opacity: 0.2,
            backgroundColor: "#678677",
          },
          "& .MuiSlider-valueLabel": {
            display: "none"
          }
        }}
      />
    </div>
  );
}
