import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { YES_TODAY_CLASS_ING_CLASS_BANNER } from "../../core/teacherHome/teacherHome";
const { persistAtom } = recoilPersist();

export const upcomingClassData = atom({
  key: "upcomingClassData",
  default: YES_TODAY_CLASS_ING_CLASS_BANNER.data,
  effects_UNSTABLE: [persistAtom],
});
