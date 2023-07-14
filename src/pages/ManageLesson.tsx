import { styled } from "styled-components";
import BackButton from "../components/common/BackButton";
import TeacherFooter from "../components/common/TeacherFooter";
import ManageLessonCategory from "../components/manageLesson/ManageLessonCategory";
import StudentNameBox from "../components/manageLesson/StudentNameBox";
import TreeLevel from "../components/manageLesson/TreeLevel";

export default function ManageLesson() {
  return (
    <>
      <BackButton />
      <ManageLessonWrapper>
        <StudentNameBox />
        <ManageLessonCategory />
        <TreeLevel />
      </ManageLessonWrapper>
      <TeacherFooter />
    </>
  );
}

const ManageLessonWrapper = styled.div`
  padding: 0 1.4rem;
  margin-top: 1rem;
`;
