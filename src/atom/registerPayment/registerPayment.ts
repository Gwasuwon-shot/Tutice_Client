import { atom } from "recoil";

export const openPaymentPicker = atom<boolean>({
  key: "openPaymentPicker",
  default: false,
});

export const paymentDateState = atom({
  key: "paymentDateState",
  default: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, date: new Date().getDate() },
});
