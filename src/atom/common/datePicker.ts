import { atom, selector } from 'recoil';

export const studentNameState = atom<string>({
    key: 'studentNameState',
    default: '',
})

export const subjectNameState = atom<string>({
    key: 'subjectNameState',
    default: '',
})

// 학생 이름 상태를 가져오기 위한 선택자
export const studentNameSelector = selector({
    key: 'studentNameSelector',
    get: ({ get }) => {
      return get(studentNameState);
    },
});
  
// 과목 이름 상태를 가져오기 위한 선택자
export const subjectNameSelector = selector({
    key: 'subjectNameSelector',
    get: ({ get }) => {
      return get(subjectNameState);
    },
});
  

