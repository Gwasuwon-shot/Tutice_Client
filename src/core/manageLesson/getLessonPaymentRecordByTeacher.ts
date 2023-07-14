export const GET_LESSON_PAYMENT_RECORD_BY_TEACHER = {
  code: 200,
  message: "입금 내역 가져오기 성공",
  data: {
    lesson: {
      idx: 34,
      studentName: "백송현",
      subject: "기하와 벡터",
      cycle: 5,
    },
    todayDate: "2023-09-23",
    paymentRecord: {
      paymentRecordList: [
        {
          idx: 34,
          date: "2023-09-23",
          amount: 300000,
        },
        {
          idx: 54,
          date: "2023-08-23",
          amount: 300000,
        },
        {
          idx: 37,
          date: "2023-07-23",
          amount: 300000,
        },
      ],
    },
  },
};
