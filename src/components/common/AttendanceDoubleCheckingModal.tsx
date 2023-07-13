import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { attendanceStatus } from "../../atom/attendanceCheck/attendanceStatus";
import { ATTENDANCE_CHECK_RESPONSE } from "../../core/checkAttendance/attendaceCheckResponse";
import BasicDoubleModal from "./BasicDoubleModal";

interface AttendanceDoubleCheckingModalProps {
  setIsCheckingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AttendanceDoubleCheckingModal(props: AttendanceDoubleCheckingModalProps) {
  const { setIsCheckingModalOpen } = props;
  const navigate = useNavigate();
  const [attendanceData, setAttendanceData] = useRecoilState(attendanceStatus);

  function handleBackToCheckAttendance() {
    setIsCheckingModalOpen(false);
  }

  function handleMoveToSuccessCheckingAttendance() {
    // 서버에 출결 정보 post 하는 로직 추가
    navigate("/complete-check-attendance", { state: ATTENDANCE_CHECK_RESPONSE });
  }

  function checkStatusText() {
    if (attendanceData?.status === "취소") {
      return attendanceData?.status + "로";
    } else {
      return attendanceData?.status + "으로";
    }
  }

  return (
    <BasicDoubleModal
      leftButtonName="취소"
      rightButtonName="확인"
      handleClickLeftButton={handleBackToCheckAttendance}
      handleClickRightButton={handleMoveToSuccessCheckingAttendance}>
      <AskingSureToCheckAttendance>{checkStatusText()} 체크하시겠어요?</AskingSureToCheckAttendance>
    </BasicDoubleModal>
  );
}

const AskingSureToCheckAttendance = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;
