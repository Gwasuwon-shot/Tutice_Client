import { useState } from "react";
import { styled } from "styled-components";
import useManageLesson from "../../hooks/useManageLesson";
import useModal from "../../hooks/useModal";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import AttendanceInform from "./AttendanceInform";

export default function AttendanceList() {
  const { scheduleList } = useManageLesson();
  const { modalRef, closeModal, unShowModal, showModal, openModal } = useModal();
  const [issCheckingModalOpen, setIsCheckingModalOpen] = useState(false);

  function handleMoveToAttendanceCheck() {
    showModal();
  }

  return (
    <>
      <ModalWrapper>
        {openModal && <AttendanceCheckModal setIsCheckingModalOpen={setIsCheckingModalOpen} />}
      </ModalWrapper>
      <GreyBox />
      {scheduleList.map(({ idx, date, status, startTime, endTime }, index) => (
        <AttendanceInform
          key={idx}
          date={date}
          status={status}
          startTime={startTime}
          endTime={endTime}
          count={Math.abs(index - scheduleList.length)}
        />
      ))}
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
