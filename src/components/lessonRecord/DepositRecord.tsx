import React, { useState } from "react";
import NoDeposit from "./NoDeposit";
import { styled } from "styled-components";
import DepositRecordItem from "./DepositRecordItem";

export default function DepositRecordList() {
  const [isDepositRecordExists, setIsDepositRecordExists] = useState(true);

  const PAYMENT_LIST = [
    {
      idx: 34,
      date: null,
      amount: 300000,
      status: false,
    },
    {
      idx: 54,
      date: "2023-08-23",
      amount: 300000,
      status: true,
    },
    {
      idx: 37,
      date: "2023-07-23",
      amount: 300000,
      status: true,
    },
  ];

  return isDepositRecordExists ? (
    <>
      <DepositRecordListWrapper>
        {PAYMENT_LIST.map(({ idx, date, amount, status }) => {
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
