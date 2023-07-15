import React, { useState } from "react";
import { styled } from "styled-components";
import { TosNoneSignupIc } from "../../assets";
import { TosCheckedSignupIc } from "../../assets";

interface checkListProps {
  id: number;
  selected: boolean;
}

const checkList: checkListProps[] = [
  { id: 0, selected: false },
  { id: 1, selected: false },
  { id: 2, selected: false },
  { id: 3, selected: false },
  { id: 4, selected: false },
];
interface textListProps {
  optinal: string;
  boldText: string;
  linkText: string;
  lightText: string;
}

const textList: textListProps[] = [
  { optinal: "", boldText: "", linkText: "", lightText: "" },
  { optinal: "", boldText: "", linkText: "", lightText: "" },
  { optinal: "", boldText: "", linkText: "", lightText: "" },
  { optinal: "", boldText: "", linkText: "", lightText: "" },
  { optinal: "", boldText: "", linkText: "", lightText: "" },
];

export default function AgreeChecking() {
  const [checked, setChecked] = useState(false);
  const [checkAgrees, setCheckAgrees] = useState(checkList);

  function handleMoveToNotion(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.innerText) {
      case "서비스 이용 약관":
        window.open("https://www.naver.com", "_blank");
        break;
      case "개인정보 수집 및 이용":
        window.open("https://www.daum.net", "_blank");
        break;
      case "개인 정보 마케팅 활용":
        window.open("https://www.nate.com", "_blank");
        break;
    }
  }

  function handleButtonChecked() {
    setChecked(!checked);
  }

  return (
    <TosWrapper>
      <CheckWrapper>
        {checkAgrees.map(({ id, selected }) => (
          <ICWrapper key={id}>
            {selected ? (
              <TosNoneSignupIcon onClick={handleButtonChecked} />
            ) : (
              <TosCheckSignupIcon onClick={handleButtonChecked} />
            )}
          </ICWrapper>
        ))}
      </CheckWrapper>

      <TextWrapper>
        <IndividualTextWrppaer>
          <CheckText> 약관 전체 동의 </CheckText>
          <CheckSubText> 선택항목에 대한 동의 포함 </CheckSubText>
        </IndividualTextWrppaer>
        <Essential>(필수) </Essential>
        <CheckText> 만 14세 이상입니다 </CheckText>
        <Essential>(필수) </Essential>
        <HyperLink onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleMoveToNotion(e)}>
          <p>서비스 이용 약관</p>
        </HyperLink>
        <CheckText> 동의 </CheckText>
        <Essential>(필수) </Essential>
        <HyperLink onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleMoveToNotion(e)}>
          <p>개인정보 수집 및 이용</p>
        </HyperLink>
        <CheckText> 동의 </CheckText>
        <Optional>(선택) </Optional>

        <HyperLink onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleMoveToNotion(e)}>
          <p>개인 정보 마케팅 활용</p>
        </HyperLink>
        <CheckText> 동의 </CheckText>
      </TextWrapper>
    </TosWrapper>
  );
}

const TosWrapper = styled.div`
  display: flex;

  width: 29.2rem;
  padding-top: 1.6rem;
  padding-left: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 7rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  background-color: ${({ theme }) => theme.colors.grey0};
  border-radius: 8px;
`;

const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ICWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-bottom: 1.6rem;
`;

const TosNoneSignupIcon = styled(TosNoneSignupIc)`
  width: 2rem;
  height: 2rem;
`;

const TosCheckSignupIcon = styled(TosCheckedSignupIc)`
  width: 2rem;
  height: 2rem;
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
  margin-right: 0.2rem;

  color: ${({ theme }) => theme.colors.green5};

  ${({ theme }) => theme.fonts.body04};
`;

const Optional = styled.p`
  margin-right: 0.2rem;

  color: ${({ theme }) => theme.colors.grey300};

  ${({ theme }) => theme.fonts.body04};
`;

const HyperLink = styled.div`
  margin-right: 0.1rem;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.grey500};

  ${({ theme }) => theme.fonts.body05};

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndividualTextWrppaer = styled.div`
  display: flex;
`;
