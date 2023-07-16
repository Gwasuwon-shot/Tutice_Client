import React from "react";
import { styled } from "styled-components";
import ProgressBar from "../common/ProgressBar";
import { PROGRESS_TREE_IMG_LIST } from "../../core/common/ProgressTree";

interface RestOfClassesInfoProps {
  count: number;
  nowCount: number;
  percent: number;
}

export default function RestOfClassesInfo(props: RestOfClassesInfoProps) {
  const { count, nowCount, percent } = props;
  let treeImgSrc = "";

  if (percent <= 20) {
    treeImgSrc = PROGRESS_TREE_IMG_LIST[1];
  } else if (percent > 20 && percent <= 40) {
    treeImgSrc = PROGRESS_TREE_IMG_LIST[2];
  } else if (percent > 40 && percent <= 60) {
    treeImgSrc = PROGRESS_TREE_IMG_LIST[3];
  } else if (percent > 60 && percent <= 80) {
    treeImgSrc = PROGRESS_TREE_IMG_LIST[4];
  } else {
    treeImgSrc = PROGRESS_TREE_IMG_LIST[5];
  }

  return (
    <RestOfClassesInfoWrapper>
      <RestOfClassesTitle>
        열매가 열리기 까지 <br />
        {count - nowCount}회차 남았습니다
      </RestOfClassesTitle>

      <ProgressTreeIcon src={treeImgSrc} />

      <ClassStatusInfo>
        {nowCount}회/ 총 {count}회
      </ClassStatusInfo>
      <ProgressBar progress={percent} />
    </RestOfClassesInfoWrapper>
  );
}

const RestOfClassesInfoWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  margin-left: 1.4rem;

  width: 100%;

  padding-bottom: 1.5rem;
`;

const RestOfClassesTitle = styled.h1`
  margin-bottom: 5.2rem;

  ${({ theme }) => theme.fonts.title02};
  color: ${({ theme }) => theme.colors.grey900};
`;

const ProgressTreeIcon = styled.img`
  align-self: center;

  width: 12.6rem;
  margin-bottom: 1.5rem;
`;

const ClassStatusInfo = styled.p`
  position: absolute;
  right: 1.3rem;
  bottom: 1.5rem;

  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey500};
`;
