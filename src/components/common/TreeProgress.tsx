import { styled } from "styled-components";

interface TreeProgressProps {
  progress: number;
}

export default function TreeProgress(props: TreeProgressProps) {
  const { progress } = props;

  return (
    <ProgressBarWrapper>
      <Progress width={`${progress}%`} />
    </ProgressBarWrapper>
  );
}

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 0.4rem;

  background-color: ${({ theme }) => theme.colors.grey20};
`;

const Progress = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;

  background-color: ${({ theme }) => theme.colors.green5};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;
