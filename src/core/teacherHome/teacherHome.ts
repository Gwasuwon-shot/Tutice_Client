// (1) 등록한 클래스 자체가 없는 경우

// 배너
export const NO_REGISTERED_CLASS_BANNER = {
  code: 200,
  message: "선생님 메인 뷰 배너 조회 성공",
  data: {
    teacherName: "은수",
    isTodaySchedule: false,
    todaySchedule: null,
  },
};

// 메인 뷰
export const NO_REGISTERED_CLASS_MAIN = {
  code: 200,
  message: "선생님 메인 뷰 오늘의 수업/다가오는 수업 조회 성공",
  data: {
    isMissingAttendance: false,
    isTodaySchedule: true,
    latestScheduleDay: null,
    latestScheduleList: null,
  },
};

// (2) 오늘 수업이 없는 경우
export const NO_TODAY_CLASS_BANNER = {
  code: 200,
  message: "선생님 메인 뷰 배너 조회 성공",
  data: {
    teacherName: "은수",
    isTodaySchedule: false,
    todaySchedule: null,
  },
};

export const NO_TODAY_CLASS_MAIN = {
  code: 200,
  message: "선생님 메인 뷰 오늘의 수업/다가오는 수업 조회 성공",
  data: {
    isMissingAttendance: true,
    isTodaySchedule: true,
    latestScheduleDay: {
      date: "2023-07-12",
      dayOfWeek: "수",
    },
    latestScheduleList: [
      {
        lesson: {
          idx: 1,
          studentName: "박송현",
          subject: "수학",
        },
        schedule: {
          idx: 1,
          startTime: "16:00",
          endTime: "17:00",
          status: "미입력",
        },
      },
      {
        lesson: {
          idx: 2,
          studentName: "김유나",
          subject: "국어",
        },
        schedule: {
          idx: 3,
          startTime: "18:00",
          endTime: "20:00",
        },
      },
      {
        lesson: {
          idx: 3,
          studentName: "조판다",
          subject: "영어",
        },
        schedule: {
          idx: 1,
          startTime: "21:00",
          endTime: "22:00",
        },
      },
    ],
  },
};

// (3) 오늘 수업이 있고, 수업 시작전
export const YES_TODAY_CLASS_BEFORE_CLASS_BANNER = {
  code: 200,
  message: "선생님 메인 뷰 배너 조회 성공",
  data: {
    teacherName: "은수",
    isTodaySchedule: true,
    todaySchedule: {
      lesson: {
        idx: 1,
        studentName: "박송현",
        subject: "수학",
        count: "3",
      },
      timeStatus: 1,
      schedule: {
        idx: 1,
        status: "상태없음",
      },
    },
  },
};

export const YES_TODAY_CLASS_BEFORE_CLASS_MAIN = {
  code: 200,
  message: "선생님 메인 뷰 오늘의 수업/다가오는 수업 조회 성공",
  data: {
    isMissingAttendance: false,
    isMissingMaintenance: false,
    isTodaySchedule: true,
    latestScheduleDay: {
      date: "2023-07-12",
      dayOfWeek: "수",
    },
    latestScheduleList: [
      {
        lesson: {
          idx: 1,
          studentName: "박송현",
          subject: "수학",
        },
        schedule: {
          idx: 1,
          startTime: "16:00",
          endTime: "17:00",
        },
      },
      {
        lesson: {
          idx: 2,
          studentName: "김유나",
          subject: "국어",
        },
        schedule: {
          idx: 3,
          startTime: "18:00",
          endTime: "20:00",
        },
      },
      {
        lesson: {
          idx: 3,
          studentName: "조판다",
          subject: "영어",
        },
        schedule: {
          idx: 1,
          startTime: "21:00",
          endTime: "22:00",
        },
      },
    ],
  },
};
// (4) 오늘 수업이 있고 수업진행중
export const YES_TODAY_CLASS_ING_CLASS_BANNER = {
  code: 200,
  message: "선생님 메인 뷰 배너 조회 성공",
  data: {
    teacherName: "은수",
    isTodaySchedule: true,
    todaySchedule: {
      lesson: {
        idx: "1",
        studentName: "박송현",
        subject: "수학",
      },
      timeStatus: 1,
      schedule: {
        idx: "1",
        status: "상태없음",
        count: "3",
        isLastCount: false,
      },
    },
  },
};

