import Footer from '../components/RegularLesson/Footer';
import Header from '../components/RegularLesson/Header';
import LessonDate from '../components/RegularLesson/LessonDate';
import LessonInformation from '../components/RegularLesson/LessonInformation';
import ProgressBar from "../components/common/ProgressBar";
import StudentInformation from '../components/RegularLesson/StudentInformation';
import {styled} from 'styled-components';

export default function RegularLesson() {
    
  return (
  <RegularWrapper>
    <Header />
    <ProgressBar progress = {50} />
    <StudentInformation />
    <LessonInformation />
    <LessonDate />
    <Footer />
  </RegularWrapper>
  );
}

const RegularWrapper = styled.main`
  overflow-y: scroll; 
`