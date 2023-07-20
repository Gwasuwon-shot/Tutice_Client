import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TODAY_CLASS_SLIDER_SETTINGS } from "../../core/parentsHome/parentsHome";
import TodayClassScedule from "./TodayClassScedule";
import { styled } from "styled-components";
import useGetTodayScheduleByParents from "../../hooks/useGetTodayScheduleByParents";

interface calssInfoType {
  idx: number;
  teacherName: string;
  studentName: string;
  startTime: string;
  endTime: string;
  subject: string;
}

export default function TodayClassSwiper() {
  const dateOfWeek = "월";
  const dateStr = "2023-07-12";

  const date = new Date(dateStr);

  const year = date.getFullYear(); // 년 추출
  const month = date.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
  const day = date.getDate(); // 일 추출

  const { scheduleList } = useGetTodayScheduleByParents();

  return (
    <>
      <SwiperTitleDate>
        {year}년 {month}월 {day}일 ({dateOfWeek}) 수업
      </SwiperTitleDate>

      <Slider {...TODAY_CLASS_SLIDER_SETTINGS}>
        {scheduleList?.map((classInfo: calssInfoType) => {
          const { idx, studentName, startTime, endTime, teacherName, subject } = classInfo;
          return (
            <TodayClassScedule
              key={idx}
              studentName={studentName}
              startTime={startTime}
              endTime={endTime}
              teacherName={teacherName}
              subject={subject}
              classCount={idx}
            />
          );
        })}
      </Slider>
    </>
  );
}

const SwiperTitleDate = styled.p`
  margin-top: 1.6rem;
  margin-left: 1.8rem;

  ${({ theme }) => theme.fonts.body07};
  color: ${({ theme }) => theme.colors.grey600};
`;
