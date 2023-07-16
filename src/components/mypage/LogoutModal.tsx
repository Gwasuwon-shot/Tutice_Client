import React from "react";
import styled from "styled-components";
import BasicDoubleModal from "../common/BasicDoubleModal";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../../atom/common/isModalOpen";

export default function LogoutModal(props) {
  const { setOpenModal } = props;
  function handleBacktoMypage() {
    setOpenModal(false);
  }

  function handleLogout() {
    //로그아웃로직
  }

  return (
    <>
      <BasicDoubleModal
        leftButtonName="취소"
        rightButtonName="확인"
        handleClickLeftButton={handleBacktoMypage}
        handleClickRightButton={handleLogout}>
        <AskingSureToLogout>로그아웃하시겠어요?</AskingSureToLogout>
      </BasicDoubleModal>
    </>
  );
}

const AskingSureToLogout = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;
