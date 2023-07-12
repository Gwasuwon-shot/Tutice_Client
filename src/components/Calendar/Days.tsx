import React from "react";
import styled from "styled-components";
import { isToday, format, endOfMonth, endOfWeek, startOfMonth, startOfWeek, addDays, isSunday } from "date-fns";

interface DaysProp {
  currentMonth: Date;
}

export default function Days(props: DaysProp) {
  const { currentMonth } = props;
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate: Date = endOfWeek(monthEnd);

  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];
  let day: Date = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const sunDay = isSunday(day);
      const isTodayDate = isToday(day);

      days.push(
        <Day key={day.toString()} $issunday={sunDay}>
          <DayText $istoday={isTodayDate} $isnotvalid={format(currentMonth, "M") !== format(day, "M")}>
            {formattedDate}
          </DayText>
        </Day>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <WeekWrapper key={day.toString()}>
        <DivideLine />
        <DayWrapper>{days}</DayWrapper>
      </WeekWrapper>,
    );
    days = [];
  }

  return (
    <>
      <Wrapper>{rows}</Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: auto;
`;

const WeekWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 28.3rem;
`;

const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 28.3rem;
`;

interface DayProp {
  $issunday: boolean;
}

const Day = styled.article<DayProp>`
  display: flex;
  justify-content: space-between;

  ${({ $issunday }) => `
    ${$issunday ? "color: #FCB3A6" : undefined}
  `};

  height: 6rem;
`;

interface DayTextProps {
  $isnotvalid: boolean;
  $istoday: boolean;
}

const DayText = styled.p<DayTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.6rem;
  height: 1.6rem;

  ${({ $isnotvalid, $istoday }) => `
    ${$istoday ? "color: white; background-color: #0DA98E; border-radius: 50%; " : ""}
    ${$isnotvalid ? "color: #899199" : "#CED4DA"}
  `};

  ${({ theme }) => theme.fonts.caption01};
`;

const DivideLine = styled.span`
  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  width: 32rem;
  margin-bottom: 0.6rem;
`;
