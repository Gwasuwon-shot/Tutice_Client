import { styled } from "styled-components";
import useGetLessonByUser from "../../hooks/useGetLessonByUser";
import Header from "../common/Header";
import ManageClass from "./ManageClass";
import NoClassParentsHome from "./NoClassParentsHome";
import TodayClassSwiper from "./TodayClassSwiper";
import useGetTodayScheduleByParents from "../../hooks/useGetTodayScheduleByParents";
import useParentsFooter from "../../hooks/useParentsFooter";
import ParentsFooter from "../common/ParentsFooter";
import { useEffect } from "react";
import { PARENTS_FOOTER_CATEGORY } from "../../core/parentsHome/parentsFooter";

export default function ParentsHome() {
  const { isLessonExist } = useGetLessonByUser();
  const { parentsName } = useGetTodayScheduleByParents();

  const { handleChangeActive } = useParentsFooter();

  useEffect(() => {
    handleChangeActive(PARENTS_FOOTER_CATEGORY.home);
  }, []);

  return (
    <>
      <Header />

      <WelComeTitle>
        {parentsName}님 <br /> 안녕하세요!
      </WelComeTitle>

      {isLessonExist ? (
        <ClassInfoWrapper>
          <TodayClassSwiper />
          <ManageClass />
        </ClassInfoWrapper>
      ) : (
        <NoClassParentsHome />
      )}

      <ParentsFooter />
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
