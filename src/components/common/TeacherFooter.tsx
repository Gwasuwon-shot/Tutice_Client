import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  CalendarActiveTeacherFooterIc,
  CalendarTeacherFooterIc,
  ClassManagingActiveTeacherFooterIc,
  ClassManagingTeacherFooterIc,
  HomeActiveTeacherFooterIc,
  HomeTeacherFooterIc,
  MyActiveTeacherFooterIc,
  MyTeacherFooterIc,
} from "../../assets";
import { teacherFooterCategory } from "../../atom/teacherFooterCategory";
import { TEACHER_FOOTER_CATEGORY } from "../../core/teacherHome/teacherFooter";
import { TeacherFooterType } from "../../type/teacherHome/teacherFooterType";

export default function TeacherFooter() {
  const [teacherFooterList, setTeacherFooterList] = useRecoilState<TeacherFooterType[]>(teacherFooterCategory);
  const navigate = useNavigate();

  function showTeacherFooterIcon(category: string, isMoved: boolean) {
    switch (category) {
      case TEACHER_FOOTER_CATEGORY.home:
        return isMoved ? <HomeActiveTeacherFooterIc /> : <HomeTeacherFooterIc />;
      case TEACHER_FOOTER_CATEGORY.calendar:
        return isMoved ? <CalendarActiveTeacherFooterIc /> : <CalendarTeacherFooterIc />;
      case TEACHER_FOOTER_CATEGORY.classManaging:
        return isMoved ? <ClassManagingActiveTeacherFooterIc /> : <ClassManagingTeacherFooterIc />;
      case TEACHER_FOOTER_CATEGORY.my:
        return isMoved ? <MyActiveTeacherFooterIc /> : <MyTeacherFooterIc />;
      default:
        return;
    }
  }

  function handleMoveToPage(category: string) {
    setTeacherFooterList(
      teacherFooterList.map((list) =>
        list.category === category ? { ...list, isMoved: true } : { ...list, isMoved: false },
      ),
    );
    switch (category) {
      case TEACHER_FOOTER_CATEGORY.home:
        navigate("/");
        break;
      case TEACHER_FOOTER_CATEGORY.calendar:
        navigate("/schedule");
        break;
      case TEACHER_FOOTER_CATEGORY.classManaging:
        navigate("/check-lesson");
        break;
      case TEACHER_FOOTER_CATEGORY.my:
        navigate("/mypage");
        break;
      default:
        break;
    }
  }

  return (
    <TeacherFooterWrapper>
      {teacherFooterList.map(({ id, category, isMoved }) => (
        <Icon key={id} onClick={() => handleMoveToPage(category)}>
          {showTeacherFooterIcon(category, isMoved)}
        </Icon>
      ))}
    </TeacherFooterWrapper>
  );
}

const TeacherFooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
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

const Icon = styled.i`
  cursor: pointer;
`;