export const YES_TODAY_CLASS_ING_CLASS_MAIN = {
  code: 200,
  message: "선생님 메인 뷰 오늘의 수업/다가오는 수업 조회 성공",
  data: {
    isMissingAttendance: true,
    isMissingMaintenance: true,
    isTodaySchedule: true,
    latestScheduleDay: {
      date: "2023-07-12",
      dayOfWeek: "수",
    },
    latestScheduleList: [
      {
        lesson: {
          idx: 1,
          studentName: "박송현",
          subject: "수학",
        },
        schedule: {
          idx: 1,
          startTime: "16:00",
          endTime: "17:00",
        },
      },
      {
        lesson: {
          idx: 2,
          studentName: "김유나",
          subject: "국어",
        },
        schedule: {
          idx: 3,
          startTime: "18:00",
          endTime: "20:00",
        },
      },
      {
        lesson: {
          idx: 3,
          studentName: "조판다",
          subject: "영어",
        },
        schedule: {
          idx: 1,
          startTime: "21:00",
          endTime: "22:00",
        },
      },
      {
        lesson: {
          idx: 4,
          studentName: "조판다",
          subject: "영어",
        },
        schedule: {
          idx: 1,
          startTime: "21:00",
          endTime: "22:00",
        },
      },
    ],
  },
};

// (5) 오늘 수업이 있고 수업종료(다음수업은 시작전)
export const YES_TODAY_CLASS_END_CLASS_BANNER = {
  code: 200,
  message: "선생님 메인 뷰 배너 조회 성공",
  data: {
    teacherName: "은수",
    isTodaySchedule: true,
    todaySchedule: {
      lesson: {
        idx: 1,
        studentName: "박송현",
        subject: "수학",
        count: "3",
      },
      timeStatus: 3,
      schedule: {
        idx: 1,
        status: "상태없음",
      },
    },
  },
};

export const YES_TODAY_CLASS_END_CLASS_MAIN = {
  code: 200,
  message: "선생님 메인 뷰 오늘의 수업/다가오는 수업 조회 성공",
  data: {
    isMissingAttendance: false,
    isMissingMaintenance: false,
    isTodaySchedule: true,
    latestScheduleDay: {
      date: "2023-07-12",
      dayOfWeek: "수",
    },
    latestScheduleList: [
      {
        lesson: {
          idx: 1,
          studentName: "박송현",
          subject: "수학",
        },
        schedule: {
          idx: 1,
          startTime: "16:00",
          endTime: "17:00",
        },
      },
      {
        lesson: {
          idx: 2,
          studentName: "김유나",
          subject: "국어",
        },
        schedule: {
          idx: 3,
          startTime: "18:00",
          endTime: "20:00",
        },
      },
      {
        lesson: {
          idx: 3,
          studentName: "조판다",
          subject: "영어",
        },
        schedule: {
          idx: 1,
          startTime: "21:00",
          endTime: "22:00",
        },
      },
    ],
  },
};

// (6) 오늘 수업 있고, 오늘의 모든 수업이 종료시간 지남 +  출결상태가 정해짐
export const YES_TODAY_CLASS_ALLEND_CLASS_BANNER = {
  code: 200,
  message: "선생님 메인 뷰 배너 조회 성공",
  data: {
    teacherName: "은수",
    isTodaySchedule: true,
    todaySchedule: null,
  },
};

export const YES_TODAY_CLASS_ALLEND_CLASS_MAIN = {
  code: 200,
  message: "선생님 메인 뷰 오늘의 수업/다가오는 수업 조회 성공",
  data: {
    isMissingAttendance: false,
    isMissingMaintenance: false,
    isTodaySchedule: true,
    latestScheduleDay: {
      date: "2023-07-12",
      dayOfWeek: "수",
    },
    latestScheduleList: [
      {
        lesson: {
          idx: 1,
          studentName: "박송현",
          subject: "수학",
        },
        schedule: {
          idx: 1,
          startTime: "16:00",
          endTime: "17:00",
        },
      },
      {
        lesson: {
          idx: 2,
          studentName: "김유나",
          subject: "국어",
        },
        schedule: {
          idx: 3,
          startTime: "18:00",
          endTime: "20:00",
        },
      },
      {
        lesson: {
          idx: 3,
          studentName: "조판다",
          subject: "영어",
        },
        schedule: {
          idx: 1,
          startTime: "21:00",
          endTime: "22:00",
        },
      },
    ],
  },
};
