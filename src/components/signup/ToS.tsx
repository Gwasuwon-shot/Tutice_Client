import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { TosNoneSignupIc } from "../../assets";
import { TosCheckedSignupIc } from "../../assets";

export default function ToS() {
  const [checked, setChecked] = useState(false);
  function handleMoveToUseService() {
    window.open("https://www.naver.com", "_blank");
  }

  function isChecked() {
    console.log("Checked");
    setChecked(!checked);
  }

  return (
    <TosWrapper>
      <CheckWrapper>
        {checked ? <TosNoneSignupIcon onClick={isChecked} /> : <TosCheckSignupIcon onClick={isChecked} />}
        <CheckText> 약관 전체 동의 </CheckText>
        <CheckSubText> 선택항목에 대한 동의 포함 </CheckSubText>
      </CheckWrapper>
      <Horizon />
      <CheckWrapper>
        <TosNoneSignupIcon />
        <Essential>(필수) </Essential>
        <CheckText> 만 14세 이상입니다 </CheckText>
      </CheckWrapper>
      <CheckWrapper>
        <TosNoneSignupIcon />
        <Essential>(필수) </Essential>
        <HyperLink onClick={handleMoveToUseService}>
          <p>서비스 이용 약관</p>
        </HyperLink>
        <CheckText> 동의 </CheckText>
      </CheckWrapper>
      <CheckWrapper>
        <TosNoneSignupIcon />
        <Essential>(필수) </Essential>
        <HyperLink>
          <p>개인정보 수집 및 이용</p>
        </HyperLink>
        <CheckText> 동의 </CheckText>
      </CheckWrapper>
      <CheckWrapper>
        <TosNoneSignupIcon />
        <Optional>(선택) </Optional>

        <HyperLink>
          <p>개인 정보 마케팅 활용</p>
        </HyperLink>
        <CheckText> 동의 </CheckText>
      </CheckWrapper>
    </TosWrapper>
  );
}

const TosWrapper = styled.div`
  width: 29.2rem;
  padding-top: 1.6rem;
  padding-left: 1.4rem;
  margin-top: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  background-color: ${({ theme }) => theme.colors.grey0};
  border-radius: 8px;
`;
const CheckWrapper = styled.div`
  display: flex;
  align-items: bottom;

  margin-bottom: 1.6rem;
`;

const TosNoneSignupIcon = styled(TosNoneSignupIc)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const TosCheckSignupIcon = styled(TosCheckedSignupIc)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const CheckText = styled.p`
  height: fit-content;
  margin-right: 1rem;

  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.body04};
`;

const CheckSubText = styled.p`
  color: ${({ theme }) => theme.colors.grey300};
  ${({ theme }) => theme.fonts.body06};
`;

const Horizon = styled.div`
  width: 26.4rem;
  margin-top: -0.4rem;
  margin-bottom: 1.2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey100};
`;

const Essential = styled.p`
  margin-right: 0.1rem;

  color: ${({ theme }) => theme.colors.green5};

  ${({ theme }) => theme.fonts.body04};
`;

const Optional = styled.p`
  margin-right: 0.1rem;

  color: ${({ theme }) => theme.colors.grey300};

  ${({ theme }) => theme.fonts.body04};
`;

const HyperLink = styled.p`
  margin-right: 1px;

  color: ${({ theme }) => theme.colors.grey500};

  ${({ theme }) => theme.fonts.body05};

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
`;
