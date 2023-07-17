import { CopylessonShareIc, KakaoLessonShareIc, ShareOthersLessonShareIc } from "../assets";
import BottomButton from "../components/common/BottomButton";

export default function LessonShare() {
  return (
    <>
      <p>수업 나무 생성 완료!</p>
      <h1>수업나무의 링크를 학부모님께 공유해보세요</h1>
      <p>학부모님에게 수업비와 출결에 관한 알림을 드릴 수 있어요</p>

      <p>수업나무 링크</p>
      <label>
        <CopylessonShareIc />
        <p>https://tuticetutice.com/kdfkdf11</p>
      </label>
      <ShareOthersLessonShareIc />
      <KakaoLessonShareIc />

      <BottomButton isActive={true} onClick={handleMoveToHome} disabled={false} type="button">
        다음
      </BottomButton>
    </>
  );
}
