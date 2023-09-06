import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { BellwithAlarmIc } from "../../assets";
import { attendanceLesson } from "../../atom/attendanceCheck/attendanceLesson";
import { isModalOpen } from "../../atom/common/isModalOpen";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useGetMissingMaintenanceLesson from "../../hooks/useGetMissingMaintenanceLesson";
import ExtensionLessonContainer from "./ExtensionLessonContainer";
import ExtensionLessonModal from "./ExtensionLessonModal";

interface ExtensionQuestionProp {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MissingLessonProp {
  lesson: {
    idx: number;
    studentName: string;
    subject: string;
    count: number;
  };
  endScheduleDate: string;
}

export default function ExtensionQuestion(props: ExtensionQuestionProp) {
  const { setIsSuccess } = props;
  const { missingMaintenanceLessonList } = useGetMissingMaintenanceLesson();
  const [selectedLesson, setSelectedLesson] = useRecoilState(attendanceLesson);
  const { lessonIdx, studentName, count, subject, scheduleIdx } = selectedLesson;
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      <ExtensionWrapper>
        <ExtentionHeader>
          <BellIcon />
          <HeaderText>수업연장 여부를 알려주세요!</HeaderText>
        </ExtentionHeader>
        <Content>
          {missingMaintenanceLessonList?.map((item: MissingLessonProp, idx) => {
            return (
              <ExtensionLessonContainer
                setOpenModal={setOpenModal}
                endScheduleDate={item.endScheduleDate}
                lesson={item.lesson}
                key={idx}
              />
            );
          })}
        </Content>
      </ExtensionWrapper>
      <GreyBar />

      {openModal && selectedLesson && (
        <ExtensionLessonModal
          studentName={studentName}
          subject={subject}
          backgroundColor={STUDENT_COLOR[lessonIdx % 10]}
          color="#757A80"
          isBig={false}
          setIsSuccess={setIsSuccess}
        />
      )}
    </>
  );
}

const ExtensionWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  width: 29.2rem;
  height: 9.5rem;
  padding-left: 1rem;
  margin-bottom: 2.4rem;

  border: 1px solid ${({ theme }) => theme.colors.green5};
  gap: 0.3rem;
  border-radius: 0.8rem;
`;

const ExtentionHeader = styled.header`
  display: flex;
  gap: 0.6rem;
`;

const BellIcon = styled(BellwithAlarmIc)`
  width: 2rem;
  height: 2rem;
`;

const HeaderText = styled.h1`
  ${({ theme }) => theme.fonts.body01}
  color: ${({ theme }) => theme.colors.grey900};
`;

const Content = styled.div`
  display: flex;
  overflow: hidden;
`;

const GreyBar = styled.div`
  width: 32rem;
  height: 1.1rem;
  margin-left: -1.5rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.colors.grey50};
`;
