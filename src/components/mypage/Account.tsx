import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../../atom/common/isModalOpen";
import LogoutModal from "./LogoutModal";
import AccountDeleteModal from "./AccountDeleteModal";

export default function Account() {
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [isCheckingLogout, setIsCheckingLogout] = useState(false);
  const [isCheckingDeleteAccount, setIsCheckingDeleteAccount] = useState(false);

  function handleLogout() {
    setOpenModal(true);
    setIsCheckingLogout(true);
  }

  function handleDeleteAccount() {
    setOpenModal(true);
    setIsCheckingDeleteAccount(true);
  }

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleText>계정</TitleText>
        </TitleWrapper>
        <ContentWrapper>
          <ContentText onClick={handleLogout}>로그아웃</ContentText>
          {openModal && isCheckingDeleteAccount && (
            <LogoutModalSection $isCheckingLogout={isCheckingLogout}>
              <LogoutModal setOpenModal={setOpenModal} />
            </LogoutModalSection>
          )}
          <ContentText onClick={handleDeleteAccount}>삭제</ContentText>
          {openModal && isCheckingDeleteAccount && (
            <DeleteAccountModalSection $isCheckingDeleteAccount={isCheckingDeleteAccount}>
              <AccountDeleteModal setOpenModal={setOpenModal} />
            </DeleteAccountModalSection>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  width: 32rem;
  height: 15.8rem;
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 2.6rem;

  background-color: ${({ theme }) => theme.colors.grey20};
`;

const TitleText = styled.h1`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};

  margin-left: 1.4rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2.8rem;

  flex-direction: column;

  height: 13.2rem;
  margin-left: 1.4rem;
`;

const ContentText = styled.h2`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
  cursor: pointer;
`;

const LogoutModalSection = styled.section<{ $isCheckingLogout: boolean }>`
  position: absolute;

  margin: -38rem -4rem 0 -1.5em;
`;

const DeleteAccountModalSection = styled.section<{ $isCheckingDeleteAccount: boolean }>`
  position: absolute;

  margin: -38rem -4rem 0 -1.5em;
`;
