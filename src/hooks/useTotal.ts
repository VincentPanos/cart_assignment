import { Cart } from "../types";
import { useVoucher } from "./useVoucher";
import { useMemo } from "react";
import { vouchers } from "../vouchers";

function calculateDiscount(total: number, cart: Cart, code: string) {
  const voucher = vouchers.filter((v) => v.code === code)[0];
  if (voucher) {
    const discountedAmount =
      voucher.productIds.length === 0
        ? total
        : cart
            ?.filter((p) => voucher.productIds.find((v) => v === p.id))
            .reduce((acc, item) => acc + item.amount * item.price, 0);
    if (voucher.discount < 1) return discountedAmount * voucher.discount;
    return voucher.discount;
  }
  return 0;
}

export function useTotal(cart: Cart): {
  total: number;
  discTotal: number;
} {
  const { voucher } = useVoucher();

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.amount * item.price, 0) / 100;
  }, [cart]);

  const discTotal =
    voucher || voucher !== ""
      ? Number((calculateDiscount(total * 100, cart, voucher) / 100).toFixed(2))
      : 0;

  return {
    total,
    discTotal,
  };
}
