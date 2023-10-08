import { useEffect, useState } from "react";
import { CopylessonShareIc, ShareOthersLessonShareIc } from "../assets";
import { studentNameState, subjectNameState } from "../atom/common/datePicker";
import { cycleNumberState, dateState, dayState, firstLessonDay, focusDayState } from "../atom/timePicker/timePicker";
import {
  accountNumber,
  bankName,
  moneyAmount,
  payingPersonName,
  paymentOrder,
} from "../atom/tuitionPayment/tuitionPayment";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { lessonCodeAndPaymentId } from "../atom/tuitionPayment/tuitionPayment";
import { ProgressBar } from "../components/common";
import BottomButton from "../components/common/BottomButton";
import { KakaoShare } from "../components/lessonShare/KakaoShare";
import useGetLessonByUser from "../hooks/useGetLessonByUser";

interface dayProps {
  year: number;
  month: number;
  date: number;
}

interface Day {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

interface LessonShareProp {
  isAfterRegister: boolean;
}

export default function LessonShare(props: LessonShareProp) {
  const { isAfterRegister } = props;

  const [cycleNumber, setcycleNumberState] = useRecoilState(cycleNumberState);
  const [date, setdateState] = useRecoilState(dateState);
  const [day, setdayState] = useRecoilState(dayState);
  const [firstLesson, setfirstLessonDay] = useRecoilState(firstLessonDay);
  const [focusDay, setfocusDayState] = useRecoilState(focusDayState);
  const [studentName, setStudentName] = useRecoilState<string>(studentNameState);
  const [subjectName, setsubjectNameState] = useRecoilState(subjectNameState);
  const [accountNum, setaccountNumber] = useRecoilState(accountNumber);
  const [bank, setbankName] = useRecoilState(bankName);
  const [money, setmoneyAmount] = useRecoilState(moneyAmount);
  const [payingPerson, setpayingPersonName] = useRecoilState(payingPersonName);
  const [payment, setpaymentOrder] = useRecoilState(paymentOrder);
  const { userName } = useGetLessonByUser();

  function setAllSet() {
    setcycleNumberState(-1);
    setdateState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1, date: new Date().getDate() });
    setdayState([]);
    setfirstLessonDay({ 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토", 0: "일" }[new Date().getDay()]);

    setStudentName("");
    setsubjectNameState("");
    setaccountNumber("");
    setbankName("");
    setmoneyAmount(0);
    setpayingPersonName("");
  }

  const navgiate = useNavigate();
  const [codeAndId, setCodeAndId] = useRecoilState(lessonCodeAndPaymentId);
  const [URL, setURL] = useState(`https://tutice.com/${codeAndId?.lessonCode}`);

  useEffect(() => {
    setURL(`https://tutice.com/${codeAndId?.lessonCode}`);
  }, [codeAndId]);

  function handleMoveToHome() {
    setAllSet();
    navgiate("/home");
    // recoil 값 모두 초기값으로 변경
  }

  function handleShareOtherWays() {
    if (navigator.share) {
      navigator.share({
        title: "수업링크 공유",
        text: `안녕하세요, 과외 수업 관리 필수 앱 Tutice 입니다. \n[${userName}]선생님이 [${studentName}]학생의\nTutice 초대장을 보냈습니다.\n\nTutice 링크 \n ${URL}`,

        url: URL,
      });
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.");
    }
  }

  function handleCopyLink() {
    try {
      navigator.clipboard.writeText(URL).then(() => {
        alert("클립보드에 링크가 복사되었어요.");
      });
    } catch (err) {
      alert("링크 복사에 실패했습니다");
    }
  }

  return (
    <>
      <LessonTreeSuccess>{isAfterRegister ? <>수업등록 완료</> : <>수업링크 공유</>}</LessonTreeSuccess>
      {isAfterRegister && <ProgressBar progress={100} />}
      <LessonShareWrapper>
        <ShareTitle>
          수업링크를 <br />
          학부모님께 공유해보세요
        </ShareTitle>
        <SharSub>
          학부모님에게 수업비와 출결에 관한 <br />
          알림을 드릴 수 있어요
        </SharSub>

        <TreeTitle>수업나무 링크</TreeTitle>
        <LinkBox>
          <CopylessonShareIc onClick={handleCopyLink} />
          <p>{URL}</p>
        </LinkBox>
        <ButtonWrapper>
          <ShareOthersLessonShareIcon onClick={handleShareOtherWays} />
          <KakaoShare url={URL} />
        </ButtonWrapper>
        <BottomButtonWrapper>
          <BottomButton isActive={true} onClick={handleMoveToHome} disabled={false} type="button">
            다음
          </BottomButton>
        </BottomButtonWrapper>
      </LessonShareWrapper>
    </>
  );
}

const BottomButtonWrapper = styled.section`
  margin-left: -1.4rem;
`;

const LessonTreeSuccess = styled.p`
  padding: 1.2rem 12.1rem;

  text-align: center;

  /* color: ${({ theme }) => theme.colors.green5}; */
  ${({ theme }) => theme.fonts.body01};
`;

const LessonShareWrapper = styled.section`
  margin-top: 2.4rem;
  padding: 0 1.4rem;
`;

const ShareTitle = styled.h1`
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title01};
`;

const SharSub = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.body06};
`;

const TreeTitle = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 0.4rem;

  color: ${({ theme }) => theme.colors.green4};
  ${({ theme }) => theme.fonts.body06};
`;

const LinkBox = styled.label`
  display: flex;
  width: 29.2rem;
  height: 4.6rem;
  padding: 0.8rem 1.5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.green1};

  color: ${({ theme }) => theme.colors.grey700};
  ${({ theme }) => theme.fonts.body02};
`;

const ButtonWrapper = styled.section`
  display: flex;

  justify-content: space-between;
  margin-top: 6.6rem;
`;

const ShareOthersLessonShareIcon = styled(ShareOthersLessonShareIc)`
  width: 14.2rem;
  height: 6.4rem;
`;
