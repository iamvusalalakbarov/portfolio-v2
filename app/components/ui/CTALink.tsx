import React from "react";
import { Link } from "react-router";

interface ICTALinkProps {
  href: string;
  children: React.ReactNode;
}

const CTALink: React.FC<ICTALinkProps> = (props) => {
  return (
    <Link
      to={props.href}
      className="text-sm text-rose-300 underline custom-transition hover:text-rose-200"
    >
      {props.children}
    </Link>
  );
};

export default CTALink;
