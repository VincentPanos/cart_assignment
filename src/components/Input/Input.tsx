import classNames from "classnames";

export function Input({
  name,
  label,
  className,
  error,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
}) {
  return (
    <>
      {label && (
        <label className="font-bold mr-4" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="flex flex-col">
        <input
          className={classNames(
            "py-0.5 px-1 font-bold rounded-md border-2  dark:bg-dark text-dark dark:text-light hover:opacity-50 hover:dark:opacity-80 disabled:hover:opacity-100",
            { "border-red": error },
            { "border-dark dark:border-light": !error },
            className
          )}
          id={name}
          {...rest}
        ></input>
        {error && <div className="text-xs text-red text-bold">{error}</div>}
      </div>
    </>
  );
}
