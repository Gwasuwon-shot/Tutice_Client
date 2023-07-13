import Header from '../components/RegularLesson/Header';
import LessonDate from '../components/RegularLesson/LessonDate';
import LessonInformation from '../components/RegularLesson/LessonInformation';
import StudentInformation from '../components/RegularLesson/StudentInformation';

export default function RegularLesson() {
  return (
  <>
    <Header />
    <StudentInformation />
    <LessonInformation />
    <LessonDate />
  </>
  );
}
