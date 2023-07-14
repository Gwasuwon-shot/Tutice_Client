import DetailTimePicker from '../components/RegularLesson/TimePicker/DetailTimePicker';
import TimePicker from '../components/RegularLesson/TimePicker/TimePicker';
import {styled} from 'styled-components';
import { useState } from "react";

export default function TimePickerPage() {
  return (
    <PickerPageWrapper>
      <TimePicker />
      <DetailTimePicker />
    </PickerPageWrapper>
  );
}


const PickerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`