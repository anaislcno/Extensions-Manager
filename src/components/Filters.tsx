import { useState } from "react";

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const baseBtn =
    "rounded-3xl border border-neutral-600 px-[16px] py-[8px] text-white transition-colors duration-200 font-normal cursor-pointer hover:bg-neutral-600";
  const activeBtn = "bg-red-400 text-neutral-900";
  // Pq prends pas le texte ?

  return (
    <div className="m-auto flex max-w-[1156px] items-center justify-between rounded-lg pt-[36px] pb-[24px]">
      <h1>Extensions List</h1>
      <div className="flex gap-[12px]">
        <button
          className={`${baseBtn} ${activeFilter === "all" ? activeBtn : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`${baseBtn} ${activeFilter === "active" ? activeBtn : ""}`}
          onClick={() => setActiveFilter("active")}
        >
          Active
        </button>
        <button
          className={`${baseBtn} ${activeFilter === "inactive" ? activeBtn : ""}`}
          onClick={() => setActiveFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default Filters;
