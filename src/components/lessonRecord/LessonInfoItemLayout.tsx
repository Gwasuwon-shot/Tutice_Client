import React from "react";
import { styled } from "styled-components";
import { copyAccountNumberLessonInfoIc } from "../../assets";

interface LessonInfoItemProps {
  detailCategory: string;
  content: string;
  isBankAccount?: boolean;
}

export default function LessonInfoItemLayout(props: LessonInfoItemProps) {
  const { detailCategory, content, isBankAccount } = props;
  return (
    <LessonInfoItemLayoutWrapper>
      <LessonInfoDetailCategory>{detailCategory}</LessonInfoDetailCategory>
      <LessonInfoContent>
        {isBankAccount && <CopyAccountNumberIcon />}
        {content}
      </LessonInfoContent>
    </LessonInfoItemLayoutWrapper>
  );
}

const LessonInfoItemLayoutWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6rem;
  padding: 1.4rem;
`;

const LessonInfoDetailCategory = styled.h2`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
`;

const LessonInfoContent = styled.p`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey500};
`;

const CopyAccountNumberIcon = styled(copyAccountNumberLessonInfoIc)`
  width: 2.4rem;

  margin-left: 0.6rem;
`;
