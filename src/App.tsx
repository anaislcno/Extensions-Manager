import { useState } from "react";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
import Header from "./components/Header";

function App() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <>
      <Header />
      <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      <Cards activeFilter={activeFilter}/>
    </>
  );
}

export default App;
