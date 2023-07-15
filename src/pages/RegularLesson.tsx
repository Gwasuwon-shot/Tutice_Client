import Header from '../components/RegularLesson/Header';
import LessonDate from '../components/RegularLesson/LessonDate';
import LessonInformation from '../components/RegularLesson/LessonInformation';
import ProgressBar from "../components/common/ProgressBar";
import StudentInformation from '../components/RegularLesson/StudentInformation';

export default function RegularLesson() {
  return (
  <>
    <ProgressBar progress = {50} />
    <Header />
    <StudentInformation />
    <LessonInformation />
    <LessonDate />
  </>
  );
}
