import { RegularLessonNotebookIc, RegularLessonPencilIc } from "../../assets";

import React from "react";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import styled from "styled-components";

export default function EidtPageLessonInformation() {
  return (
    <LessonInformationWrapper>
      <IconWrapper>
        <RegularLessonNotebookIcon />
        <SectionName> 수업정보 </SectionName>
      </IconWrapper>
      <LessonWrapper>
        <Turn>
          <TurnName> 회차 </TurnName>
          <TurnButton type="submit"> 회차를 선택하세요 </TurnButton>
        </Turn>
        <StartDate>
          <StartDateName> 첫 수업일 </StartDateName>
          <StartDateButton type="submit"> 2023년 7월 3일 </StartDateButton>
          <RegularLessonPencilIcon />
        </StartDate>
      </LessonWrapper>
    </LessonInformationWrapper>
  );
}

const LessonInformationWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;

  height: 3.1rem;
`;

const RegularLessonNotebookIcon = styled(RegularLessonNotebookIc)`
  margin-top: 1.5rem;
  margin-left: 1.7rem;
`;

const SectionName = styled.h1`
  margin-left: 0.8rem;
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const LessonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 28.8rem;
  height: 9.7rem;
  padding-left: 0.8rem;
  margin-left: 1.5rem;
  gap: 1.9rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey50};
`;

const Turn = styled.div`
  display: flex;
`;

const TurnName = styled.h2`
  display: flex;
  align-items: center;

  width: 7rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey400};
`;

const TurnButton = styled.button`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey100};

  padding: 0;
`;

const StartDate = styled.div`
  display: flex;
`;
const StartDateName = styled.h2`
  display: flex;
  align-items: center;

  width: 7rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey400};
`;
const StartDateButton = styled.button`
  padding: 0;

  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey700};
`;

const RegularLessonPencilIcon = styled(RegularLessonPencilIc)`
  margin-left: 1.6rem;
`;
