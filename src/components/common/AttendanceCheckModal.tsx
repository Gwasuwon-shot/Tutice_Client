import styled from "styled-components";
import { ATTENDANCE_STATUS } from "../../core/common/attendanceStatus";
import AttendanceStatusButton from "./AttendanceStatusButton";
import SubjectLabel from "./SubjectLabel";
import ToastModal from "./ToastModal";

export default function AttendanceCheckModal() {
  return (
    <ToastModal>
      <ModalHeader>
        <CancelButton>취소</CancelButton>
        <AttendanceModalHeader>출결 체크</AttendanceModalHeader>
      </ModalHeader>
      <TextWrapper>
        <Main $isTitle={true}>박송현</Main>
        <Sub $isTitle={true}>학생</Sub>
        <SubjectLabel subject="수학" backgroundColor="red" color="blue" />
      </TextWrapper>
      <TextWrapper>
        <Main $isTitle={false}>3회차</Main>
        <Sub $isTitle={false}>수업 출결 체크를 진행해 주세요</Sub>
      </TextWrapper>
      <AttendanceStatusButton status={ATTENDANCE_STATUS.attend} />
      <AttdenceStatusButtonWrapper>
        <AttendanceStatusButton status={ATTENDANCE_STATUS.cancel} />
        <AttendanceStatusButton status={ATTENDANCE_STATUS.absent} />
      </AttdenceStatusButtonWrapper>
    </ToastModal>
  );
}

const CancelButton = styled.button`
  color: ${({ theme }) => theme.colors.grey400};
  ${({ theme }) => theme.fonts.body02};
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 17rem;
  margin-bottom: 3.4rem;
  margin-left: -10rem;
`;

const AttendanceModalHeader = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.grey900};
`;

const Main = styled.h1<{ $isTitle: boolean }>`
  margin-right: 0.5rem;
  ${({ theme, $isTitle }) => ($isTitle ? theme.fonts.title02 : theme.fonts.body01)}
`;

const Sub = styled.p<{ $isTitle: boolean }>`
  margin-right: 0.5rem;
  ${({ theme, $isTitle }) => ($isTitle ? theme.fonts.title03 : theme.fonts.body02)}
`;

const AttdenceStatusButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
