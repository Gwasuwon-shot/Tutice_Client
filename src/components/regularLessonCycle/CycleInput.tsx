import { ChangeEvent, useState } from "react";

import {cycleNumberState} from '../../atom/timePicker/timePicker';
import {openTimePickerState} from "../../atom/timePicker/timePicker";
import styled from "styled-components";
import { useRecoilState } from "recoil";

interface LesssonProp {
  chosen: boolean;
  isSelected: boolean;
};


export default function CyclceInput() {

    const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);
    
    function handleTimePicker () {
        setIsTimePickerOpen(true);
    }

    const [activeCycleSlide, setActiveCycleSlide] = useRecoilState(cycleNumberState);
    

  
  return (
    <InputWrapper>
        <TurnName> 수업회차 </TurnName>
        <TurnButtonWrapper>
          <TurnButton type = "button" onClick={handleTimePicker} chosen={activeCycleSlide !== 0} isSelected = {isTimePickerOpen}> {activeCycleSlide}</TurnButton>
          <TurnButtonName> 회차 </TurnButtonName>
        </TurnButtonWrapper>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
  margin-top: 4.1rem;
`; 

const TurnName = styled.h2`
    display: flex;
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey300};
`

const TurnButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
`

const TurnButton = styled.button<LesssonProp>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    ${({ theme }) => theme.fonts.title01};
    ${({ isSelected, chosen, theme }) => (!isSelected) && `color: ${theme.colors.grey700}`};
    ${({ isSelected, chosen, theme }) => (isSelected) && `color: ${theme.colors.grey300}`};
    ${({ isSelected, chosen, theme }) => (!isSelected && !chosen) && `color: ${theme.colors.grey300}`};
    border-bottom: 1.5px solid ${({ theme, chosen }) => (chosen ? theme.colors.green5 : theme.colors.grey70)};
`

const TurnButtonName = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1.5rem;
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey400};
`