import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useGetLessonPaymentRecordByTeacher from "../../hooks/useGetLessonPaymentRecordByTeacher";
import { PaymentRecordType } from "../../type/manageLesson/paymentRecordType";
import SendPaymentAlarmManageLessonModal from "./SendPaymentAlarmManageLessonModal";
import StudentPayment from "./StudentPayment";

export default function StudentPayments() {
  const { manageLessonId } = useParams();
  const { lesson, todayDate, paymentRecordList } = useGetLessonPaymentRecordByTeacher(Number(manageLessonId)); //lessonIdx 넣어주어야함
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [payMentAlarmOpen, setPayMentAlarmOpen] = useState(false);

  function checkRealDate(date: string | null) {
    return date !== null ? date : todayDate;
  }

  return (
    <>
      {openModal && payMentAlarmOpen && (
        <SendPaymentAlarmManageLessonModal
          studentName={lesson?.studentName}
          subject={lesson?.subject}
          backgroundColor={STUDENT_COLOR[Number(manageLessonId) % 10]}
          color="#757A80"
          isBig={false}
        />
      )}
      <StudentPaymentsWrapper>
        {paymentRecordList?.map(({ idx, date, amount, status }: PaymentRecordType, index: number) => (
          <StudentPayment
            key={idx}
            idx={idx}
            date={checkRealDate(date)}
            amount={amount}
            status={status}
            count={Math.abs(index - paymentRecordList.length)}
            setPayMentAlarmOpen={setPayMentAlarmOpen}
          />
        ))}
      </StudentPaymentsWrapper>
    </>
  );
}

const StudentPaymentsWrapper = styled.section`
  margin-top: 1.6rem;
`;
