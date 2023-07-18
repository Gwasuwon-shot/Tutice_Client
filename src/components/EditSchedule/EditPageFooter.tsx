import { openDatePickerState, openStartDetailState, openFinishDetailState } from "../../atom/timePicker/timePicker";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import EditDatePicker from "./EditDatePicker";
import EditDetailTimePicker from "./EditTimePicker";
import BottomButton from "../common/BottomButton";
import { useEffect, useState } from "react";
import EditFooterButton from "./EditFooterButton";

export default function EditPageFooter() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);
  const [isStartPickerOpen, setIsStartPickerOpen] = useRecoilState<boolean>(openStartDetailState);
  const [isFinishPickerOpen, setIsFinishPickerOpen] = useRecoilState<boolean>(openFinishDetailState);
  const [isActive, setIsActive] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleEditLesson(): void {
    navigate("/change-schedule");
  }

  useEffect(() => {
    setIsActive(true);
  }, [isFinishPickerOpen]);

  return (
    <>
      <FooterWrapper>
        <EditFooterButton onClick={() => handleEditLesson()} isActive={isActive} disabled={!isActive} />
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
