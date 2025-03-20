import { create } from "zustand";

interface State {
  activeId: number;
  setActiveId: (activeId: number) => void;
  items: { id: number; text: string; href: string }[];
}

export const useTypeStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
  items: [
    {
      id: 1,
      text: "Мясные",
      href: "/#meat",
    },
    {
      id: 2,
      text: "Острые",
      href: "/#spicy",
    },
    {
      id: 3,
      text: "Сладкие",
      href: "/#sweet",
    },
    {
      id: 4,
      text: "Вегетарианские",
      href: "/#vegetarian",
    },
    {
      id: 5,
      text: "С курицей",
      href: "/#chicken",
    },
    {
      id: 6,
      text: "Газировки",
      href: "/#soda",
    },
    {
      id: 7,
      text: "Соки",
      href: "/#juice",
    },
  ],
}));
