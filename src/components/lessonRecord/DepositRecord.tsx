import React, { useState } from "react";
import NoDeposit from "./NoDeposit";
import { styled } from "styled-components";
import DepositRecordItem from "./DepositRecordItem";
import useGetDepositRecord from "../../hooks/useGetDepositRecord";
import { useParams } from "react-router-dom";
import { DepositInfoType } from "../../type/lessonRecord/lessonRecord";

export default function DepositRecordList() {
  const { lessonId } = useParams();
  const { paymentRecordList } = useGetDepositRecord(Number(lessonId));

  return paymentRecordList ? (
    <>
      <DepositRecordListWrapper>
        {paymentRecordList?.map(({ idx, date, amount, status }: DepositInfoType, index: number) => {
          return (
            <DepositRecordItem
              count={Math.abs(index - paymentRecordList?.length)}
              key={idx}
              idx={idx}
              date={date}
              amount={amount}
              status={status}
            />
          );
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
