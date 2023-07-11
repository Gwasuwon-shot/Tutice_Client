import { styled } from "styled-components";
import { RightArrowTeacherHomeIc } from "../../assets";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import { LessonType } from "../../type/teacherHome/previewBannerScheduleType";
import { ScheduleType } from "../../type/teacherHome/upcomingClassScheduleType";
import StudentColorBox from "../common/StudentColorBox";
import SubjectLabel from "../common/SubjectLabel";

interface UpcomingClassProps {
  lesson: LessonType;
  schedule: ScheduleType;
}

export default function UpcomingClass(props: UpcomingClassProps) {
  const { lesson, schedule } = props;
  const { idx, studentName, subject } = lesson;
  const { startTime, endTime } = schedule;

  return (
    <UpcomingClassWrapper>
      <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
      <p>
        {startTime} ~ {endTime}
      </p>
      <p>{studentName}</p>
      <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
      <RightArrowTeacherHomeIc />
    </UpcomingClassWrapper>
  );
}

const UpcomingClassWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.4rem;
`;
