import { Voucher } from "./types";

export const vouchers: Voucher[] = [
  {
    code: "HAPPYBIRTHDAY",
    discount: 0.2,
    productIds: [],
  },
  {
    code: "SUMMER",
    discount: 200,
    productIds: [],
  },
  {
    code: "ILIKEAPPLES",
    discount: 0.6,
    productIds: ["d65d349b-2a77-4fdb-9d7a-0ab85eb84fd1"],
  },
  {
    code: "ILIKEPEARS",
    discount: 0.4,
    productIds: ["34d69140-d883-48d5-9af6-cecae5e653e2"],
  },
  {
    code: "GREEN",
    discount: 0.3,
    productIds: [
      "34d69140-d883-48d5-9af6-cecae5e653e2",
      "51405659-f333-4f68-871d-fe0fc4706678",
    ],
  },
];
