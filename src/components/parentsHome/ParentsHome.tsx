import { styled } from "styled-components";
import useGetLessonByUser from "../../hooks/useGetLessonByUser";
import Header from "../common/Header";
import ManageClass from "./ManageClass";
import NoClassParentsHome from "./NoClassParentsHome";
import TodayClassSwiper from "./TodayClassSwiper";

export default function ParentsHome() {
  const { isLessonExist } = useGetLessonByUser();

  return (
    <>
      <Header />

      <WelComeTitle>
        장지수님 <br /> 안녕하세요!
      </WelComeTitle>

      {isLessonExist ? (
        <ClassInfoWrapper>
          <TodayClassSwiper />
          <ManageClass />
        </ClassInfoWrapper>
      ) : (
        <NoClassParentsHome />
      )}
    </>
  );
}

const WelComeTitle = styled.h1`
  margin-top: 2rem;
  margin-left: 1.8rem;

  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.grey900};
`;

const ClassInfoWrapper = styled.main`
  width: 100%;
`;
