import type { FiltersProps } from "../types/filters";

const Filters = ({ activeFilter, setActiveFilter }: FiltersProps) => {
  const baseBtn =
    "rounded-3xl border border-neutral-600 px-[16px] py-[8px] transition-colors duration-200 font-normal cursor-pointer hover:bg-neutral-600 transition-colors duration-300";
  const activeBtn = "bg-red-400 text-neutral-900 hover:text-white";
  const inactiveBtn = "text-white dark:bg-neutral-800 bg-neutral-100";

  return (
    <div className="m-auto flex max-w-[1156px] items-center justify-between rounded-lg sm:pt-[56px] pt-[36px] pb-[36px] sm:flex-row flex-col sm:pt-[24px]">
      <h1 className="text-3xl sm:pb-0 pb-[12px]">Extensions List</h1>
      <div className="flex gap-[12px]">
        <button
          className={`${baseBtn} ${activeFilter === "all" ? activeBtn : inactiveBtn}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`${baseBtn} ${activeFilter === "active" ? activeBtn : inactiveBtn}`}
          onClick={() => setActiveFilter("active")}
        >
          Active
        </button>
        <button
          className={`${baseBtn} ${activeFilter === "inactive" ? activeBtn : inactiveBtn}`}
          onClick={() => setActiveFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default Filters;
