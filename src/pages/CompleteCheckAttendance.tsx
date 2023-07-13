import Lottie from "lottie-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { attendanceStatus } from "../atom/attendanceCheck/attendanceStatus";
import { upcomingClassData } from "../atom/attendanceCheck/upcomingClassData";
import RoundBottomButton from "../components/common/RoundBottomButton";
import RoundBottomMiniButton from "../components/common/RoundBottomMiniButton";
import SubjectLabel from "../components/common/SubjectLabel";
import check from "../core/checkAttendance/check.json";
import checkCircle from "../core/checkAttendance/check_circle.json";
import { ATTENDANCE_STATUS } from "../core/common/attendanceStatus";
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
  const navigate = useNavigate();

  function checkIsAttendance() {
    return attendanceData?.status === ATTENDANCE_STATUS.attend;
  }

  function handleMoveToHome() {
    navigate("/");
  }

  function handleSendAlarm() {
    // 서버에 포스트 보내기 attendanceData?.idx
    // 포스트 성공하면 navigate("/");
  }

  return (
    <CompleteCheckAttendanceWrapper>
      <LottieImage>
        {isLastCount ? (
          <Lottie loop={false} animationData={checkCircle} style={{ width: "50%", height: "50%" }} />
        ) : (
          <Lottie loop={false} animationData={check} style={{ width: "50%", height: "50%" }} />
        )}
      </LottieImage>
      <ClassDate>
        {attendanceDate} ({dayOfWeek}) {count}회차 수업
      </ClassDate>
      <TextWrapper>
        <Main>{studentName}</Main>
        <Sub>학생</Sub>
        <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
      </TextWrapper>
      <StatusMentionWrapper>
        <StatusMention>수업이</StatusMention> <Status>{attendanceData?.status}</Status>{" "}
        <StatusMention>처리 되었습니다.</StatusMention>
      </StatusMentionWrapper>
      {checkIsAttendance() ? (
        <ButtonWrapper>
          <RoundBottomMiniButton isGreen={false} onClick={handleMoveToHome}>
            확인
          </RoundBottomMiniButton>
          <RoundBottomMiniButton isGreen={true} onClick={handleSendAlarm}>
            학부모 알림 전송
          </RoundBottomMiniButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper onClick={handleMoveToHome}>
          <RoundBottomButton buttonMessage="확인" />
        </ButtonWrapper>
      )}
    </CompleteCheckAttendanceWrapper>
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

const ClassDate = styled.p`
  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body07};
`;

const Status = styled.p`
  margin: 0 0.5rem;

  color: ${({ theme }) => theme.colors.green5};
  ${({ theme }) => theme.fonts.title02};
`;

const StatusMention = styled.p`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title03};
`;

const StatusMentionWrapper = styled.article`
  display: flex;
`;

const CompleteCheckAttendanceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LottieImage = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 8.19rem;
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 2.2rem;

  width: 29.5rem;
`;
