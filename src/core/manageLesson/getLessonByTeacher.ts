export const GET_LESSON_BY_TEACHER = {
  code: 200,
  message: "선생님 수업 관리 뷰 조회 성공",
  data: {
    lessonList: [
      {
        idx: 1,
        studentName: "박송현",
        subject: "수학",
        percent: 40,
        dayOfWeekList: ["월", "수", "금"],
      },
      {
        idx: 2,
        studentName: "김유나",
        subject: "논술",
        percent: 60,
        dayOfWeekList: ["화", "목"],
      },
      {
        idx: 3,
        studentName: "박송현",
        subject: "국어",
        percent: 20,
        dayOfWeekList: ["월", "금"],
      },
    ],
  },
};
