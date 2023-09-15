import { useLocalStorage } from "usehooks-ts";

export function useVoucher(): {
  voucher: string;
  addVoucher: (newVoucher: string) => void;
} {
  const [voucher, setVoucher] = useLocalStorage<string>("voucher", "");

  return {
    voucher,
    addVoucher: (newVoucher: string) => setVoucher(newVoucher),
  };
}
