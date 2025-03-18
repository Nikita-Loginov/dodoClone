"use client";
import CheckBox from "@/components/controls/Check";

import './index.scss'

interface CkecksBoxItems {
  text: string;
  name: string;
  checked: boolean;
}

interface CkecksBoxProps {
  box: {
    title?: string;
    id: number;
    visibleItems: number;
    items: CkecksBoxItems[];
  };
  showMoreItems: () => void;
}

const CkecksBox: React.FC<CkecksBoxProps> = ({ box, showMoreItems }) => {
  const showMore = () => {
    showMoreItems();
  };

  return (
    <div className="checkBox" key={box.title}>
      {box.title && <h3 className="checkBox__item-title">{box.title}</h3>}

      <div className="checkBox__item-content">
        {box.items.slice(0, box.visibleItems).map((item) => (
          <CheckBox
            key={item.text}
            text={item.text}
            name={item.name}
            checked={item.checked}
          />
        ))}
      </div>

      {box.items.length > box.visibleItems && (
        <button
          className="checkBox__more"
          type="button"
          aria-label="кнопка для показа еще"
          onClick={showMore}
        >
          + Показать всё
        </button>
      )}
    </div>
  );
};

export default CkecksBox;
