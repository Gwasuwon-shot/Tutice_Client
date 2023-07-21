import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const payingPersonName = atom<string>({
  key: "payingPersonName",
  default: "",
});

export const accountNumber = atom<string>({
  key: "accountNumber",
  default: "",
});

export const bankName = atom<string>({
  key: "bankName",
  default: "",
});

export const moneyAmount = atom<number>({
  key: "moneyAmount",
  default: 0,
});

export const paymentOrder = atom<string>({
  key: "paymentOrder",
  default: "",
});

interface lessonCodeAndPaymentIdProp {
  lessonCode: string;
  paymentRecordIdx: number;
}

export const lessonCodeAndPaymentId = atom<lessonCodeAndPaymentIdProp>({
  key: "lessonCodeAndPaymentId",
  default: {
    lessonCode: "",
    paymentRecordIdx: -1,
  },
  effects_UNSTABLE: [persistAtom],
});
