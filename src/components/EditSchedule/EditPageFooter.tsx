import { openDatePickerState, openStartDetailState, openFinishDetailState } from "../../atom/timePicker/timePicker";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import EditDatePicker from "./EditDatePicker";
import EditDetailTimePicker from "./EditTimePicker";
import BottomButton from "../common/BottomButton";
import { useEffect, useState } from "react";
import EditFooterButton from "./EditFooterButton";
import { useMutation } from "react-query";
import { updateSchedule } from "../../api/updateSchedule";
import { editDateState } from "../../atom/EditSchedule/editDateState";
import { editSchedule } from "../../atom/EditSchedule/editSchedule";

export default function EditPageFooter() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);
  const [isStartPickerOpen, setIsStartPickerOpen] = useRecoilState<boolean>(openStartDetailState);
  const [isFinishPickerOpen, setIsFinishPickerOpen] = useRecoilState<boolean>(openFinishDetailState);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { year, month, date } = useRecoilValue(editDateState);
  const { idx, startTime, endTime } = useRecoilValue(editSchedule);
  const navigate = useNavigate();

  const patchEditDate = String(year) + "-" + String(month).padStart(2, "0") + "-" + String(date).padStart(2, "0");

  const { mutate: patchSchdule } = useMutation(updateSchedule, {
    onSuccess: () => {
      navigate("/change-schedule");
      console.log("성공");
    },
    onError: (error) => {
      console.log("실패", error);
    },
  });

  function handleEditLesson(): void {
    console.log("dfdf");
    patchSchdule({
      idx: idx,
      date: patchEditDate,
      startTime: startTime,
      endTime: endTime,
    });
  }

  return (
    <>
      <FooterWrapper>
        <BottomWrapper>
          <EditFooterButton onClick={() => handleEditLesson()} isActive={isActive} disabled={!isActive} />
        </BottomWrapper>
        {isDatePickerOpen && <EditDatePicker setIsActive={setIsActive} />}
        {(isStartPickerOpen || isFinishPickerOpen) && !isDatePickerOpen && (
          <EditDetailTimePicker setIsActive={setIsActive} />
        )}
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6.3rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey50};
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  position: absolute;
`;
