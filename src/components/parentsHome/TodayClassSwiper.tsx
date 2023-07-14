import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TODAY_CLASS_SLIDER_SETTINGS } from "../../core/parentsHome/parentsHome";
import TodayClassScedule from "./TodayClassScedule";
import { styled } from "styled-components";

export default function TodayClassSwiper() {
  const dateOfWeek = "월";
  const dateStr = "2023-07-12";

  const date = new Date(dateStr);

  const year = date.getFullYear(); // 년 추출
  const month = date.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
  const day = date.getDate(); // 일 추출

  const classList = [
    {
      idx: "1",
      studentName: "박송현",
      subject: "수학",
      startTime: "17:00",
      endTime: "20:00",
      teacherName: "유수확학",
    },
    {
      idx: "2",
      studentName: "박송현",
      subject: "수학",
      startTime: "18:00",
      endTime: "20:00",
      teacherName: "유수확학",
    },
    {
      idx: "3",
      studentName: "박송현",
      subject: "수학",
      startTime: "19:00",
      endTime: "20:00",
      teacherName: "유수확학",
    },
  ];

  return (
    <>
      <SwiperTitleDate>
        {year}년 {month}월 {day}일 ({dateOfWeek}) 수업
      </SwiperTitleDate>

      <Slider {...TODAY_CLASS_SLIDER_SETTINGS}>
        {classList.map((classInfo) => {
          return (
            <TodayClassScedule
              key={classInfo.idx}
              studentName={classInfo.studentName}
              startTime={classInfo.startTime}
              endTime={classInfo.endTime}
              teacherName={classInfo.teacherName}
              subject={classInfo.subject}
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
