import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { attendanceLesson } from "../../atom/attendanceCheck/attendanceLesson";
import useManageLesson from "../../hooks/useManageLesson";
import useModal from "../../hooks/useModal";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import AttendanceInform from "./AttendanceInform";

export default function AttendanceInforms() {
  const { lesson, scheduleList } = useManageLesson();
  const { modalRef, closeModal, unShowModal, showModal, openModal } = useModal();
  const [issCheckingModalOpen, setIsCheckingModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useRecoilState(attendanceLesson);
  const { studentName, subject, count, nowCount } = lesson;

  function handleMoveToAttendanceCheck() {
    showModal();
  }

  return (
    <>
      <ModalWrapper>
        {openModal && (
          <AttendanceCheckModal
            setIsCheckingModalOpen={setIsCheckingModalOpen}
            lessonIdx={selectedLesson?.lessonIdx}
            studentName={selectedLesson?.studentName}
            count={selectedLesson?.count}
            subject={selectedLesson?.subject}
            scheduleIdx={selectedLesson?.scheduleIdx}
          />
        )}
      </ModalWrapper>
      <GreyBox />
      <ScheduleWrapper>
        {scheduleList.map(({ idx, date, status, startTime, endTime }, index) => (
          <AttendanceInform
            key={idx}
            date={date}
            status={status}
            startTime={startTime}
            endTime={endTime}
            count={Math.abs(index - scheduleList.length)}
            lessonIdx={lesson?.idx}
            studentName={studentName}
            scheduleIdx={idx}
            subject={subject}
          />
        ))}
      </ScheduleWrapper>
    </>
  );
}

const GreyBox = styled.div`
  width: 32rem;
  height: 1.1rem;
  margin: 1.5rem 0 2.65rem -1.5rem;

  background-color: ${({ theme }) => theme.colors.grey50};
`;

const ModalWrapper = styled.section`
  position: absolute;

  margin: -20.1rem 0 0 -1.5rem;
`;

const ScheduleWrapper = styled.section`
  overflow: scroll;

  padding-bottom: 7.2rem;
`;
