import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useVoucher } from "../hooks/useVoucher";
import { Input } from "./Input";
import { Button } from "./Button";
import { vouchers } from "../vouchers";
import { useState, ChangeEvent } from "react";

export function Voucher() {
  const { voucher, addVoucher } = useVoucher();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setValue(event.target.value);
  };

  const validateVoucher = (value: string) => {
    const voucher = vouchers.filter((v) => v.code === value);
    if (voucher.length > 0) return true;
    return false;
  };

  return (
    <div className="flex text-dark dark:text-light">
      <div className="flex text-lg font-bold space-x-1 items-start">
        {voucher || voucher !== "" ? (
          <>
            <span>{voucher}</span>
            <Button
              variant="icon"
              onClick={() => {
                addVoucher(""), setValue("");
              }}
            >
              <XMarkIcon className="h-5 w-5 text-red" />
            </Button>
          </>
        ) : (
          <>
            <Input
              className="w-36 text-base"
              onChange={handleChange}
              value={value}
              error={error}
              placeholder={"Voucher"}
            />
            <Button
              variant="success"
              onClick={() => {
                if (!validateVoucher(value))
                  setError("The voucher is invalid!");
                else {
                  addVoucher(value), setError("");
                }
              }}
            >
              <PlusIcon className="w-5 h-5" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
