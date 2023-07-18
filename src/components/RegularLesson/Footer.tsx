import { openDatePickerState, openFinishDetailState, openStartDetailState, openTimePickerState } from "../../atom/timePicker/timePicker";

import DatePicker from '../../components/RegularLesson/TimePicker/DatePicker';
import DetailTimePicker from '../../components/RegularLesson/TimePicker/DetailTimePicker';
import SelectedDayAndTime from './SelectedDayAndTime';
import TimePicker from '../../components/RegularLesson/TimePicker/TimePicker';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil';

export default function Footer() {
    const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);
    const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);
    const [isStartPickerOpen, setIsStartPickerOpen] = useRecoilState<boolean>(openStartDetailState);
    const [isFinishPickerOpen, setIsFinishPickerOpen] = useRecoilState<boolean>(openFinishDetailState);

    return (
        <>
        <FooterWrapper>
            <FooterButton> 저장 </FooterButton>
        </FooterWrapper>
        <SelectedDayAndTime />
        {isTimePickerOpen && <ModalWrapper> <TimePicker /> </ModalWrapper>}
        {isDatePickerOpen && <ModalWrapper> <DatePicker /> </ModalWrapper>}
        {(isStartPickerOpen || isFinishPickerOpen) && <ModalWrapper> <DetailTimePicker /> </ModalWrapper>}
        </>
    );
}

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    bottom: 0;
    
    width: 100%;
    height: 6.3rem;
    padding: 0.8rem;
    
    background-color: ${({ theme }) => theme.colors.grey50}; 
`

const FooterButton = styled.button`
    display: flex;
    
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey200}; 
`

const ModalWrapper = styled.div`
    display: flex;

    position: fixed;
    bottom: 0;
    
    width: 100%;
`