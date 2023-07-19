import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useGetLessonScheduleByTeacher from "../../hooks/useGetLessonScheduleByTeacher";
import useModal from "../../hooks/useModal";
import StudentNameLabel from "../common/StudentNameLabel";
import SendPaymentAlarmManageLessonModal from "./SendPaymentAlarmManageLessonModal";

export default function StudentNameBox() {
  const { manageLessonId } = useParams();
  const { lesson, scheduleList } = useGetLessonScheduleByTeacher(Number(manageLessonId));
  // const { lesson, scheduleList } = lessonScheduleByTeacher;
  const { idx, studentName, subject, count, nowCount } = lesson;
  const { openModal } = useModal();
  const [payMentAlarmOpen, setPayMentAlarmOpen] = useState(false);

  return (
    <>
      {openModal && payMentAlarmOpen && (
        <SendPaymentAlarmManageLessonModal
          studentName={studentName}
          subject={subject}
          backgroundColor={STUDENT_COLOR[idx % 11]}
          color="#757A80"
          isBig={false}
        />
      )}
      <LabelWrapper>
        <StudentNameLabel
          studentName={studentName}
          subject={subject}
          backgroundColor={STUDENT_COLOR[idx % 11]}
          color="#757A80"
          isBig={true}
        />
      </LabelWrapper>
    </>
  );
}

const LabelWrapper = styled.header`
  margin-left: 0.4rem;
`;
