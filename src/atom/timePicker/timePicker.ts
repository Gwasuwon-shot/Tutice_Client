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

export const dateState = atom({
  key: 'dateState',
  default: {year : new Date().getFullYear(), month : new Date().getMonth()+1, date: new Date().getDate()}
});


