import Nav from "~/components/Nav";
import MenuItem from "~/components/ui/MenuItem";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between border-b border-slate-700">
      <div className="flex gap-x-32">
        <div className="py-4 px-6 text-slate-400">michael-weaver</div>

        <div className="hidden lg:block">
          <Nav />
        </div>
      </div>

      <div className="hidden lg:block border-l border-slate-700">
        <MenuItem link="/contact-me">_contact-me</MenuItem>
      </div>

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-5 lg:hidden"
      >
        <div className="w-[18px] flex flex-col gap-y-[5px]">
          <span
            className={clsx(
              "block h-0.5 bg-slate-500 custom-transition",
              isMobileMenuOpen && "rotate-45 translate-y-[7px]"
            )}
          ></span>

          <span
            className={clsx(
              "block h-0.5 bg-slate-500 custom-transition",
              isMobileMenuOpen && "opacity-0"
            )}
          ></span>

          <span
            className={clsx(
              "block h-0.5 bg-slate-500 custom-transition",
              isMobileMenuOpen && "-rotate-45 -translate-y-[7px]"
            )}
          ></span>
        </div>
      </button>
    </header>
  );
};

export default Header;
