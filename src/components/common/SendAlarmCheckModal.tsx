import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { requestAttendanceNotification } from "../../api/requestAttendanceNotification";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useModal from "../../hooks/useModal";
import RoundBottomMiniButton from "./RoundBottomMiniButton";
import SubjectLabel from "./SubjectLabel";
import ToastModal from "./ToastModal";

interface SendAlarmCheckModalProps {
  idx: number;
  studentName: string;
  subject: string;
  count: number;
  scheduleIdx: number;
}

export default function SendAlarmCheckModal(props: SendAlarmCheckModalProps) {
  const { idx, studentName, subject, count, scheduleIdx } = props;
  const [isClassExist, setIsClassExist] = useState(true);
  const { modalRef, closeModal, unShowModal, showModal } = useModal();
  const navigate = useNavigate();

  function handleMoveToHomeWithoutAlarm() {
    unShowModal();
    navigate("/");
  }

  function handleSendAlarm() {
    //  쿼리 키로 불러오기
  }

  const { data: sendAlarm } = useQuery(
    ["requestAttendanceNotification"],
    () => requestAttendanceNotification(scheduleIdx),
    {
      onSuccess: () => {
        unShowModal();
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  return (
    <ToastModal>
      <Title>출결알림 전송</Title>
      <ContentWrapper>
        <StudentNameWrapper>{studentName}</StudentNameWrapper> <Content>학생</Content>
        <SubjectLabel backgroundColor={STUDENT_COLOR[idx % 11]} color="#757A80" subject={subject} />
        <Content>의 학부모님께 </Content>
      </ContentWrapper>
      <ContentWrapper>
        <Content>{count}회차 수업 출결 알림을 보낼까요?</Content>
      </ContentWrapper>
      <ButtonWrapper>
        <RoundBottomMiniButton isGreen={false} onClick={handleMoveToHomeWithoutAlarm}>
          괜찮아요
        </RoundBottomMiniButton>
        <RoundBottomMiniButton isGreen={true} onClick={handleSendAlarm}>
          보낼래요
        </RoundBottomMiniButton>
      </ButtonWrapper>
    </ToastModal>
  );
}

const Title = styled.header`
  margin-top: 1.5rem;
  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title02};
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 29rem;
  margin-top: 3.2rem;
`;

const StudentNameWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body01};
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const ContentWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 18.7rem;
  margin-bottom: 1rem;
`;
