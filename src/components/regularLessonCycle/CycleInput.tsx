import { ChangeEvent, useState } from "react";

import {cycleNumberState} from '../../atom/timePicker/timePicker';
import {openTimePickerState} from "../../atom/timePicker/timePicker";
import styled from "styled-components";
import { useRecoilState } from "recoil";

interface LesssonProp {
  isSelected: boolean;
};


export default function CyclceInput() {

    const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);
    
    function handleTimePicker () {
        console.log("click")
        setIsTimePickerOpen(true);
        console.log("완료");
    }

    const [activeCycleSlide, setActiveCycleSlide] = useRecoilState(cycleNumberState);
    

  
  return (
    <InputWrapper>
        <TurnName> 수업회차 </TurnName>
        <TurnButtonWrapper>
          <TurnButton type = "button" onClick={handleTimePicker} isSelected={activeCycleSlide !== 0}> {activeCycleSlide}</TurnButton>
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
    ${({ theme }) => theme.fonts.title01};
    ${({ isSelected, theme }) => !isSelected && `color: ${theme.colors.grey100}`};
    ${({ isSelected, theme }) => isSelected && `color: ${theme.colors.grey700}`};
`

const TurnButtonName = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.5rem;
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey400};
`