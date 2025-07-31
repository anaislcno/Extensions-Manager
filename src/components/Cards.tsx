import { useState } from "react";
import datas from "../datas/data.json";
import type { Card } from "../types/cards";

const Cards = () => {
  const [hiddenCards, setHiddenCards] = useState<number[]>([]);

  const handleRemove = (index: number) => {
    setHiddenCards((prev) => [...prev, index]);
    console.log(`Remove: ${index}`);
  };

  return (
    <div className="m-auto grid w-fit grid-cols-3 gap-[8px]">
      {datas.map((data: Card, index: number) =>
        hiddenCards.includes(index) ? null : (
          <div
            key={index}
            className="flex max-w-[380px] flex-col items-start gap-[36px] rounded-2xl border border-neutral-300 bg-neutral-100 p-[12px] dark:border-neutral-600 dark:bg-neutral-700"
          >
            <div className="flex items-start gap-[12px]">
              <img src={data.logo} />
              <div className="flex flex-col items-start">
                <h3>{data.name}</h3>
                <p className="font-normal">{data.description}</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-[8px]">
              <button
                className="cursor-pointer rounded-4xl border border-neutral-600 px-[12px] py-[8px] text-base font-normal transition-colors duration-300 hover:bg-neutral-600"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
              <label className="relative inline-block h-[24px] w-[46px]">
                <input
                  type="checkbox"
                  className="peer h-0 w-0 opacity-0"
                  defaultChecked={data.isActive}
                />
                <span className="absolute h-full w-full cursor-pointer rounded-3xl bg-neutral-300 transition-colors duration-300 peer-checked:bg-red-400 before:absolute before:bottom-[2px] before:left-[2px] before:h-[20px] before:w-[20px] before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[''] peer-checked:before:translate-x-[22px]"></span>
              </label>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Cards;
