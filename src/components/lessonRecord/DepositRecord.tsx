import React, { useState } from "react";
import NoDeposit from "./NoDeposit";
import { styled } from "styled-components";
import DepositRecordItem from "./DepositRecordItem";
import useGetDepositRecord from "../../hooks/useGetDepositRecord";
import { useParams } from "react-router-dom";
import { DepositInfoType } from "../../type/lessonRecord/lessonRecord";

export default function DepositRecordList() {
  const [isDepositRecordExists, setIsDepositRecordExists] = useState(true);
  const { lessonId } = useParams();
  const { paymentRecordList } = useGetDepositRecord(Number(lessonId));
  console.log(paymentRecordList);

  return isDepositRecordExists ? (
    <>
      <DepositRecordListWrapper>
        {paymentRecordList?.map(({ idx, date, amount, status }: DepositInfoType) => {
          return <DepositRecordItem key={idx} idx={idx} date={date} amount={amount} status={status} />;
        })}
      </DepositRecordListWrapper>
    </>
  ) : (
    <NoDeposit />
  );
}

const DepositRecordListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 2.4rem;
`;
