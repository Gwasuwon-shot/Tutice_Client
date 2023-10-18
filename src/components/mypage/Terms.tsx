import styled from "styled-components";

export default function Terms() {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleText>약관</TitleText>
        </TitleWrapper>
        <ContentWrapper>
          <a href="https://ubiquitous-verbena-6ff.notion.site/9e874c3c10804274a99b0d6c9b75f1c2?pvs=4">
            <ContentText>서비스 이용</ContentText>
          </a>
          <a href="https://ubiquitous-verbena-6ff.notion.site/388ff5750f004bbf81554bfa14887186?pvs=4">
            <ContentText>개인정보 수집 및 이용</ContentText>
          </a>
          <a href="https://ubiquitous-verbena-6ff.notion.site/1f3759e165504863b33506204d8c871a?pvs=4">
            <ContentText>개인정보 마케팅 활용</ContentText>
          </a>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  width: 32rem;
  margin-bottom: 1rem;
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 2.6rem;

  background-color: ${({ theme }) => theme.colors.grey20};
`;

const TitleText = styled.h1`
  margin-left: 1.4rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.4rem;
  height: 6rem;
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
  cursor: pointer;
`;
