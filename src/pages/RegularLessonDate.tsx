import DateInput from '../components/regularLessonDate/DateInput';
import Footer from '../components/regularLessonDate/Footer';
import Header from '../components/regularLessonDate/Header';
import {styled} from 'styled-components';

export default function RegularLessonDate() {
    
  return (
  <RegularWrapper>
    <Header />
    <DateInput />
    <Footer />
  </RegularWrapper>
  );
}

const RegularWrapper = styled.main`
  overflow-y: scroll; 
`