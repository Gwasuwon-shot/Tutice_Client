import { styled } from "styled-components";
import { AttenceCheckCommonIc } from "../../assets";

export default function AttendanceCheckButton() {
  return (
    <AttendaceCheckButtonBox type="button">
      <AttenceCheckCommonIc />
      <h1>출결 체크</h1>
    </AttendaceCheckButtonBox>
  );
}

const AttendaceCheckButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.6rem 1.2rem 0.6rem 0.6rem;

  border: 1px solid ${({ theme }) => theme.colors.green3};
  background-color: ${({ theme }) => theme.colors.green9};
  color: ${({ theme }) => theme.colors.grey0};
  border-radius: 10px;
`;
