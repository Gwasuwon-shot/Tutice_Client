import { styled } from "styled-components";
import SnackBarPopup from "./SnackBarPopup";

export default function SuccessSendingAlarmSnackBar() {
  return (
    <SnackBarPopup isCheck={false}>
      <Contents>알림 전송을 완료했어요!</Contents>
    </SnackBarPopup>
  );
}

const Contents = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body05};
`;
