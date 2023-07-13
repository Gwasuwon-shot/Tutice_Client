import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { ManagingLessonClassIc, ManagingLessonMoneyIc } from "../assets";
import { managingStatus } from "../atom/mangeLesson/managingStatus";
import BackButton from "../components/common/BackButton";
import StudentNameLabel from "../components/common/StudentNameLabel";
import { LESSON_SCHEDULE } from "../core/checkAttendance/lessonSchedule";
import { STUDENT_COLOR } from "../core/common/studentColor";
import { MANAGE_LESSON_STATUS } from "../core/manageLesson/manageLessonStatus";

export default function ManagfeLesson() {
  // 서버에서 가져올 데이터
  const { lesson, scheduleList } = LESSON_SCHEDULE?.data;
  const { idx, studentName, subject, count, nowCount } = lesson;
  const [status, setStatus] = useRecoilState(managingStatus);

  function checkIsLesson() {
    return status === MANAGE_LESSON_STATUS.lesson;
  }

  function handleChangeStatus(changedStatus: string) {
    setStatus(changedStatus);
  }

  return (
    <>
      <BackButton />
      <ManageLessonWrapper>
        <LabelWrapper>
          <StudentNameLabel
            studentName={studentName}
            subject={subject}
            backgroundColor={STUDENT_COLOR[idx % 11]}
            color="#757A80"
            isBig={true}
          />
        </LabelWrapper>
        <CategoryWrapper>
          {checkIsLesson() ? (
            <ManagingLessonClassIcon onClick={() => handleChangeStatus(MANAGE_LESSON_STATUS.lesson)} />
          ) : (
            <ManagingLessonMoneyIcon onClick={() => handleChangeStatus(MANAGE_LESSON_STATUS.money)} />
          )}
        </CategoryWrapper>
      </ManageLessonWrapper>
    </>
  );
}

const ManageLessonWrapper = styled.div`
  padding: 0 1.4rem;
  margin-top: 1rem;
`;

const CategoryWrapper = styled.section`
  margin-top: 1.8rem;
`;

const ManagingLessonClassIcon = styled(ManagingLessonClassIc)`
  width: 29.2rem;
`;

const ManagingLessonMoneyIcon = styled(ManagingLessonMoneyIc)`
  width: 29.2rem;
`;

const LabelWrapper = styled.header`
  margin-left: 0.4rem;
`;
