import datas from "../datas/data.json";
import type { Card } from "../types/cards";

const Cards = () => {
  console.log(datas);

  return (
    <div className="grid grid-cols-3 gap-[8px] w-fit m-auto">
      {datas.map((data: Card, index: number) => (
        <div
          key={index}
          className="flex flex-col items-start gap-[36px] rounded-2xl border border-neutral-600 bg-neutral-700 p-[12px] max-w-[380px]"
        >
          <div className="flex items-start gap-[12px]">
            <img src={data.logo} />
            <div className="flex flex-col items-start">
              <h3>{data.name}</h3>
              <p className="font-normal">{data.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button className="rounded-4xl border border-neutral-600 px-[12px] py-[8px] text-base font-normal cursor-pointer hover:bg-neutral-600 transition-colors duration-300">
              Remove
            </button>
            <label className="relative inline-block h-[24px] w-[50px]">
              <input type="checkbox" className="peer h-0 w-0 opacity-0" />
              <span className="absolute h-full w-full cursor-pointer rounded-3xl bg-neutral-300 transition-colors duration-300 peer-checked:bg-red-400 before:absolute before:bottom-[2px] before:left-[4px] before:h-[20px] before:w-[20px] before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[''] peer-checked:before:translate-x-[24px]"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
