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
          앞선 회차의 출결 체크를
          <br />
          완료해주세요
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
