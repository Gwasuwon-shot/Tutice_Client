import React from "react";
import { TosNoneSignupIc } from "../../assets";
import { styled } from "styled-components";

export default function ToS() {
  return (
    <TosWrapper>
      <CheckWrapper>
        {/* <CheckBox type="checkbox" $TosNoneSignupIc={TosNoneSignupIc} /> */}
        <CheckBox type="checkbox" />
        <CheckText> 약관 전체 동의 </CheckText>
        <CheckSubText> 선택항목에 대한 동의 포함 </CheckSubText>
      </CheckWrapper>
      <Horizon />
      <CheckWrapper>
        <CheckBox type="checkbox" />
        <Essential>(필수) </Essential>
        <CheckText> 만 14세 이상입니다 </CheckText>
      </CheckWrapper>
      <CheckWrapper>
        <CheckBox type="checkbox" />
        <Essential>(필수) </Essential>
        <CheckText> 서비스 이용 약관 동의 </CheckText>
      </CheckWrapper>
      <CheckWrapper>
        <CheckBox type="checkbox" />
        <Essential>(필수) </Essential>
        <CheckText> 개인정보 수집 및 이용 동의 </CheckText>
      </CheckWrapper>
      <CheckWrapper>
        <CheckBox type="checkbox" />
        <Optional>(선택) </Optional>
        <CheckText> 개인 정보 마케팅 활용 동의 </CheckText>
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
  align-items: center;

  margin-bottom: 1.6rem;
`;

// const CheckBox = styled.input<{ $TosNoneSignupIc: string }>`
//   width: 2rem;
//   height: 2rem;

//   background-color: red;
//   background-image: url(${($TosNoneSignupIc) => $TosNoneSignupIc});
// `;
const CheckBox = styled.input`
  width: 2rem;
  height: 2rem;

  background-color: red;
  background-image: url("$TosNoneSignupIc}");

  &:checked {
    background-color: blue;
  }
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
  color: ${({ theme }) => theme.colors.green5};

  ${({ theme }) => theme.fonts.body04};
  margin-right: 0.1rem;
`;

const Optional = styled.p`
  color: ${({ theme }) => theme.colors.grey300};

  ${({ theme }) => theme.fonts.body04};
  margin-right: 0.1rem;
`;

const HyperLink = styled.link`
  color: ${({ theme }) => theme.colors.grey500};
`;
