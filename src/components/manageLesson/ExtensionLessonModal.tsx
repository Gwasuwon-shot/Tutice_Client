import { AttendanceLessonType } from "../../type/common/attendanceLessonType";
import RoundBottomMiniButton from "../common/RoundBottomMiniButton";
import StudentNameLabel from "../common/StudentNameLabel";
import ToastModal from "../common/ToastModal";
import { attendanceLesson } from "../../atom/attendanceCheck/attendanceLesson";
import { createLessonMaintenance } from "../../api/createLessonMaintenance";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";
import { styled } from "styled-components";
import useModal from "../../hooks/useModal";
import {useMutation} from 'react-query';
import { useRecoilState } from "recoil";

interface ExtensionLessonModalProps {
  studentName: string;
  subject: string;
  backgroundColor: string;
  color: string;
  isBig: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface createLessonMaintenanceProps {
  "lessonIdx" : number,
"isLessonMaintenance": boolean,
}

export default function ExtensionLessonModal(props: ExtensionLessonModalProps) {
  const { studentName, subject, backgroundColor, color, isBig, setIsSuccess } = props;
  const { unShowModal } = useModal();
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);
  
  /**
   * 
   const [selectedLesson, setSelectedLesson] = useRecoilState<AttendanceLessonType>(attendanceLesson);
   setSelectedLesson({ ...selectedLesson, lessonIdx: idx, studentName: studentName, count: count, subject: subject });
   attendanceLesson 의 lessonIdx -> 
  */

  const [selectedLesson, setSelectedLesson] = useRecoilState<AttendanceLessonType>(attendanceLesson);
  
  const postInformationTrue = {
    "lessonIdx" : selectedLesson.lessonIdx,
    "isLessonMaintenance": true,
  }

  const postInformationFalse = {
    "lessonIdx" : selectedLesson.lessonIdx,
    "isLessonMaintenance": false,
  }
  
  const {mutate: createNewLessonMaintenance} = useMutation(
    createLessonMaintenance,
    {
      onSuccess: (response) => {
        console.log('성공');
      },
      onError: (error) => console.log(error),
    }
  )
  
  function handleExtensionLesson() {
    //서버 api 통신 onSucess
    createNewLessonMaintenance(postInformationTrue);
    
    // 지수 코드
    unShowModal();
    setSanckBarOpen(true);
    setIsSuccess(true);
  }

  function handleNotExtensionLesson() {
    //서버 api 통신 onSucess
    createNewLessonMaintenance(postInformationFalse);

    // 지수 코드
    unShowModal();
    setSanckBarOpen(true);
    setIsSuccess(false);
  }

  return (
    <ModalWrapper>
      <ToastModal>
        <ModalTitle>수업 회차 연장</ModalTitle>
        <TextWrapper>
          <StudentNameLabel
            studentName={studentName}
            subject={subject}
            backgroundColor={backgroundColor}
            color={color}
            isBig={isBig}
          />
        </TextWrapper>
        <TextWrapper>
          <p> 수업 회차가 모두 완료됐어요 </p>
          <p>수업을 계속해서 연장하시겠어요?</p>
        </TextWrapper>
        <ButtonWrapper>
          <RoundBottomMiniButton isGreen={false} onClick={handleNotExtensionLesson}>
            아니요
          </RoundBottomMiniButton>
          <RoundBottomMiniButton isGreen={true} onClick={handleExtensionLesson}>
            연장할래요
          </RoundBottomMiniButton>
        </ButtonWrapper>
      </ToastModal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;

  margin: -24rem 0 0 -1.5rem;
`;

const ModalTitle = styled.h1`
  margin: 1rem 0 1.6rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title02};
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 29.5rem;
  margin-top: 4.2rem;
`;
