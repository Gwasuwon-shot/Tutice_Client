import React, { useState } from "react";
import { styled } from "styled-components";
import { BellwithAlarmIc } from "../../assets";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import ExtensionLessonContainer from "./ExtensionLessonContainer";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../../atom/common/isModalOpen";
import ExtensionLessonModal from "./ExtensionLessonModal";
import useExtensionLesson from "../../hooks/useExtensionLesson";
import { LessonType } from "../../type/teacherHome/previewBannerScheduleType";

export default function ExtensionQuestion() {
  const { missingMaintenanceLessonList } = useExtensionLesson();
  const [selectedLesson, setSelectedLesson] = useState<LessonType>({
    idx: 1,
    studentName: "",
    subject: "",
  });
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      <ExtensionWrapper>
        <ExtentionHeader>
          <BellIcon />
          <HeaderText>수업연장 여부를 알려주세요!</HeaderText>
        </ExtentionHeader>
        <Content>
          {missingMaintenanceLessonList.map((item) => {
            const { lesson, endScheduleDate } = item;
            return (
              <ExtensionLessonContainer
                setOpenModal={setOpenModal}
                setSelectedLesson={setSelectedLesson}
                lesson={lesson}
                endScheduleDate={endScheduleDate}
              />
            );
          })}
        </Content>
      </ExtensionWrapper>
      <GreyBar />

      {openModal && selectedLesson && (
        <ExtensionLessonModal
          studentName={selectedLesson?.studentName}
          subject={selectedLesson?.subject}
          backgroundColor={STUDENT_COLOR[selectedLesson?.idx % 11]}
          color="#757A80"
          isBig={false}
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
  border-radius: 8px;
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
  width: 100%;
  height: 1.1rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.colors.grey50};
`;
