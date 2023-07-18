import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import useGetMissingAttendanceSchedule from "../../hooks/useGetMissingAttendanceSchedule";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import AttendanceDoubleCheckingModal from "../common/AttendanceDoubleCheckingModal";
import NoCheckAttendanceContanier from "./NoCheckAttendanceContanier";

interface LessonData {
  idx: number;
  studentName: string;
  subject: string;
}

interface ScheduleData {
  idx: number;
  startTime: string;
  endTime: string;
  count: number;
}

interface MissingAttendanceData {
  date: string;
  missingAttedanceScheduleList: Array<{
    lesson: LessonData;
    schedule: ScheduleData;
  }>;
}

export default function NoCheckLesson() {
  const { missingAttendanceSchedule } = useGetMissingAttendanceSchedule();
  const [selectedLesson, setSelectedLesson] = useState<LessonData>({
    idx: 0,
    studentName: "권혠찌",
    subject: "피아노",
  });
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [isCheckingModalOpen, setIsCheckingModalOpen] = useState<boolean>(false);

  return (
    <>
      <NoAttendanceWrapper>
        {missingAttendanceSchedule &&
          missingAttendanceSchedule?.map(
            ({ date, missingAttedanceScheduleList }: MissingAttendanceData, idx: number) => {
              return (
                <NoAttendanceContainer key={idx}>
                  <NoAttendanceDate>
                    {date[6] == "1" ? <h1>{date.slice(5, 7)}월</h1> : <h1>{date.slice(6, 7)}월</h1>}
                    {date[8] === "0" ? <h1>{date.slice(-1)}일</h1> : <h1>{date.slice(8, 10)}일</h1>}
                  </NoAttendanceDate>

                  {missingAttedanceScheduleList?.map(({ lesson, schedule }) => {
                    return (
                      <NoCheckAttendanceContanier
                        lesson={lesson}
                        schedule={schedule}
                        setSelectedLesson={setSelectedLesson}
                        setOpenModal={setOpenModal}
                      />
                    );
                  })}
                </NoAttendanceContainer>
              );
            },
          )}
        {openModal && selectedLesson && (
          <ModalSection $isCheckingModalOpen={isCheckingModalOpen}>
            <AttendanceCheckModal setIsCheckingModalOpen={setIsCheckingModalOpen} />
          </ModalSection>
        )}

        {openModal && isCheckingModalOpen && (
          <ModalSection $isCheckingModalOpen={isCheckingModalOpen}>
            <AttendanceDoubleCheckingModal setIsCheckingModalOpen={setIsCheckingModalOpen} />
          </ModalSection>
        )}

        {openModal && (
          <ModalSection $isCheckingModalOpen={isCheckingModalOpen}>
            <AttendanceCheckModal setIsCheckingModalOpen={setIsCheckingModalOpen} />
          </ModalSection>
        )}
      </NoAttendanceWrapper>
    </>
  );
}

const NoAttendanceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin-right: 1.4rem;
  margin-left: 1.4rem;
`;
const NoAttendanceContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const NoAttendanceDate = styled.div`
  display: flex;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.grey20};

  width: 100%;
  ${({ theme }) => theme.fonts.body04};
`;

const ModalSection = styled.section<{ $isCheckingModalOpen: boolean }>`
  position: absolute;

  margin: -10rem 0 0 -1.5em;
`;
