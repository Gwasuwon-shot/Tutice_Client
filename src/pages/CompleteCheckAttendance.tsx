import Lottie from "lottie-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { attendanceStatus } from "../atom/attendanceCheck/attendanceStatus";
import { upcomingClassData } from "../atom/attendanceCheck/upcomingClassData";
import SubjectLabel from "../components/common/SubjectLabel";
import check from "../core/checkAttendance/check.json";
import checkCircle from "../core/checkAttendance/check_circle.json";
import { STUDENT_COLOR } from "../core/common/studentColor";

export default function CompleteCheckAttendance() {
  const [classData, setclassData] = useRecoilState(upcomingClassData);
  const { teacherName, isTodaySchedule, todaySchedule } = classData;
  const { lesson, schedule } = todaySchedule;
  const { idx, studentName, subject } = lesson;
  const { count } = schedule;
  const { state } = useLocation();
  const { isLastCount, attendanceSchedule } = state;
  const { date, dayOfWeek } = attendanceSchedule;
  const [attendanceDate, setAttendanceDate] = useState(
    date?.split("-")[0] + "년 " + date?.split("-")[1] + "월 " + date?.split("-")[2] + "일 ",
  );
  const [attendanceData, setAttendanceData] = useRecoilState(attendanceStatus);

  return (
    <>
      {isLastCount ? (
        <Lottie loop={false} animationData={checkCircle} style={{ width: "50%", height: "50%" }} />
      ) : (
        <Lottie loop={false} animationData={check} style={{ width: "50%", height: "50%" }} />
      )}
      <p>
        {attendanceDate} ({dayOfWeek}) {count}회차 수업
      </p>
      <TextWrapper>
        <Main>{studentName}</Main>
        <Sub>학생</Sub>
        <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
      </TextWrapper>
      <article>
        수업이 <p>{attendanceData?.status}</p> 처리 되었습니다.
      </article>
    </>
  );
}

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.grey900};
`;

const Main = styled.h1`
  margin-right: 0.5rem;
  ${({ theme }) => theme.fonts.title02}
`;

const Sub = styled.p`
  margin-right: 0.5rem;
  ${({ theme }) => theme.fonts.title03}
`;
