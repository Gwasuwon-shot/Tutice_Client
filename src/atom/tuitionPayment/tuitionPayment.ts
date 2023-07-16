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

export const moneyAmount = atom<string>({
    key: "moneyAmount",
    default: ""
})