import { atom, selector } from 'recoil';

export const openTimePickerState = atom<boolean>({
    key: 'openTimePickerState',
    default: false,
})

export const openDatePickerState = atom<boolean>({
    key: 'openDatePickerState',
    default: false,
})

export const cycleNumberState = atom<number>({
  key: 'cycleNumberState',
  default: -1,
})


// 학생 이름 상태를 가져오기 위한 선택자
export const openTimePickerSelector = selector({
    key: 'openTimePickerSelector',
    get: ({ get }) => {
      return get(openTimePickerState);
    },
});

// 회차 개수 가져오기 위한 선택자
export const cycleNumberSelector = selector({
  key: 'cycleNumberSelector',
  get: ({ get }) => {
    return get(cycleNumberState);
  },
});
