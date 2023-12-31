import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { TosCheckedSignupIc, TosNoneSignupIc } from "../../assets";
import { newUserData, stepNum } from "../../atom/signup/signup";
import { checkList, textList } from "../../core/Login/ListData";
import { newUserDataTypes } from "../../type/SignUp/newUserDataType";
import { BUTTON_TEXT } from "../../core/signup/signUpTextLabels";

export interface ResponseDataType {
  message: string;
  code: number;
}

interface AgreeCheckingProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AgreeChecking(props: AgreeCheckingProps) {
  const { isActive, setIsActive } = props;
  const setStep = useSetRecoilState(stepNum);
  const [checkAgrees, setCheckAgrees] = useState(checkList);
  const [textAgrees, setTextAgrees] = useState(textList);
  const [allClicked, setAllClicked] = useState(false);
  const [completeCheck, setCompleteCheck] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const [newUser, setNewUser] = useRecoilState(newUserData);

  function handleMoveToNotion(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;
    switch (target.innerText) {
      case "서비스 이용 약관":
        window.open("https://www.notion.so/9e874c3c10804274a99b0d6c9b75f1c2?pvs=4", "_blank");
        break;
      case "개인정보 수집 및 이용":
        window.open("https://www.notion.so/388ff5750f004bbf81554bfa14887186?pvs=4", "_blank");
        break;
      case "개인 정보 마케팅 활용":
        window.open("https://www.notion.so/1f3759e165504863b33506204d8c871a?pvs=4", "_blank");
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

    setNewUser((prev: newUserDataTypes) => ({
      ...prev,
      isMarketing: checkAgrees[4].selected,
    }));
  }, [checkAgrees]);

  useEffect(() => {
    isAllChecked() ? changeTotalAgree(true) : changeTotalAgree(false);

    completeCheck ? setIsActive(true) : setIsActive(false);
  }, [isAllChecked(), completeCheck]);

  function allCheckedIndex(id: number) {
    return id === 0;
  }

  function checkEssentialAgreeDone(essentialCheck: number) {
    return essentialCheck === 3;
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

  function handleToSignUp() {
    setNewUser((prev) => ({ ...prev, isMarketing: completeCheck }));

    setStep(3);
  }

  return (
    <>
      <TosWrapper>
        <CheckWrapper>
          {checkAgrees.map(({ id, selected }) => (
            <ICWrapper key={id}>
              {selected ? (
                <div onClick={() => handleButtonChecked(id)}>
                  <TosCheckSignupIcon />
                </div>
              ) : (
                <div onClick={() => handleButtonChecked(id)}>
                  <TosNoneSignupIcon />
                </div>
              )}
              {id === 0 ? <Horizon /> : null}
            </ICWrapper>
          ))}
        </CheckWrapper>

        <TextWrapper>
          {textAgrees.map((textAgree) => (
            <IndividualTextWrapper key={textAgree.id}>
              <Essential>{textAgree.optional}</Essential>
              <HyperLink onClick={(e: React.MouseEvent<HTMLDivElement>) => handleMoveToNotion(e)}>
                {textAgree.linkText}
              </HyperLink>
              <CheckText> {textAgree.boldText} </CheckText>
              <CheckSubText>{textAgree.lightText}</CheckSubText>
            </IndividualTextWrapper>
          ))}
        </TextWrapper>
      </TosWrapper>

      <SubmitButton type="button" disabled={!isActive} $isActive={isActive} onClick={handleToSignUp}>
        <ButtonText>{BUTTON_TEXT.next}</ButtonText>
      </SubmitButton>
    </>
  );
}

const TosWrapper = styled.div`
  display: flex;

  padding-top: 1.6rem;
  padding-left: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 7rem;
  margin-right: 1.4rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  background-color: ${({ theme }) => theme.colors.grey0};
  border-radius: 0.8rem;
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

  color: ${({ theme }) => theme.colors.grey500};

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

const SubmitButton = styled.button<{ $isActive: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  height: 6.3rem;
  margin-left: -1.6rem;

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.green5 : theme.colors.grey50)};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey0 : theme.colors.grey200)};

  ${({ theme }) => theme.fonts.body01};
`;
const ButtonText = styled.p`
  position: relative;

  top: -1rem;
  ${({ theme }) => theme.fonts.body01};
`;
