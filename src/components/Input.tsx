import classNames from "classnames";

export function Input({
  name,
  label,
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <>
      {label && (
        <label className="font-bold mr-4" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={classNames(
          "py-0.5 px-1 font-bold rounded-md border-2 border-dark dark:border-light text-dark dark:text-light hover:opacity-50 hover:dark:opacity-80 disabled:hover:opacity-100",
          className
        )}
        id={name}
        {...rest}
      ></input>
    </>
  );
}
