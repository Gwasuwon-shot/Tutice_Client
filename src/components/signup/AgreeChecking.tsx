import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { TosNoneSignupIc } from "../../assets";
import { TosCheckedSignupIc } from "../../assets";
import { useSetRecoilState } from "recoil";
import { newUserData } from "../../atom/signup/signup";

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
  optional: string;
  boldText: string;
  linkText: string;
  lightText: string;
}

const textList: textListProps[] = [
  { optional: "", boldText: "약관 전체 동의", linkText: "", lightText: "선택항목에 대한 동의 포함" },
  { optional: "(필수)", boldText: "만 14세 이상입니다.", linkText: "", lightText: "" },
  { optional: "(필수)", boldText: "동의", linkText: "서비스 이용 약관", lightText: "" },
  { optional: "(필수)", boldText: "동의", linkText: "개인정보 수집 및 이용", lightText: "" },
  { optional: "(선택)", boldText: "동의", linkText: "개인정보 마케팅 활용", lightText: "" },
];

export default function AgreeChecking() {
  const setNewUser = useSetRecoilState(newUserData);
  const [checkAgrees, setCheckAgrees] = useState(checkList);
  const [textAgrees, setTextAgrees] = useState(textList);
  const [allClicked, setAllClicked] = useState(false);
  const [completeCheck, setCompleteCheck] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const [isFirst, setIsFirst] = useState(false);

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

  function handleButtonChecked(id: number) {
    setCheckAgrees(
      checkAgrees.map((checkAgree) =>
        checkAgree.id === id ? { ...checkAgree, selected: !checkAgree.selected } : checkAgree,
      ),
    );

    if (allCheckedIndex(id)) {
      checkAgrees[id].selected
        ? setCheckAgrees(
            checkAgrees.map((checkAgree) =>
              checkAgree.id === id ? { ...checkAgree, selected: false } : { ...checkAgree, selected: false },
            ),
          )
        : setCheckAgrees(
            checkAgrees.map((checkAgree) =>
              allClicked === true ? { ...checkAgree, selected: true } : { ...checkAgree, selected: true },
            ),
          );
    }
  }

  useEffect(() => {
    checkAgrees.forEach((checkAgree) => {
      !allCheckedIndex(checkAgree.id) && checkAgree.selected
        ? setCheckedCount((prev) => prev + 1)
        : setCheckedCount((prev) => prev - 1);
    });

    let count = 0;
    checkAgrees.forEach((checkAgree) => {
      if (!allCheckedIndex(checkAgree.id) && checkAgree.selected) {
        count += 1;
      }
    });
    setCheckedCount(count);

    let essentialCheck = 0;
    checkAgrees.forEach((checkAgree) => {
      if (!allCheckedIndex(checkAgree.id) && !optionalIndex(checkAgree.id) && checkAgree.selected) {
        essentialCheck += 1;
      }
    });
    setCompleteCheck(checkEssentialAgreeDone(essentialCheck));

    setNewUser((prev) => ({
      ...prev,
      isMarketing: `${checkAgrees[4].selected}`,
    }));
  }, [checkAgrees]);

  useEffect(() => {
    isAllChecked() ? changeTotalAgree(true) : changeTotalAgree(false);
  }, [isAllChecked()]);

  function allCheckedIndex(id: number) {
    return id === 0;
  }

  function optionalIndex(id: number) {
    return id === 4;
  }

  function isAllChecked() {
    return checkedCount === 4;
  }

  function changeTotalAgree(bool: boolean) {
    const tempCheckAgrees = checkAgrees;
    tempCheckAgrees[0].selected = bool;
    setCheckAgrees([...tempCheckAgrees]);
  }

  function checkEssentialAgreeDone(essentialCheck: number) {
    return essentialCheck === 2;
  }

  return (
    <TosWrapper>
      <CheckWrapper>
        {checkAgrees.map(({ id, selected }) => (
          <ICWrapper key={id}>
            {selected ? (
              <TosCheckSignupIcon onClick={() => handleButtonChecked(id)} />
            ) : (
              <TosNoneSignupIcon onClick={() => handleButtonChecked(id)} />
            )}
            {id === 0 ? <Horizon /> : null}
          </ICWrapper>
        ))}
      </CheckWrapper>

      <TextWrapper>
        {textAgrees.map((textAgree, idx) => (
          <>
            <IndividualTextWrapper key={idx}>
              {textAgree.optional === "(선택)" ? (
                <Essential style={{ color: "${({ theme }) => theme.colors.grey300}" }}>{textAgree.optional}</Essential>
              ) : (
                <Essential>{textAgree.optional}</Essential>
              )}

              <HyperLink>{textAgree.linkText}</HyperLink>
              <CheckText> {textAgree.boldText} </CheckText>
              <CheckSubText>{textAgree.lightText}</CheckSubText>
            </IndividualTextWrapper>
          </>
        ))}
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};

  margin-top: 0.4rem;
`;

const Essential = styled.p`
  margin-right: 0.2rem;

  color: ${({ theme }) => theme.colors.green5};

  ${({ theme }) => theme.fonts.body04};
`;

const HyperLink = styled.div`
  margin-right: 0.1rem;
  margin-bottom: 0.4rem;

  color: ${({ theme }) => theme.colors.grey500};

  ${({ theme }) => theme.fonts.body05};

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndividualTextWrapper = styled.div`
  display: flex;
  align-items: baseline;

  height: 2rem;
  margin-bottom: 1.6rem;
`;
