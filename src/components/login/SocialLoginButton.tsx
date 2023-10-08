// RoundButton 먼저 고치쇼

import React from "react";
import { styled } from "styled-components";
import { loginKakaoIc, loginNaverIc } from "../../assets";
import { ColorsTypes, FontsTypes } from "../../style/theme";

interface SocialLoginButtonProps {
  children: React.ReactNode;
  $bgcolor: string;
  onclick: () => void;
}

export default function SocialLoginButton(props: SocialLoginButtonProps) {
  const { children, $bgcolor, onclick } = props;
  return (
    <>
      <ButtonWrapper $bgcolor={$bgcolor} onClick={onclick}>
        {$bgcolor === "#FFE500" ? <KaKaoIcon /> : <NaverIcon />}
        {children}
      </ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.button<{ $bgcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 5rem;

  background-color: ${({ $bgcolor }) => $bgcolor};

  font-style: ${({ theme }) => theme.fonts.title03};

  color: ${({ theme, $bgcolor }) => ($bgcolor === "#FFE500" ? theme.colors.grey900 : theme.colors.grey0)};

  border-radius: 0.8rem;

  &:active {
    background-color: ${({ theme }) => theme.colors.green7};
    color: ${({ theme }) => theme.colors.green4};
  }
`;

const KaKaoIcon = styled(loginKakaoIc)`
  width: 2rem;
  height: 2rem;
  margin-right: 0.4rem;
`;

const NaverIcon = styled(loginNaverIc)`
  width: 2rem;
  height: 2rem;
  margin-right: 0.4rem;
`;
