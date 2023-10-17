import { AppCheckTokenResult } from "firebase/app-check";
import { getToken } from "firebase/messaging";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { patchDeviceToken } from "../../api/patchDeviceToken";
import { postNotificationRequest } from "../../api/postNotificationRequest";
import { BackButtonSignupIc, BellWelcomeIc } from "../../assets";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { connectLessonId } from "../../atom/registerLesson/registerLesson";
import { messaging } from "../../core/notification/settingFCM";
import { registerServiceWorker } from "../../utils/common/notification";
import SignupTitleLayout from "../signup/SignupTitleLayout";
import ButtonLayout from "./ButtonLayout";

//알림 활성화뷰
export default function AllowAlert() {
  const userRole = useRecoilValue(userRoleData);
  const navigate = useNavigate();
  const [deviceToken, setDeviceToken] = useState<AppCheckTokenResult>({
    token: "",
  });
  const [lessonIndex, setLessonIndex] = useRecoilState(connectLessonId);

  const MAIN_TEXT = `쉬운 관리를 위해\n알림을 활성화 해보세요 `;

  const SUB_TEXT = "푸시알림을 활성화를 통해 출결,\n수업비 관리 도움을 받을 수 있어요";

  // 알림 허용하기
  async function handleAllowNotification() {
    const permission = await Notification.requestPermission();

    registerServiceWorker();

    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
    });

    setDeviceToken({
      token: token,
    });
  }

  useEffect(() => {
    deviceToken?.token !== "" && deviceToken?.token !== undefined && patchingDeviceToken(deviceToken?.token);
  }, [deviceToken]);

  // 디바이브 토큰 가져오기
  async function getDeviceToken() {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
    });

    setDeviceToken({
      token: token,
    });
  }

  // 디바이스토큰 업데이트
  const { mutate: patchingDeviceToken } = useMutation(patchDeviceToken, {
    onSuccess: (res) => {
      console.log(lessonIndex);
      if (userRole === "부모님" && lessonIndex !== "") {
        navigate(`/${lessonIndex}`);
      } else {
        // userRole !== "선생님" ? navigate("/home") : setIsWelcome(false);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleShowNotification() {
    postNotificationRequest(deviceToken.token);
  }

  function handleMoveToHome() {
    if (userRole !== "선생님") {
      navigate("/home");
    } else {
    }
  }

  return (
    <>
      {/* <BackButtonSignupIcon onClick={() => setIsWelcome(false)} /> */}
      <Blank />
      <Container>
        <BellWelcomeIcon />
        <SignupTitleLayout>{MAIN_TEXT}</SignupTitleLayout>
        <SubText>{SUB_TEXT}</SubText>
        <ButtonLayout
          onClickButton={handleAllowNotification}
          onClickJump={handleMoveToHome}
          buttonText="할래요!"
          passText="괜찮아요"
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 6rem;
  margin-left: 1.4rem;
`;
const BellWelcomeIcon = styled(BellWelcomeIc)`
  width: 2.9rem;
  height: 3.3rem;
  margin-bottom: 1.5rem;
`;

const SubText = styled.p`
  margin-top: 2.2rem;
  white-space: pre-wrap;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body04};
`;

const BackButtonSignupIcon = styled(BackButtonSignupIc)`
  width: 4rem;
  height: 4rem;
  margin-left: -1.4rem;
`;

const Blank = styled.div`
  width: 4rem;
  height: 4rem;
  margin-left: -1.4rem;
`;
