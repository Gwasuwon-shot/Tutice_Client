import React from "react";
import styled from "styled-components";
import BasicDoubleModal from "../common/BasicDoubleModal";

interface AccountDeleteModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountDeleteModal(props: AccountDeleteModalProps) {
  const { setOpenModal } = props;

  function handleBacktoMypage() {
    setOpenModal(false);
  }

  function handleDelteAccount() {
    //로그아웃로직
  }

  return (
    <>
      <BasicDoubleModal
        leftButtonName="취소"
        rightButtonName="확인"
        handleClickLeftButton={handleBacktoMypage}
        handleClickRightButton={handleDelteAccount}>
        <AskingSureToDelete>계정을 삭제하시겠어요?</AskingSureToDelete>
      </BasicDoubleModal>
    </>
  );
}

const AskingSureToDelete = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;
