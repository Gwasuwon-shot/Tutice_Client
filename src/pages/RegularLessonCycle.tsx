import CycleInput from '../components/regularLessonCycle/CycleInput';
import Footer from '../components/regularLessonCycle/Footer';
import Header from '../components/regularLessonCycle/Header';
import {styled} from 'styled-components';

export default function RegularLessonCycle() {
    
  return (
  <RegularWrapper>
    <Header />
    <CycleInput />
    <Footer />
  </RegularWrapper>
  );
}

const RegularWrapper = styled.main`
  overflow-y: scroll; 
`