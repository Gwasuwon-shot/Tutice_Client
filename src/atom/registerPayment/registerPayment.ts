import { atom } from 'recoil';

export const openPaymentPicker = atom<boolean>({
    key: 'openPaymentPicker',
    default: false,
})

export const paymentDateState = atom({
    key: 'dateState',
    default: {year : new Date().getFullYear(), month : new Date().getMonth()+1, date: new Date().getDate()}
});
  
interface Day {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
}
  
// 확정 날짜들 관리
export const paymentDayState = atom<Day[]>({
    key: 'dayState',
    default: [],
});
  
// 현재 선택중인 날짜 관리
export const paymentFocusDayState = atom({
    key: 'focusDayState',
    default: {dayOfWeek: ['일','월','화','수','목','금','토'][new Date().getDay()], startTime: '', endTime: ''},
})