export const GET_LESSON_PAYMENT_RECORD_BY_TEACHER = {
  code: 200,
  message: "입금 내역 가져오기 성공",
  data: {
    lesson: {
      idx: 34,
      studentName: "백송현",
      subject: "기하와 벡터",
    },
    todayDate: "2023-09-23",
    paymentRecordList: [
      {
        idx: 34,
        date: null,
        amount: 300000,
        status: false,
      },
      {
        idx: 54,
        date: "2023-08-23",
        amount: 300000,
        status: true,
      },
      {
        idx: 37,
        date: "2023-07-23",
        amount: 300000,
        status: true,
      },
    ],
  },
};
