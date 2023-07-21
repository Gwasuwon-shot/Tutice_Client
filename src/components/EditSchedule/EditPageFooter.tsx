import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { updateSchedule } from "../../api/updateSchedule";
import { editDateState } from "../../atom/EditSchedule/editDateState";
import { editSchedule } from "../../atom/EditSchedule/editSchedule";
import { openDatePickerState, openFinishDetailState, openStartDetailState } from "../../atom/timePicker/timePicker";
import EditDatePicker from "./EditDatePicker";
import EditFooterButton from "./EditFooterButton";
import EditDetailTimePicker from "./EditTimePicker";

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
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function handleEditLesson(): void {
    patchSchdule({
      idx: idx,
      date: patchEditDate,
      startTime: startTime,
      endTime: endTime,
    });
  }

  return (
    <>
      <EditFooterButton onClick={() => handleEditLesson()} isActive={isActive} disabled={!isActive} />
      {isDatePickerOpen && (
        <ModalWrapper>
          <EditDatePicker setIsActive={setIsActive} />
        </ModalWrapper>
      )}
      {(isStartPickerOpen || isFinishPickerOpen) && !isDatePickerOpen && (
        <EditDetailTimePicker setIsActive={setIsActive} />
      )}
    </>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
`;
