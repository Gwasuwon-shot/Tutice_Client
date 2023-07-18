import {
  openTimePickerState,
  openDatePickerState,
  openStartDetailState,
  openFinishDetailState,
} from "../../atom/timePicker/timePicker";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import EditDatePicker from "./EditDatePicker";
import EditDetailTimePicker from "./EditTimePicker";
import BottomButton from "../common/BottomButton";
import { useState } from "react";

export default function EditPageFooter() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);
  const [isStartPickerOpen, setIsStartPickerOpen] = useRecoilState<boolean>(openStartDetailState);
  const [isFinishPickerOpen, setIsFinishPickerOpen] = useRecoilState<boolean>(openFinishDetailState);
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleEditLesson() {}

  return (
    <>
      <FooterWrapper>
        <BottomWrapper>
          <BottomButton type="button" isActive={isActive} onClick={handleEditLesson} disabled={!isActive}>
            저장
          </BottomButton>
        </BottomWrapper>
      </FooterWrapper>
      {isDatePickerOpen && <EditDatePicker />}
      {(isStartPickerOpen || isFinishPickerOpen) && !isDatePickerOpen && <EditDetailTimePicker />}
    </>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;

  width: 32rem;
  height: 6.3rem;
  padding: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey50};
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  margin-left: 2rem;
  width: 32rem;
`;
