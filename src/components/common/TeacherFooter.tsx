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
import useTeacherFooter from "../../hooks/useTeacherFooter";
import { TeacherFooterType } from "../../type/teacherHome/teacherFooterType";
import TeacherFooterIcons from "./TeacherFooterIcons";

export default function TeacherFooter() {
  const [teacherFooterList, setTeacherFooterList] = useRecoilState<TeacherFooterType[]>(teacherFooterCategory);
  const { handleMoveToPage } = useTeacherFooter();
  // const navigate = useNavigate();

  // function showTeacherFooterIcon(category: string, isMoved: boolean) {
  //   switch (category) {
  //     case TEACHER_FOOTER_CATEGORY.home:
  //       return isMoved ? <HomeActiveTeacherFooterIcon /> : <HomeTeacherFooterIcon />;
  //     case TEACHER_FOOTER_CATEGORY.calendar:
  //       return isMoved ? <CalendarActiveTeacherFooterIcon /> : <CalendarTeacherFooterIcon />;
  //     case TEACHER_FOOTER_CATEGORY.classManaging:
  //       return isMoved ? <ClassManagingActiveTeacherFooterIcon /> : <ClassManagingTeacherFooterIcon />;
  //     case TEACHER_FOOTER_CATEGORY.my:
  //       return isMoved ? <MyActiveTeacherFooterIcon /> : <MyTeacherFooterIcon />;
  //     default:
  //       return;
  //   }
  // }

  // function handleMoveToPage(category: string) {
  //   setTeacherFooterList(
  //     teacherFooterList.map((list) =>
  //       list.category === category ? { ...list, isMoved: true } : { ...list, isMoved: false },
  //     ),
  //   );
  //   switch (category) {
  //     case TEACHER_FOOTER_CATEGORY.home:
  //       navigate("/");
  //       break;
  //     case TEACHER_FOOTER_CATEGORY.calendar:
  //       navigate("/schedule");
  //       break;
  //     case TEACHER_FOOTER_CATEGORY.classManaging:
  //       navigate("/manage-lesson");
  //       break;
  //     case TEACHER_FOOTER_CATEGORY.my:
  //       navigate("/mypage");
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <TeacherFooterWrapper>
      {teacherFooterList.map(({ id, category, isMoved }) => (
        <Icon key={id} onClick={() => handleMoveToPage(category)}>
          <TeacherFooterIcons category={category} isMoved={isMoved} />
        </Icon>
      ))}
    </TeacherFooterWrapper>
  );
}

const TeacherFooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 32rem;
  height: 7.2rem;
  padding: 0.3rem 1.5rem 1.9rem;

  background: ${({ theme }) => theme.colors.grey0};

  flex-shrink: 0;

  border-radius: 1.8rem 1.8rem 0 0;

  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  box-shadow: 0 0 0.5rem 0 rgb(56 62 68 / 8%);
`;

const Icon = styled.i`
  cursor: pointer;
`;

const HomeActiveTeacherFooterIcon = styled(HomeActiveTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;

const HomeTeacherFooterIcon = styled(HomeTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;
const CalendarActiveTeacherFooterIcon = styled(CalendarActiveTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;
const CalendarTeacherFooterIcon = styled(CalendarTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;
const ClassManagingActiveTeacherFooterIcon = styled(ClassManagingActiveTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;
const ClassManagingTeacherFooterIcon = styled(ClassManagingTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;
const MyActiveTeacherFooterIcon = styled(MyActiveTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;
const MyTeacherFooterIcon = styled(MyTeacherFooterIc)`
  width: 5rem;
  height: 5rem;
`;
