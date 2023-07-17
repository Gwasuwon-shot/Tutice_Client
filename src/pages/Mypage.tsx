import React from "react";
import styled from "styled-components";
import Header from "../components/mypage/Header";
import Terms from "../components/mypage/Terms";
import Account from "../components/mypage/Account";

export default function Mypage() {
  return (
    <>
      <MyPageWrapper>
        <Header />
        <Terms />
        <Account />
      </MyPageWrapper>
    </>
  );
}

const MyPageWrapper = styled.main`
  margin-top: 8rem;
`;
