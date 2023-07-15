import { atom, useRecoilState } from 'recoil';

const studentName = atom({
    key: 'studentName',
    default: '',
})

const subjectName = atom({
    key: 'subjectName',
    default: '',
})