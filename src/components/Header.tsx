import { useState, useEffect } from "react";
import logoSVG from "../assets/images/logo-cropped.svg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

const Header = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const darkModeHandler = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <div className="m-auto flex max-w-[1156px] items-center justify-between gap-[12px] rounded-3xl border-2 border-neutral-200 bg-white p-[12px] shadow-[1px_1px_15px_0px_hsl(217,61%,90%)] dark:border-none dark:bg-neutral-800 dark:shadow-none">
      <div className="flex items-center gap-[12px]">
        <img src={logoSVG} alt="Logo" className="h-10 w-auto" />
        <h2 className="text-2xl">Extensions</h2>
      </div>
      <button
        className="cursor-pointer rounded-xl bg-neutral-100 p-[12px] transition-colors duration-300 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
        onClick={() => darkModeHandler()}
      >
        {dark ? (
          <img src={sun} alt="Logo" className="h-6 w-auto" />
        ) : (
          <img src={moon} alt="Logo" className="h-6 w-auto" />
        )}
      </button>
    </div>
  );
};

export default Header;
