import { openDatePickerState, openTimePickerState } from "../../atom/timePicker/timePicker";

import TimePicker from '../../components/RegularLesson/TimePicker/TimePicker';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil';

export default function Footer() {
    const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);
    const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);
 
    return (
        <>
        <FooterWrapper>
            <FooterButton> 저장 </FooterButton>
        </FooterWrapper>
        {isTimePickerOpen && <TimePicker />}
        {isDatePickerOpen && <TimePicker />}
        </>
    );
}

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    bottom: 0;
    
    width: 32rem;
    height: 6.3rem;
    padding: 0.8rem;
    
    background-color: ${({ theme }) => theme.colors.grey50}; 
`

const FooterButton = styled.button`
    display: flex;
    
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey200}; 
`