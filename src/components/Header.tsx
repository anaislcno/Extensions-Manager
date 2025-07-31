import logoSVG from "../assets/images/logo-cropped.svg";
import lightSVG from "../assets/images/icon-sun.svg";

const Header = () => {
  return (
    <div className="m-auto flex max-w-[1156px] items-center justify-between gap-[12px] rounded-2xl bg-neutral-700 p-[12px]">
      <div className="flex gap-[12px]">
        <img src={logoSVG} alt="Logo" className="h-8 w-auto" />
        <h1>Extensions</h1>
      </div>
      <button className="cursor-pointer rounded-xl bg-neutral-600 p-[12px] transition-colors duration-300 hover:bg-neutral-500">
        <img src={lightSVG} alt="Logo" className="h-6 w-auto" />
      </button>
    </div>
  );
};

export default Header;
