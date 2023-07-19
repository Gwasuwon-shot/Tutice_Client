import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { keyframes, styled } from "styled-components";
import { CheckButtonSnackBarIc, XButtonSnackBarIc } from "../../assets";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";

interface SnackBarPopupProps {
  isCheck: boolean;
  children: ReactNode;
}

export default function SnackBarPopup(props: SnackBarPopupProps) {
  const { isCheck, children } = props;
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);

  useEffect(() => {
    setTimeout(() => {
      setSanckBarOpen(false);
    }, 2500);
  }, []);

  function handleCloseSnackBarPopup() {
    setSanckBarOpen(false);
  }

  return (
    <SnackBarContainer>
      <SnackBar>
        <Contents>
          {isCheck && <CheckButtonSnackBarIcon />}
          {children}
        </Contents>
        <XButtonSnackBarIcon onClick={handleCloseSnackBarPopup} />
      </SnackBar>
    </SnackBarContainer>
  );
}

const Slide = keyframes`
 from {
		transform: translate(0,15rem);
    }
    to {
        transform: translate(0, 0rem);
    }
`;

const SnackBar = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 29.2rem;
  padding: 0.8rem 1rem;

  background-color: ${({ theme }) => theme.colors.grey900};

  border-radius: 0.8rem;
`;

const SnackBarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 9.4rem;

  width: 32rem;

  animation: ${Slide} 0.5s linear forwards;
`;

const XButtonSnackBarIcon = styled(XButtonSnackBarIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Contents = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CheckButtonSnackBarIcon = styled(CheckButtonSnackBarIc)`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 0.7rem;
`;
