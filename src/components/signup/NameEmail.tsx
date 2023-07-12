import { useEffect, useState } from "react";
import { styled } from "styled-components";
import BottomButton from "../common/BottomButton";
import SignupTitleLayout from "./SignupTitleLayout";
import BackButton from "../common/BackButton";
import TextLabelLayout from "./TextLabelLayout";
import { useRecoilState, useSetRecoilState } from "recoil";
import { newUserData, stepNum } from "../../atom/signup/signup";

export default function NameEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useRecoilState(newUserData);
  const [isActive, setIsActive] = useState(false);
  const NAME_TEXT = "가입을 위해 \n 이름과 이메일이 필요해요";
  const setStep = useSetRecoilState(stepNum);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleDoneClick() {
    setNewUser((prev) => ({ ...prev, name: name, email: email }));
    setStep(3);
  }

  useEffect(() => {
    name && email ? setIsActive(true) : setIsActive(false);
    console.log(newUser);
  }, [name, email]);

  return (
    <>
      <BackButton />
      <Container>
        <SignupTitleLayout MainText={NAME_TEXT} />
        <InputWrapper>
          <TextLabelLayout labelText={"이름"} />
          <Inputfield
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e)}
            type="text"
            placeholder="이름을 입력하세요"
          />
        </InputWrapper>
        <InputWrapper>
          <TextLabelLayout labelText={"이메일"} />
          <Inputfield
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e)}
            type="text"
            placeholder="사용하실 이메일을 입력하세요"
          />
        </InputWrapper>
        <BottomButton children="완료" isActive={isActive} onClick={handleDoneClick} />
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding-left: 1.6rem;
  margin-top: 5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
