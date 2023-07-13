import RoundBottomMiniButton from "./RoundBottomMiniButton";

export default function SendAlarmCheckModal() {
  const [isClassExist, setIsClassExist] = useState(true);

  return (
    <>
      <h1>출결알림 전송</h1>
      <article>
        <p>박송현</p> 학생
        <subject></subject>의 학부모님께 3회차 수업 출결 알림을 보낼까요?
      </article>
      <RoundBottomMiniButton isGreen={false} onClick={unShowModal}>
        괜찮아요
      </RoundBottomMiniButton>
      <RoundBottomMiniButton isGreen={false} onClick={}>
        보낼래요
      </RoundBottomMiniButton>
    </>
  );
}
