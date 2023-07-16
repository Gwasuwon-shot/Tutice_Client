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

export const dayState = atom({
  key: 'dayState',
  default: [['일','월','화','수','목','금','토'][new Date().getDay()]],
});

export const timeState = atom({
  key: 'timeState',
  default: []
})

export const openStartDetailState = atom<boolean>({
  key: 'openStartDetailState',
  default: false,
})

export const openFinishDetailState = atom<boolean>({
  key: 'openFinishDetailState',
  default: false,
})