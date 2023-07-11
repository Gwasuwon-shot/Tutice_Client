import { NoClassLogoTeacherHomeIc } from "../../assets";

export default function NoClassHome() {
  return (
    <>
      <NoClassLogoTeacherHomeIc />
      <h1> 아직 등록된 수업이 없어요!</h1>
      <p> 나무 코드 생성을 통해 학생을 추가하고 </p>
      <p>링크를 학부모님에게 공유해보세요</p>
      {/* 성경이가 만들 공통 컴포넌트 연결하기 */}
      <button>나무코드 생성하기</button>
    </>
  );
}
