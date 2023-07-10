import { useState } from "react";
import styled from "styled-components";
import { TEACHER_FOOTER } from "../../core/teacherFooter";
import { TeacherFooterType } from "../../type/teacherFooterType";

export default function TeacherFooter() {
  const [teacherFooterList, setTeacherFooterList] = useState<TeacherFooterType[]>(TEACHER_FOOTER);

  return <TeacherFooterWrapper>TeacherFooter</TeacherFooterWrapper>;
}

const TeacherFooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 10;

  width: 32rem;
  height: 7.2rem;
  padding: 0.3rem 1.5rem 1.9rem;

  background: ${({ theme }) => theme.colors.grey0};

  flex-shrink: 0;

  border-radius: 18px 18px 0 0;

  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  box-shadow: 0 0 0.5rem 0 rgb(56 62 68 / 8%);
`;
