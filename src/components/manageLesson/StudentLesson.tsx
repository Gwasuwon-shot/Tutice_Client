import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";
import SuccessSendingAlarmSnackBar from "../common/SuccessSendingAlarmSnackBar";
import AttendanceList from "./AttendanceInforms";
import TreeLevel from "./TreeLevel";

export default function StudentLesson() {
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);

  return (
    <>
      {snackBarOpen && (
        <SnackBarWrapper>
          <SuccessSendingAlarmSnackBar />
        </SnackBarWrapper>
      )}
      <TreeLevel />
      <AttendanceList />
    </>
  );
}

const SnackBarWrapper = styled.div`
  position: fixed;
  margin-left: -1.4rem;
  bottom: 2%;
`;
