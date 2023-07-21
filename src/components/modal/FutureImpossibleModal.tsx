import styled from "styled-components";
import BasicSingleModal from "../common/BasicSingleModal";

interface FutureImpossibleModalProp {
  handleCloseModal(): void;
}

export default function FutureImpossibleModal(props: FutureImpossibleModalProp) {
  const { handleCloseModal } = props;

  return (
    <ModalWrapper>
      <BasicSingleModal buttonName="확인" handleClickSingleButton={handleCloseModal}>
        <CancleImpossibleTitle>
          미래 출결 상태를
          <br />
          미리 변경할 수 없습니다
        </CancleImpossibleTitle>
      </BasicSingleModal>
    </ModalWrapper>
  );
}

const CancleImpossibleTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;

  ${({ theme }) => theme.fonts.body02};
`;

const ModalWrapper = styled.aside`
  position: fixed;
  z-index: 7;
`;
