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
}

export default function SendPaymentAlarmManageLessonModal(props: SendPaymentAlarmManageLessonModalProps) {
  const { studentName, subject, backgroundColor, color, isBig } = props;
  const { unShowModal } = useModal();

  function handleSendAlarm() {
    // 서버에 알람 api 통신
    unShowModal;
  }

  return (
    <ToastModal>
      <h1>입금 알림 전송</h1>
      <StudentNameLabel
        studentName={studentName}
        subject={subject}
        backgroundColor={backgroundColor}
        color={color}
        isBig={isBig}
      />
      의 학부모님께 수업비 입금 요청에 대한 알림을 보낼까요?
      <RoundBottomMiniButton isGreen={false} onClick={unShowModal}>
        괜찮아요
      </RoundBottomMiniButton>
      <RoundBottomMiniButton isGreen={true} onClick={handleSendAlarm}>
        보낼래요
      </RoundBottomMiniButton>
    </ToastModal>
  );
}
