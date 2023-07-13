interface WaitingFruitsProp {
  leftCount: number;
}

export default function WaitingFruits(props: WaitingFruitsProp) {
  const { leftCount } = props;

  return <>열매가 열리기 까지 {leftCount}회차 남았습니다</>;
}
