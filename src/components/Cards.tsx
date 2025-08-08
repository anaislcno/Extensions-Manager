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
    <div className="m-auto grid w-fit grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {filteredDatas.map((data: Card) => (
        <div
          key={data.id}
          className="container flex h-fit min-h-[194px] flex-col items-start justify-between gap-12 rounded-2xl border-2 border-neutral-200 bg-white p-16 shadow-[1px_1px_15px_0px_hsl(217,61%,90%)] md:max-w-[380px] dark:border-1 dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none"
        >
          <div className="flex items-start gap-12">
            <img src={data.logo} alt={`Logo ${data.name} extension`} />
            <div className="flex flex-col items-start gap-6">
              <h3 className="text-xl">{data.name}</h3>
              <p className="text-base font-normal">{data.description}</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-8">
            <button
              className="cursor-pointer rounded-4xl border border-neutral-400 px-12 py-8 text-sm font-normal transition-colors duration-300 hover:bg-neutral-400 hover:text-white dark:hover:bg-neutral-600"
              onClick={() => handleRemove(data.id)}
              type="button"
            >
              Remove
            </button>
            <label
              className="relative inline-block h-20 w-36"
              htmlFor={`toggle-${data.id}`}
            >
              <input
                type="checkbox"
                name={`toggle-${data.id}`}
                id={`toggle-${data.id}`}
                className="peer h-0 w-0 opacity-0"
                defaultChecked={data.isActive}
                aria-label={`Activate/Desactivate ${data.name} extension`}
              />
              <span className="absolute h-full w-full cursor-pointer rounded-3xl bg-neutral-300 transition-colors duration-300 peer-checked:bg-red-400 before:absolute before:bottom-2 before:left-2 before:h-16 before:w-16 before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[''] peer-checked:before:translate-x-16"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
