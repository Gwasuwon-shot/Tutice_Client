import { styled } from "styled-components";

interface SwiperTitleLayoutProps {
  mainTitleContent: string;
  subTitleContent: string;
}

const SwiperTitleLayout = (props: SwiperTitleLayoutProps) => {
  const { mainTitleContent, subTitleContent } = props;
  return (
    <>
      <TitleWrapper>
        <MainTitle>{mainTitleContent}</MainTitle>
        <SubTitle>{subTitleContent}</SubTitle>
      </TitleWrapper>
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 3.989rem;
  margin-left: 1.4rem;
  gap: 0.5rem;
`;

const MainTitle = styled.h1`
  ${({ theme }) => theme.fonts.title01};

  color: ${({ theme }) => theme.colors.green5};
`;
const SubTitle = styled.h1`
  ${({ theme }) => theme.fonts.title02};

  color: ${({ theme }) => theme.colors.grey900};

  white-space: pre-line;
`;

export default SwiperTitleLayout;
