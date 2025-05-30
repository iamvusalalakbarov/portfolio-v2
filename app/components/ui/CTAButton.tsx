import React from "react";
import { ButtonVariant } from "~/types/enums";
import clsx from "clsx";

interface ICTAButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  disabled?: boolean;
}

const CTAButton: React.FC<ICTAButtonProps> = (props) => {
  const baseClasses =
    "py-2.5 px-3 rounded-lg text-sm cursor-pointer transition-all duration-500 ease-in-out";
  const variantClasses = {
    [ButtonVariant.Primary]:
      "bg-orange-300 text-primary-inverted hover:bg-orange-200",
    [ButtonVariant.Default]: "bg-slate-600 text-slate-50 hover:bg-slate-500",
    [ButtonVariant.Ghost]:
      "border border-slate-50 text-slate-50 hover:bg-slate-800 hover:border-transparent",
    [ButtonVariant.Success]:
      "bg-green-500 text-primary-inverted hover:bg-green-400",
    [ButtonVariant.Error]: "bg-red-500 text-primary-inverted hover:bg-red-400",
    [ButtonVariant.Warning]:
      "bg-yellow-500 text-primary-inverted hover:bg-yellow-400",
  };
  const disabledClasses = "bg-slate-700 text-slate-500 !cursor-not-allowed";

  return (
    <button
      disabled={props.disabled}
      className={clsx(
        baseClasses,
        props.disabled ? disabledClasses : variantClasses[props.variant]
      )}
    >
      {props.children}
    </button>
  );
};

export default CTAButton;
