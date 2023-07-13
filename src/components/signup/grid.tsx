import { styled } from "styled-components";
import { TosNoneSignupIc } from "../../assets";

export default function Grid() {
  return (
    <Container>
      <CheckboxGrid>
        <ContentGrid>
          <CheckIcGrid>
            <TosNoneSignupIcon />
            <TosNoneSignupIcon />
            <TosNoneSignupIcon />
            <TosNoneSignupIcon />
          </CheckIcGrid>
        </ContentGrid>
        <ContentGrid>컨텐츠 그리드</ContentGrid>
        <ContentGrid>컨텐츠 그리드</ContentGrid>
        <ContentGrid>컨텐츠 그리드</ContentGrid>
        <ContentGrid>컨텐츠 그리드</ContentGrid>
        <ContentGrid>컨텐츠 그리드</ContentGrid>
        <ContentGrid>컨텐츠 그리드</ContentGrid>
        <ContentGrid>컨텐츠 그리드</ContentGrid>
      </CheckboxGrid>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: blue;
`;

const CheckboxGrid = styled.div`
  display: grid;

  width: 29.2rem;
  height: 20.4rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  background-color: black;
  color: white;
  border-radius: 8px;

  grid-template-columns: 1fr 5fr;

  gap: 10px;
`;
const CheckIcGrid = styled.div`
  background-color: yellow;
`;

const ContentGrid = styled.div`
  background-color: #ccc;

  grid-auto-rows: minmax(2rem, 10rem);
`;

const TosNoneSignupIcon = styled(TosNoneSignupIc)`
  width: 2rem;
  height: 2rem;
`;
