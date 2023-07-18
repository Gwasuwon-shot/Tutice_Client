import { useParams } from "react-router-dom";
import styled from "styled-components";
import { EditPaymentIc, FruitPaymentIc } from "../assets";
import RoundBottomMiniButton from "../components/common/RoundBottomMiniButton";
import StudentNameLabel from "../components/common/StudentNameLabel";
import { STUDENT_COLOR } from "../core/common/studentColor";
import useGetPaymentRecord from "../hooks/useGetPaymentRecord";

export default function RegisterPayment() {
  const { lesson, paymentDate } = useGetPaymentRecord();
  const { idx, studentName, subject, cycle } = lesson;
  const { value, startDate, endDate } = cycle;
  const { manageLessonId } = useParams();

  function handleGoBack() {
    // 뒤로가기
  }

  function handleReadyToRegister() {
    // 등록하기 모달 띄우기
  }

  return (
    <RegisterPaymentWrapper>
      <Title>입금일 등록</Title>
      <StudentNameLabel
        studentName={studentName}
        subject={subject}
        backgroundColor={STUDENT_COLOR[idx % 11]}
        color="#757A80"
        isBig={true}
      />
      <FruitWrapper>
        <FruitPaymentIcon />
        <Count>{value}번째 열매</Count>
        <LessonDate>
          {new Date(startDate).getMonth() + 1}.{new Date(startDate).getDate()}~{new Date(endDate).getMonth() + 1}.
          {new Date(endDate).getDate()}
        </LessonDate>
      </FruitWrapper>
      <Sub>입금일</Sub>
      <PaymentDate>
        {new Date(paymentDate).getMonth() + 1}월 {new Date(paymentDate).getDate()}일
        <EditPaymentIcon />
      </PaymentDate>
      <ButtonWrapper>
        <RoundBottomMiniButton isGreen={false} onClick={handleGoBack}>
          취소
        </RoundBottomMiniButton>
        <RoundBottomMiniButton isGreen={true} onClick={handleReadyToRegister}>
          등록하기
        </RoundBottomMiniButton>
      </ButtonWrapper>
    </RegisterPaymentWrapper>
  );
}

const Title = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 1.78rem;

  text-align: center;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title03};
`;

const RegisterPaymentWrapper = styled.section`
  padding: 0 1.8rem;
`;

const FruitPaymentIcon = styled(FruitPaymentIc)`
  width: 7.4rem;
`;

const FruitWrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 2.13rem;
  margin-bottom: 1.8rem;
`;

const Count = styled.h1`
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title03};
`;

const LessonDate = styled.p`
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.body05};
`;

const Sub = styled.h2`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title02};
`;

const PaymentDate = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 2.2rem;

  width: 28.5rem;
`;

const EditPaymentIcon = styled(EditPaymentIc)`
  width: 5rem;
  height: 5rem;
`;
