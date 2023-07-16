import { atom } from 'recoil';

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

interface Day {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export const dayState = atom<Day[]>({
  key: 'dayState',
  default: [],
});

export const focusDayState = atom({
  key: 'focusDayState',
  default: {dayOfWeek: ['일','월','화','수','목','금','토'][new Date().getDay()], startTime: '', endTime: ''},
})
export const openStartDetailState = atom<boolean>({
  key: 'openStartDetailState',
  default: false,
})

export const openFinishDetailState = atom<boolean>({
  key: 'openFinishDetailState',
  default: false,
})
