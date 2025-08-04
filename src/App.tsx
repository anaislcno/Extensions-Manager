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
      <div className="pt-[24px] text-center text-sm font-normal">
        Challenge by{" "}
        <a
          className="underline hover:text-neutral-300"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="underline hover:text-neutral-300"
          href="https://github.com/anaislcno"
        >
          anaislcno
        </a>
        .
      </div>
    </>
  );
}

export default App;
