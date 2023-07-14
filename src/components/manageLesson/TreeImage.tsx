import { styled } from "styled-components";
import useManageLesson from "../../hooks/useManageLesson";
import TreeProgress from "../common/TreeProgress";

export default function TreeImage() {
  const { lesson } = useManageLesson();
  const { count, nowCount, percent } = lesson;

  return (
    <>
      {/* 이미지 넣기 */}
      <CountBox>
        {count - nowCount}회/ 총 {count}회
      </CountBox>
      <TreeProgress progress={percent} width={29.2} />
    </>
  );
}

const CountBox = styled.p`
  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.body02};
`;
