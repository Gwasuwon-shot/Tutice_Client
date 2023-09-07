import React from "react";
import { styled } from "styled-components";
import { ParentsFooterType } from "../../type/parentsHome/ParentsFooterType";
import { useRecoilState } from "recoil";
import { parentsFooterCategory } from "../../atom/common/parentsFooterCategory";
import useParentsFooter from "../../hooks/useParentsFooter";
import ParentsFooterIcons from "./ParentsFooterIcons";

export default function ParentsFooter() {
  const [parentsFooterList, setParentsFooterList] = useRecoilState<ParentsFooterType[]>(parentsFooterCategory);
  const { handleMoveToPage } = useParentsFooter();

  return (
    <ParentsFooterWrapper>
      {parentsFooterList.map(({ id, category, isMoved }) => (
        <Icon key={id} onClick={() => handleMoveToPage(category)}>
          <ParentsFooterIcons category={category} isMoved={isMoved} />
          <MenuName $isMoved={isMoved}>{category}</MenuName>
        </Icon>
      ))}
    </ParentsFooterWrapper>
  );
}

const ParentsFooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 7.2rem;

  position: fixed;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey50};
  border-radius: 1.8rem 1.8rem 0rem 0rem;
  background-color: white;
  padding-top: 1.2rem;

  z-index: 100;
`;

const Icon = styled.i`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  cursor: pointer;
`;

const MenuName = styled.p<{ $isMoved: boolean }>`
  ${({ theme }) => theme.fonts.caption01};

  color: ${({ theme, $isMoved }) => ($isMoved ? theme.colors.green9 : theme.colors.grey150)};
`;
