import { styled } from "styled-components";

interface TreeProgressProps {
  progress: number;
}

export default function TreeProgress(props: TreeProgressProps) {
  const { progress } = props;

  return (
    <ProgressBarWrapper>
      <Progress $progress={progress} />
    </ProgressBarWrapper>
  );
}

const ProgressBarWrapper = styled.div`
  width: 29.2rem;
  height: 0.4rem;
  border-radius: 3px;

  background-color: ${({ theme }) => theme.colors.green1};
`;

const Progress = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.green5};
  border-radius: 3px;
`;
