import { useState } from "react";
import datas from "../datas/data.json";
import type { Card, CardsProps } from "../types/cards";

const Cards = ({ activeFilter }: CardsProps) => {
  const [hiddenCards, setHiddenCards] = useState<number[]>([]);

  const handleRemove = (id: number) => {
    setHiddenCards((prev) => [...prev, id]);
    console.log(`Remove: ${id}`);
  };

  const filteredDatas = datas.filter((data: Card) => {
    if (hiddenCards.includes(data.id)) return false;
    if (activeFilter === "active") return data.isActive;
    if (activeFilter === "inactive") return !data.isActive;
    return true;
  });

  return (
    <div className="m-auto grid w-fit grid-cols-1 gap-[12px] md:grid-cols-2 lg:grid-cols-3">
      {filteredDatas.map((data: Card) => (
        <div
          key={data.id}
          className="container flex flex-col items-start justify-between min-h-[194px] gap-[12px] rounded-2xl border border-neutral-300 bg-neutral-100 p-[16px] md:max-w-[380px] dark:border-neutral-600 dark:bg-neutral-800"
        >
          <div className="flex items-start gap-[12px]">
            <img src={data.logo} />
            <div className="flex flex-col items-start gap-[6px]">
              <h3 className="text-xl">{data.name}</h3>
              <p className="font-normal text-base">{data.description}</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-[8px]">
            <button
              className="text-sm cursor-pointer rounded-4xl border border-neutral-600 px-[12px] py-[8px] font-normal transition-colors duration-300 hover:bg-neutral-600"
              onClick={() => handleRemove(data.id)}
            >
              Remove
            </button>
            <label className="relative inline-block h-[20px] w-[36px]">
              <input
                type="checkbox"
                className="peer h-0 w-0 opacity-0"
                defaultChecked={data.isActive}
              />
              <span className="absolute h-full w-full cursor-pointer rounded-3xl bg-neutral-300 transition-colors duration-300 peer-checked:bg-red-400 before:absolute before:bottom-[2px] before:left-[2px] before:h-[16px] before:w-[16px] before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[''] peer-checked:before:translate-x-[16px]"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
