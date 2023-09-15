import classNames from "classnames";
import * as React from "react";

type VariantType = "primary" | "secondary" | "icon" | "success" | "delete";

const VariantStyles: { [key in VariantType]: string } = {
  primary:
    "bg-dark dark:bg-light text-light dark:text-dark rounded-md hover:opacity-80 py-1.5 px-4 font-bold disabled:opacity-20",
  secondary:
    "py-1.5 px-4 font-bold rounded-md border-2 border-dark dark:border-light text-dark dark:text-light hover:opacity-50 hover:dark:opacity-80 disabled:opacity-20",
  icon: "py-1.5 px-4 disabled:opacity-20 hover:opacity-70",
  success:
    "bg-green text-light rounded-md hover:opacity-80 py-1.5 px-2 font-bold disabled:opacity-20",
  delete:
    "bg-red text-light rounded-md hover:opacity-80 py-1.5 px-4 font-bold disabled:opacity-20",
};

export function Button({
  variant = "primary",
  children,
  disabled,
  className,
  ...rest
}: React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: VariantType }
>) {
  const buttonStyle = VariantStyles[variant];

  return (
    <button
      className={classNames(buttonStyle, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
