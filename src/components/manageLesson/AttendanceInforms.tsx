import { styled } from "styled-components";
import useManageLesson from "../../hooks/useManageLesson";
import AttnedanceInform from "./AttnedanceInform";

export default function AttendanceList() {
  const { scheduleList } = useManageLesson();

  return (
    <>
      <GreyBox />
      {scheduleList.map(({ idx, date, status, startTime, endTime }) => (
        <AttnedanceInform key={idx} date={date} status={status} startTime={startTime} endTime={endTime} />
      ))}
    </>
  );
}

const GreyBox = styled.div`
  width: 32rem;
  height: 1.1rem;

  background-color: ${({ theme }) => theme.colors.grey50};
`;
