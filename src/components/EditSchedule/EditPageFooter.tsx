import {
  openTimePickerState,
  openDatePickerState,
  openStartDetailState,
  openFinishDetailState,
} from "../../atom/timePicker/timePicker";
import DetailTimePicker from "../../components/RegularLesson/TimePicker/DetailTimePicker";
import TimePicker from "../../components/RegularLesson/TimePicker/TimePicker";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import EditDatePicker from "./EditDatePicker";
import EditDetailTimePicker from "./EditTimePicker";

export default function EditPageFooter() {
  const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);
  const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);
  const [isStartPickerOpen, setIsStartPickerOpen] = useRecoilState<boolean>(openStartDetailState);
  const [isFinishPickerOpen, setIsFinishPickerOpen] = useRecoilState<boolean>(openFinishDetailState);

  return (
    <>
      <FooterWrapper>
        <FooterButton> 저장 </FooterButton>
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

const FooterButton = styled.button`
  display: flex;

  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey200};
`;
