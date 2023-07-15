import {atom, selector} from 'recoil';

export const openTimePicker = atom<boolean>({
    key: "openTimePicker",
    default: false,
});

export const openTimePickerSelector = selector({
    key: 'openTimePickerSelector',
    get: ({ get }) => {
      return get(openTimePicker);
    },
});