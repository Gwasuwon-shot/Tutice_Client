import { styled } from "styled-components";
import SnackBarPopup from "./SnackBarPopup";

export default function CancelLessonMaintenanceSnackBar() {
  return (
    <SnackBarPopup isCheck={false}>
      <Contents>수업의 회차 연장을 취소했습니다.</Contents>
    </SnackBarPopup>
  );
}

const Contents = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body05};
`;
