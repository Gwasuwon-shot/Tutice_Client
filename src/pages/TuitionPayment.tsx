import Footer from "../components/tuitionPayment/Footer";
import Header from "../components/tuitionPayment/Header";
import PaymentInput from "../components/tuitionPayment/PaymentInput";
import {styled} from 'styled-components';

export default function TuitionPayment() {
    return (
      <PaymetWrapper>
          <Header />
          <PaymentInput />
          <Footer />
      </PaymetWrapper>
    );
}

const PaymetWrapper = styled.main`
  overflow-y: scroll;
`