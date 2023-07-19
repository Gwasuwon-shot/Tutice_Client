import Footer from "../components/tuitionPayment/Footer";
import Header from "../components/tuitionPayment/Header";
import PaymentInput from "../components/tuitionPayment/PaymentInput";
import ProgressBar from "../components/common/ProgressBar";
import {styled} from 'styled-components';

export default function TuitionPayment() {
    return (
      <PaymetWrapper>
          <ProgressBar progress = {75} />
          <Header />
          <PaymentInput />
          <Footer />
      </PaymetWrapper>
    );
}

const PaymetWrapper = styled.main`
  overflow-y: scroll;
`