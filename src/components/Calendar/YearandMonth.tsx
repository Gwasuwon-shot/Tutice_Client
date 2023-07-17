import { format } from "date-fns";
import styled from "styled-components";
import { CancelButton, NextMonthArrowButton, PrevMonthArrowButton } from "../../assets";

interface YearandMonthProps {
  currentMonth: Date;
  // prevMonth: MouseEventHandler<SVGSVGElement>;
  // nextMonth: MouseEventHandler<SVGSVGElement>;
  // prevMonth: any;
  // nextMonth: any;
}

export default function YearandMonth(props: YearandMonthProps) {
  const { currentMonth } = props;

  return (
    <HeaderWrapper>
      <CalendarText>캘린더</CalendarText>
      <YearMonthWrapper>
        <PrevMonthButton />
        {format(currentMonth, "yyyy")}년 {format(currentMonth, "MM")}월
        <NextMonthButton />
      </YearMonthWrapper>
      <CancelCalendarButton />
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 29rem;
  margin-right: 0.4rem;
  margin-bottom: 1.1rem;
  margin-left: 0.4rem;

  font-size: 1.1rem;
`;

const CalendarText = styled.p`
  ${({ theme }) => theme.fonts.title02};
`;

const YearMonthWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;
  gap: 1rem;

  width: 12rem;
  ${({ theme }) => theme.fonts.body06};
`;

const PrevMonthButton = styled(PrevMonthArrowButton)`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

const NextMonthButton = styled(NextMonthArrowButton)`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

const CancelCalendarButton = styled(CancelButton)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
