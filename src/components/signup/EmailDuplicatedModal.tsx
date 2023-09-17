import styled from "styled-components";
import BasicSingleModal from "../common/BasicSingleModal";

interface EmailDuplicatedModalProps {
  handleCloseModal(): void;
}

export default function EmailDuplicatedModal(props: EmailDuplicatedModalProps) {
  const { handleCloseModal } = props;
  return (
    <BasicSingleModal buttonName="확인" handleClickSingleButton={handleCloseModal}>
      <EmailIsDuplicated>이미 사용 중인 이메일 입니다.</EmailIsDuplicated>
    </BasicSingleModal>
  );
}
const EmailIsDuplicated = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;

  ${({ theme }) => theme.fonts.body02};
`;
