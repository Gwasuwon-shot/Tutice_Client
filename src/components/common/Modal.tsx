import styled from "styled-components";

export interface ModalProps {
  isShowing: boolean;
  message: string;
  handleHide: React.MouseEventHandler;
  handleConfirm: React.MouseEventHandler;
  isFinishing?: boolean; // 투표 마감하기 버튼
  isDeleteUser?: boolean; // 탈퇴하기 버튼
}

const Modal = (props: ModalProps) => {
  const {
    isShowing,
    message,
    handleHide,
    handleConfirm,
    isFinishing,
    isDeleteUser,
  } = props;
  return (
    <>
      {isShowing && (
        <StModalWrapper>
          <StModal>
            <StModalContent>{message}</StModalContent>
            <StModalSubContent isFinishing={isFinishing}>
              *마감된 투표는 <span>라이브러리</span>에서 확인 가능해요!
            </StModalSubContent>
            <StModalSubContent isDeleteUser={isDeleteUser}>
              *탈퇴시 <span>계정 및 모든 데이터</span>들이 영구 삭제됩니다!
            </StModalSubContent>
            <StButtonWrapper>
              <button type="button" onClick={handleHide}>
                취소
              </button>
              <button type="button" onClick={handleConfirm}>
                확인
              </button>
            </StButtonWrapper>
          </StModal>
        </StModalWrapper>
      )}
    </>
  );
};

export default Modal;

const StModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;

  width: 100%;
  height: 100%;
  padding: 0 6rem;

  background: rgb(0 0 0 / 70%);

  inset: 0;
`;

const StModal = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 100%;

  max-width: 43rem;

  padding: 2.1rem 2.3rem;

  background-color: red;

  border-radius: 1rem;
`;

const StModalContent = styled.p`
  padding-top: 5.3rem;
`;

const StModalSubContent = styled.p<{
  isFinishing?: boolean;
  isDeleteUser?: boolean;
}>`
  display: ${({ isFinishing }) => (isFinishing ? "block" : "none")};
  position: fixed;
  top: 51%;
  left: 50%;

  margin-top: 0.5rem;

  color: white;

  transform: translate(-50%, -50%);

  & > span {
    color: black;
  }
`;

const StButtonWrapper = styled.div`
  display: flex;

  width: 100%;
  padding-top: 4rem;

  gap: 1.2rem;

  > button {
    width: 100%;
    height: 4.1rem;

    border: none;
    background: inherit;

    border-radius: 1rem;
  }
`;
