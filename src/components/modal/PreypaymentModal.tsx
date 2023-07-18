import RoundBottomMiniButton from "../common/RoundBottomMiniButton";

export default function PreypaymentModal() {
  return (
    <>
      <h1>선불 수업비를 받으셨나요?</h1>
      <p>
        수업비 입금 정보를 입력해주세요!
        <RoundBottomMiniButton isGreen={false} onClick={""}>
          다음에 입력할게요
        </RoundBottomMiniButton>
        <RoundBottomMiniButton isGreen={true} onClick={""}>
          입력하러 가기
        </RoundBottomMiniButton>
      </p>
    </>
  );
}
