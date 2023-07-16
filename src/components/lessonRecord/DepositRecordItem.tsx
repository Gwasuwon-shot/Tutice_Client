import { styled } from "styled-components";
import { DEPOSIT_RECORD_IMG_LIST } from "../../core/Parents/DepositRecordImgSrc";

interface DepositRecordItemProps {
  idx: number;
  date: string | null;
  status: boolean;
  amount: number;
}

export default function DepositRecordItem(props: DepositRecordItemProps) {
  const { idx, date, status, amount } = props;
  const appleImgSrc = status ? DEPOSIT_RECORD_IMG_LIST[1] : DEPOSIT_RECORD_IMG_LIST[0];

  const depositAmountToRender = amount.toLocaleString("ko-KR");

  const dateObject = new Date(date);

  const month = dateObject.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
  const day = dateObject.getDate(); // 일 추출

  return (
    <DepositRecordWrapper>
      <DepositRecordAppleIcon src={appleImgSrc} />
      <DepositInfoWrapper>
        <DepositCount>{idx}번째 열매</DepositCount>
        {date && (
          <DepositDate>
            {month}월 {day}일
          </DepositDate>
        )}
      </DepositInfoWrapper>

      <DepositAmount>{status ? depositAmountToRender : "미입금"}</DepositAmount>
    </DepositRecordWrapper>
  );
}

const DepositRecordWrapper = styled.article`
  display: flex;
  align-items: center;

  width: 29.2rem;
  height: 7rem;
`;

const DepositRecordAppleIcon = styled.img`
  width: 4.4rem;
`;

const DepositInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  margin-left: 1.6rem;
`;

const DepositCount = styled.p`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
`;

const DepositDate = styled.time`
  ${({ theme }) => theme.fonts.body05};
  color: ${({ theme }) => theme.colors.grey600};
`;

const DepositAmount = styled.strong`
  width: 100%;
  text-align: right;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey600};
`;
