import { atom, selector } from 'recoil';

// 모달 오픈여부 관리
export const openTimePickerState = atom<boolean>({
    key: 'openTimePickerState',
    default: false,
})

export const openDatePickerState = atom<boolean>({
    key: 'openDatePickerState',
    default: false,
})

export const openStartDetailState = atom<boolean>({
  key: 'openStartDetailState',
  default: false,
})

export const openFinishDetailState = atom<boolean>({
  key: 'openFinishDetailState',
  default: false,
})


// 회차 관리
export const cycleNumberState = atom<number>({
  key: 'cycleNumberState',
  default: -1,
})

// 첫 수업일 관리
export const dateState = atom({
  key: 'dateState',
  default: {year : new Date().getFullYear(), month : new Date().getMonth()+1, date: new Date().getDate()}
});

interface Day {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

// 확정 날짜들 관리
export const dayState = atom<Day[]>({
  key: 'dayState',
  default: [],
});

// 현재 선택중인 날짜 관리
export const focusDayState = atom({
  key: 'focusDayState',
  default: {dayOfWeek: ['일','월','화','수','목','금','토'][new Date().getDay()], startTime: '', endTime: ''},
})

// 확정날짜 '저장' 시, 선택한 첫 수업일의 요일을 푸터에서 확인하기 위한 atom

export const firstLessonDay = atom({
  key: 'firstLessonDay',
  default: {1: '월', 2: '화', 3: '수', 4: '목', 5: '금', 6: '토', 0: '일'}[new Date().getDay()],
})