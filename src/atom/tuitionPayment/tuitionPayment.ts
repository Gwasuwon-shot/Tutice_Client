import { atom } from 'recoil';

export const payingPersonName = atom<string>({
    key: 'payingPersonName',
    default: "",
})

export const accountNumber = atom<string>({
  key: 'accountNumber',
  default: "",
})

export const bankName = atom<string>({
    key: "bankName",
    default: "",
})

export const moneyAmount = atom<number>({
    key: "moneyAmount",
    default: 0,
})

export const paymentOrder = atom<string>({
    key: "paymentOrder",
    default: "선불",
})