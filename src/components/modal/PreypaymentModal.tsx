import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import { lessonCodeAndPaymentId } from "../../atom/tuitionPayment/tuitionPayment";
import RoundBottomMiniButton from "../common/RoundBottomMiniButton";
import ToastModal from "../common/ToastModal";

export default function PreypaymentModal() {
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const navigate = useNavigate();
  const [codeAndId, setCodeAndId] = useRecoilState(lessonCodeAndPaymentId);
  console.log(codeAndId);
  function handleMoveToRegisterPayment() {
    setOpenModal(false);
    navigate(`/register-payment/${codeAndId?.paymentRecordIdx}`, {
      state: { paymentIdx: codeAndId?.paymentRecordIdx, count: 1 },
    });
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <ToastModal>
      <PrepaymentTitle>선불 수업비를 받으셨나요?</PrepaymentTitle>
      <PrepaymentSub>수업비 입금 정보를 입력해주세요! </PrepaymentSub>
      <ButtonWrapper>
        <RoundBottomMiniButton isGreen={false} onClick={handleCloseModal}>
          다음에 입력할게요
        </RoundBottomMiniButton>
        <RoundBottomMiniButton isGreen={true} onClick={handleMoveToRegisterPayment}>
          입력하러 가기
        </RoundBottomMiniButton>
      </ButtonWrapper>
    </ToastModal>
  );
}

const PrepaymentTitle = styled.h1`
  margin-top: 5rem;
  ${({ theme }) => theme.fonts.title02}
`;

const PrepaymentSub = styled.h2`
  margin-top: 1.6rem;
  ${({ theme }) => theme.fonts.body02}
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 29rem;

  margin-top: 4rem;
`;
