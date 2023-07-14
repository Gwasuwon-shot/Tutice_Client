import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { managingStatus } from "../atom/mangeLesson/managingStatus";
import BackButton from "../components/common/BackButton";
import TeacherFooter from "../components/common/TeacherFooter";
import AttendanceList from "../components/manageLesson/AttendanceInforms";
import ManageLessonCategory from "../components/manageLesson/ManageLessonCategory";
import StudentNameBox from "../components/manageLesson/StudentNameBox";
import TreeLevel from "../components/manageLesson/TreeLevel";

export default function ManageLessonDetail() {
  // useParams 추가 예정
  const { manageLessonId } = useParams();
  const [status, setStatus] = useRecoilState(managingStatus);

  function checkIsStatusLesson(){
    return status===
  }

  return (
    <>
      <BackButton />
      <ManageLessonWrapper>
        <StudentNameBox />
        <ManageLessonCategory />
        <TreeLevel />
        <AttendanceList />
      </ManageLessonWrapper>
      <TeacherFooter />
    </>
  );
}

const ManageLessonWrapper = styled.div`
  padding: 0 1.4rem;
  margin-top: 1rem;
`;
