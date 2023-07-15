import { EditPaymentIc, FruitPaymentIc } from "../assets";
import RoundBottomMiniButton from "../components/common/RoundBottomMiniButton";
import StudentNameLabel from "../components/common/StudentNameLabel";
import { STUDENT_COLOR } from "../core/common/studentColor";
import useGetPaymentRecord from "../hooks/useGetPaymentRecord";

export default function RegisterPayment() {
  const { lesson, paymentDate } = useGetPaymentRecord();
  const { idx, studentName, subject, cycle } = lesson;
  const { value, startDate, endDate } = cycle;

  function handleGoBack() {
    // 뒤로가기
  }

  function handleReadyToRegister() {
    // 등록하기 모달 띄우기
  }

  return (
    <>
      <h1>입금일 등록</h1>
      <StudentNameLabel
        studentName={studentName}
        subject={subject}
        backgroundColor={STUDENT_COLOR[idx % 11]}
        color="#757A80"
        isBig={true}
      />
      <FruitPaymentIc />
      <p>{value}번째 열매</p>
      <p>
        {new Date(startDate).getMonth() + 1}.{new Date(startDate).getDate()}~{new Date(endDate).getMonth() + 1}.
        {new Date(endDate).getDate()}
      </p>

      <h1>입금일</h1>
      <p>
        {new Date(paymentDate).getMonth() + 1}월 {new Date(paymentDate).getDate()}일
        <EditPaymentIc />
      </p>
      <RoundBottomMiniButton isGreen={false} onClick={handleGoBack}>
        취소
      </RoundBottomMiniButton>
      <RoundBottomMiniButton isGreen={true} onClick={handleReadyToRegister}>
        등록하기
      </RoundBottomMiniButton>
    </>
  );
}
