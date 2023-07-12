export const PARENTS_CALENDAR = {
  code: 200,
  message: "스케줄 메인 뷰 조회 성공",
  data: {
    lessonList: [
      {
        lesson: {
          idx: 1,
          studentName: "박송현",
          subject: "수학",
        },
        scheduleList: [
          {
            idx: 1,
            date: "2023-07-04",
            startTime: "17:00",
            endTime: "19:00",
          },
          {
            idx: 2,
            date: "2023-07-07",
            startTime: "17:00",
            endTime: "19:00",
          },
          {
            idx: 3,
            date: "2023-07-11",
            startTime: "17:00",
            endTime: "19:00",
          },
        ],
      },
      {
        lesson: {
          idx: 2,
          studentName: "이유나",
          subject: "영어",
        },
        scheduleList: [
          {
            idx: 4,
            date: "2023-07-04",
            startTime: "15:00",
            endTime: "21:00",
          },
          {
            idx: 5,
            date: "2023-07-07",
            startTime: "19:00",
            endTime: "21:00",
          },
        ],
      },
    ],
  },
};
