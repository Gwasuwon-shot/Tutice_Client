import useGetAllLessons from "../../hooks/useGetAllLessons";
import MainLesson from "./MainLesson";

export default function MainLessons() {
  const { lessonList } = useGetAllLessons();

  return (
    <>
      <h1>나의 수업</h1>
      {lessonList.map(({ idx, studentName, subject, percent, dayOfWeekList }) => (
        <MainLesson
          key={idx}
          idx={idx}
          studentName={studentName}
          subject={subject}
          percent={percent}
          dayOfWeekList={dayOfWeekList}
        />
      ))}
    </>
  );
}
