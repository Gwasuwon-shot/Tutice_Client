import useManageLesson from "../../hooks/useManageLesson";

export default function TreeImage() {
  const { lesson } = useManageLesson();
  const { count, nowCount } = lesson;

  return (
    <>
      {/* 이미지 넣기 */}
      <>
        {count - nowCount}회/ 총 {count}회
      </>
    </>
  );
}
