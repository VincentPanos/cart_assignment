import { Header } from "../../types";
import classNames from "classnames";

export function ListHeader({ headers }: { headers: Header[] }) {
  return (
    <div className="flex flex-row space-x-6 border-b-2 py-2 text-dark dark:text-light items-center font-bold text-lg">
      {headers.map((header) => (
        <div className={classNames(header.style)}>{header.label}</div>
      ))}
    </div>
  );
}
