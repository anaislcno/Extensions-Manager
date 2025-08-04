import type { FiltersProps } from "../types/filters";

const Filters = ({ activeFilter, setActiveFilter }: FiltersProps) => {
  const baseBtn =
    "rounded-3xl border dark:border-neutral-600 border-neutral-200 px-[16px] py-[8px] transition-colors duration-200 font-normal cursor-pointer hover:text-white dark:hover:bg-neutral-600 hover:bg-neutral-400 transition-colors duration-300 shadow-[1px_1px_15px_0px_hsl(217,61%,90%)] dark:shadow-none";
  const activeBtn =
    "dark:bg-red-400 bg-red-500 dark:text-neutral-900 text-white";
  const inactiveBtn =
    "dark:text-white text-neutral-800 dark:bg-neutral-800 bg-white border-neutral-200 ";

  return (
    <div className="m-auto flex max-w-[1156px] flex-col items-center justify-between rounded-lg pt-[36px] pb-[36px] sm:flex-row sm:pt-[24px] sm:pt-[56px]">
      <h1 className="pb-[12px] text-3xl sm:pb-0">Extensions List</h1>
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
