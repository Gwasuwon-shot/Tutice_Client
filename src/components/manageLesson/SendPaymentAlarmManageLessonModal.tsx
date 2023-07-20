import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { requestPaymentRecordNotification } from "../../api/requestPaymentRecordNotification";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";
import useModal from "../../hooks/useModal";
import RoundBottomMiniButton from "../common/RoundBottomMiniButton";
import StudentNameLabel from "../common/StudentNameLabel";
import ToastModal from "../common/ToastModal";

interface SendPaymentAlarmManageLessonModalProps {
  studentName: string;
  subject: string;
  backgroundColor: string;
  color: string;
  isBig: boolean;
  lessonIdx: number;
}

export default function SendPaymentAlarmManageLessonModal(props: SendPaymentAlarmManageLessonModalProps) {
  const { studentName, subject, backgroundColor, color, isBig, lessonIdx } = props;
  const { unShowModal } = useModal();
  const [snackBarOpen, setSnackBarOpen] = useRecoilState(isSnackBarOpen);

  const { mutate: sendPaymentAlarm } = useMutation(requestPaymentRecordNotification, {
    onSuccess: () => {
      setSnackBarOpen(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function handleSendAlarm() {
    // 서버에 알람 api 통신
    sendPaymentAlarm(lessonIdx);
    unShowModal;
  }

  return (
    <ModalWrapper>
      <ToastModal>
        <ModalTitle>입금 알림 전송</ModalTitle>
        <TextWrapper>
          <StudentNameLabel
            studentName={studentName}
            subject={subject}
            backgroundColor={backgroundColor}
            color={color}
            isBig={isBig}
          />
          &nbsp;의 학부모님께
        </TextWrapper>
        <TextWrapper>수업비 입금 요청에 대한 알림을 보낼까요?</TextWrapper>
        <ButtonWrapper>
          <RoundBottomMiniButton isGreen={false} onClick={unShowModal}>
            괜찮아요
          </RoundBottomMiniButton>
          <RoundBottomMiniButton isGreen={true} onClick={handleSendAlarm}>
            보낼래요
          </RoundBottomMiniButton>
        </ButtonWrapper>
      </ToastModal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;

  margin: -3.7rem 0 0 -1.5rem;
`;

const ModalTitle = styled.h1`
  margin: 1rem 0 1.6rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title02};
`;

const TextWrapper = styled.h2`
  display: flex;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 29.5rem;
  margin-top: 4.2rem;
`;
