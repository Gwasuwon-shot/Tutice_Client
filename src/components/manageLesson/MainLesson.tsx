import { styled } from "styled-components";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useMoveToLessonDetail from "../../hooks/useMoveToLessonDetail";
import SubjectLabel from "../common/SubjectLabel";
import ManageStudentColorBox from "./ManageStudentColorBox";
import { ManageLessonEditIc } from "../../assets";
import { deleteLessonStatus } from "../../atom/mangeLesson/deleteLessonStatus";
import { useRecoilState } from "recoil";

interface MainLessonProps {
  idx: number;
  studentName: string;
  subject: string;
  percent: number;
  dayOfWeekList: string[];
  isClickedEdit: boolean;
  handleConfirmDeleteLesson: () => void;
}

export default function MainLesson(props: MainLessonProps) {
  const { handleConfirmDeleteLesson, idx, studentName, subject, percent, latestRegularSchedule, isClickedEdit } = props;
  const { dayOfWeek, startTime, endTime } = latestRegularSchedule;
  const { handleMoveToManageLessonDetail } = useMoveToLessonDetail();
  const [deleteConfirmLesson, setDeleteConfirmLesson] = useRecoilState(deleteLessonStatus);

  function handleClickedDeleteButton() {
    handleConfirmDeleteLesson();
    setDeleteConfirmLesson(idx);
  }

  return (
    <LessonIndividualContainer>
      {isClickedEdit && <ManageLessonEditButton onClick={() => handleClickedDeleteButton()} />}
      <MainLessonBox onClick={() => handleMoveToManageLessonDetail(idx)}>
        <MainLessonWrapperContainer>
          <MainLessonWrapper>
            <ManageStudentColorBox backgroundColor={STUDENT_COLOR[idx % 10]} />
            <StudentNameWrapper>{studentName}</StudentNameWrapper>
            <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 10]} color="#5B6166" />
          </MainLessonWrapper>
          <DaysWrapper>
            <LessonInformation>진행예정</LessonInformation>
            <DayOfWeekWrapper>
              <p>{dayOfWeek}</p>
              <p>
                {startTime} - {endTime}
              </p>
            </DayOfWeekWrapper>
          </DaysWrapper>
        </MainLessonWrapperContainer>
      </MainLessonBox>
    </LessonIndividualContainer>
  );
}

const LessonIndividualContainer = styled.article`
  position: relative;
  height: 15.1rem;
  display: flex;
`;

const MainLessonBox = styled.article`
  display: flex;
  align-items: center;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  border-radius: 0.8rem;

  width: 14rem;
  height: 14.4rem;

  margin-top: 0.8rem;
`;

const MainLessonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 11.6rem;
  height: 1.6rem;
  margin-bottom: 2.1rem;
  gap: 0.7rem;
`;

const StudentNameWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body01};
`;

const DaysWrapper = styled.p`
  margin-left: 1.5rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body05};
`;

const MainLessonWrapperContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 23rem;
`;

const LessonInformation = styled.h2`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey500};
`;

const DayOfWeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem ${({ theme }) => theme.colors.grey900};
`;

const ManageLessonEditButton = styled(ManageLessonEditIc)`
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
