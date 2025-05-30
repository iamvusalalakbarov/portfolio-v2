import React from "react";
import { NavLink } from "react-router";
import clsx from "clsx";

interface IMenuItemProps {
  link: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        clsx(
          "flex items-start gap-x-2 py-4 px-8 hover:text-slate-300 custom-transition relative",
          isActive &&
            "before:absolute before:bottom-0 before:-left-px before:-right-px before:h-[3px] before:bg-orange-300"
        )
      }
    >
      {props.children}
    </NavLink>
  );
};

export default MenuItem;
