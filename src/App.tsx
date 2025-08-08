import { useState } from "react";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
import Header from "./components/Header";

function App() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <>
      <Header />
      <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Cards activeFilter={activeFilter} />
      <div className="group fixed right-14 bottom-14 cursor-pointer rounded-full transition-all duration-300">
        <div className="invisible absolute -top-12 right-36 w-[220px] rounded-md bg-neutral-400 p-2 text-sm font-normal text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 dark:bg-neutral-800">
          Challenge by{" "}
          <a
            className="underline hover:text-neutral-300"
            href="https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="underline hover:text-neutral-300"
            href="https://github.com/anaislcno"
            target="_blank"
            rel="noopener noreferrer"
          >
            anaislcno
          </a>
          .
        </div>
        <button className="flex cursor-pointer items-center justify-center rounded-full bg-white px-2 py-1 text-lg text-neutral-800 shadow-[1px_1px_15px_0px_hsl(217,61%,90%)] transition-colors duration-300 group-hover:bg-neutral-400 group-hover:text-white dark:bg-neutral-600 dark:text-white dark:shadow-none dark:group-hover:bg-neutral-800">
          ⓘ
        </button>
      </div>
    </>
  );
}

export default App;
