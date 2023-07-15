import styled from "styled-components";
import SnackBarPopup from "../common/SnackBarPopup";

interface HarvestFruiteSnackBarProp {
  count: number;
}

export default function HarvestFruiteSnackBar(props: HarvestFruiteSnackBarProp) {
  const { count } = props;

  return (
    <SnackBarPopup isCheck={false}>
      <Contents>{count}번째 결실을 수확했습니다!</Contents>
    </SnackBarPopup>
  );
}

const Contents = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body05};
`;
