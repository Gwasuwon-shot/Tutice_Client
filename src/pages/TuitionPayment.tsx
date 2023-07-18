import Footer from "../components/tuitionPayment/Footer";
import Header from "../components/tuitionPayment/Header";
import PaymentInput from "../components/tuitionPayment/PaymentInput";
import ProgressBar from "../components/common/ProgressBar";

export default function TuitionPayment() {
    return (
      <>
          <ProgressBar progress = {75} />
          <Header />
          <PaymentInput />
          <Footer />
      </>
    );
}