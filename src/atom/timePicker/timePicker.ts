import { atom, selector } from 'recoil';

export const openTimePickerState = atom<boolean>({
    key: 'openTimePickerState',
    default: false,
})

// 학생 이름 상태를 가져오기 위한 선택자
export const openTimePickerSelector = selector({
    key: 'openTimePickerSelector',
    get: ({ get }) => {
      return get(openTimePickerState);
    },
});
