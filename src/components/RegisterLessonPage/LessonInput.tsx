import { ChangeEvent, useState } from "react";
import { studentNameState, subjectNameState } from "../../atom/common/datePicker";

import { RegisterLessonInputIc } from "../../assets";
import styled from "styled-components";
import { useRecoilState } from "recoil";

interface NameInputSectionProp {
  nameFocused: boolean;
}

interface SubjectInputSectionProp {
  subjectFocused: boolean;
}

export default function LessonInput() {
  // 1. 학생이름 / 과목이름에 Focus 되었는지 여부 관리
  const [isNameInputFocused, setNameInputFocused] = useState(false);
  const [isSubjectInputFocused, setSubjectInputFocused] = useState(false);

  // 2. 학생이름, 과목이름 입력값 관리 (recoil)
  const [studentName, setStudentName] = useRecoilState<string>(studentNameState);
  const [subjectName, setSubjectName] = useRecoilState<string>(subjectNameState);

  const handleNameInputFocus = () => {
    setSubjectInputFocused(false);
    setNameInputFocused(true);
  };

  const handleSubjectInputFocus = () => {
    setNameInputFocused(false);
    setSubjectInputFocused(true);
  };

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStudentName(event.target.value);
  };

  const handleSubjectInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubjectName(event.target.value);
  };

  // 3. 이름 2자 이하 경고메시지 관련 변수

  const isNameValid = studentName.length >= 2;

  const isWarning = !isNameValid && studentName.length > 0;

  function handleNameDelete () {
    setStudentName("");
    setSubjectInputFocused(false);
  };
  
  function handleLessonDelete() {
    setSubjectName("");
    setNameInputFocused(false);
  }
  
  return (
    <InputWrapper>
      <NameInputSection nameFocused={isNameInputFocused}>
        <InputName> 학생이름 </InputName>
        <StudentInput
          type="text"
          placeholder="이름을 입력하세요"
          value={studentName}
          onChange={handleNameInputChange}
          onFocus={handleNameInputFocus}
        />
        {isWarning && <WarningMessage> 이름은 최소 2자 이상 입력해주세요 </WarningMessage>}
        {isNameInputFocused && <RegisterLessonInputIcon  onClick={handleNameDelete}/>}
      </NameInputSection>

      <SubjectInputSection subjectFocused={isSubjectInputFocused} isWarning={isWarning}>
        <InputName> 과목 </InputName>
        <SubjectInput
          type="text"
          placeholder="수업과목을 입력하세요"
          value={subjectName}
          onChange={handleSubjectInputChange}
          onFocus={handleSubjectInputFocus}
        />
        {isSubjectInputFocused && <RegisterLessonInputIcon onClick={handleLessonDelete}/>}
      </SubjectInputSection>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

const NameInputSection = styled.section<NameInputSectionProp>`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 29.2rem;
  height: 5.6rem;
  margin-bottom: 1.3rem;

  border-bottom: 1px solid ${({ theme, nameFocused }) => (nameFocused ? theme.colors.green5 : theme.colors.grey70)};
`;

const SubjectInputSection = styled.section<SubjectInputSectionProp & { isWarning: boolean }>`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 29.2rem;
  height: 5.6rem;
  margin-top: ${({ isWarning }) => (isWarning ? "1.3rem" : "0")};

  border-bottom: 1px solid
    ${({ theme, subjectFocused }) => (subjectFocused ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputName = styled.h1`
  display: flex;

  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey300};
`;

const StudentInput = styled.input`
  display: flex;

  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.title03};
  color: ${({ theme }) => theme.colors.grey700};
  &textarea::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
`;

const SubjectInput = styled.input`
  display: flex;

  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.title03};
  color: ${({ theme }) => theme.colors.grey700};
  &textarea::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
`;

const WarningMessage = styled.h3`
  ${({ theme }) => theme.fonts.body06};
  color: ${({ theme }) => theme.colors.sementic_red};
`;

const RegisterLessonInputIcon = styled(RegisterLessonInputIc)`
  position: absolute;
  bottom: 0.7rem;
  right: 1.1rem;
`;
