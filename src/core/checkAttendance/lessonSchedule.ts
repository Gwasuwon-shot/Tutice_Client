export const LESSON_SCHEDULE = {
  code: 200,
  message: "수업 내역(출결 상황) 가져오기 성공",
  data: {
    lesson: {
      idx: 34,
      studentName: "수화",
      subject: "수영",
      count: 10,
      nowCount: 7,
      percent: 45,
    },
    scheduleList: [
      {
        idx: 45,
        date: "2023-12-20",
        status: "출석",
        startTime: "13:22",
        endTime: "15:22",
      },
      {
        idx: 46,
        date: "2023-11-20",
        status: "결석",
        startTime: "13:22",
        endTime: "15:22",
      },
      {
        idx: 47,
        date: "2023-10-20",
        status: "취소",
        startTime: "13:22",
        endTime: "15:22",
      },
      {
        idx: 48,
        date: "2023-09-20",
        status: "상태없음",
        startTime: "13:22",
        endTime: "15:22",
      },
    ],
  },
};
