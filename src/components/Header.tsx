import { useState } from "react";
import logoSVG from "../assets/images/logo-cropped.svg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

const Header = () => {
  const [dark, setDark] = useState<boolean>(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="bg-neutral-0 m-auto flex max-w-[1156px] items-center justify-between gap-[12px] rounded-2xl border-neutral-300 p-[12px] dark:border-none dark:bg-neutral-700">
      <div className="flex gap-[12px]">
        <img src={logoSVG} alt="Logo" className="h-8 w-auto" />
        <h2>Extensions</h2>
      </div>
      <button
        className="cursor-pointer rounded-xl bg-neutral-200 p-[12px] transition-colors duration-300 hover:bg-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-600"
        onClick={() => darkModeHandler()}
      >
        {dark && <img src={sun} alt="Logo" className="h-6 w-auto" />}
        {!dark && <img src={moon} alt="Logo" className="h-6 w-auto" />}
      </button>
    </div>
  );
};

export default Header;
