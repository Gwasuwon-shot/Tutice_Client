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

interface AlertSignupProp {
  setIsWelcome: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertSignup(prop: AlertSignupProp) {
  const userRole = useRecoilValue(userRoleData);
  const navigate = useNavigate();
  const [deviceToken, setDeviceToken] = useState<AppCheckTokenResult>({
    token: "",
  });
  const [lessonIndex, setLessonIndex] = useRecoilState(connectLessonId);

  const { setIsWelcome } = prop;
  const MAIN_TEXT = `수업 나무를 통한 \n 쉬운 관리를 위해\n 알림을 활성화 해보세요 `;

  const SUB_TEXT = "푸시알림을 활성화를 통해 \n 출결, 수업비 관리를 도울 수 있어요";

  async function handleAllowNotification() {
    const permission = await Notification.requestPermission();

    console.log(permission);
    registerServiceWorker();

    // try {
    //   await getDeviceToken();
    //   deviceToken?.token !== "" && patchingDeviceToken(deviceToken.token);
    // } catch (error) {
    //   console.error(error);
    // }

    // if (userRole === "부모님") {
    //   navigate("/lessonCode");
    // } else {
    //   navigate("/");
    // }
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
    });

    setDeviceToken({
      token: token,
    });
  }

  console.log(deviceToken);

  useEffect(() => {
    console.log(deviceToken);
    deviceToken?.token !== "" && deviceToken?.token !== undefined && patchingDeviceToken(deviceToken?.token);
  }, [deviceToken]);

  async function getDeviceToken() {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
    });

    setDeviceToken({
      token: token,
    });
  }

  const { mutate: patchingDeviceToken } = useMutation(patchDeviceToken, {
    onSuccess: (res) => {
      if (userRole === "부모님") {
        navigate(`/${lessonIndex}`);
      } else {
        navigate("/");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleShowNotification() {
    postNotificationRequest(deviceToken.token);
  }

  return (
    <>
      <BackButtonSignupIcon onClick={() => setIsWelcome(true)} />
      <Container>
        <BellWelcomeIcon />
        <SignupTitleLayout MainText={MAIN_TEXT} />
        <SubText>{SUB_TEXT}</SubText>
      </Container>
      {/* <p>{deviceToken?.token}</p> */}
      <ButtonLayout onClick={handleAllowNotification} buttonText="할래요!" />
    </>
  );
}

const Container = styled.div`
  margin-top: 6rem;
`;
const BellWelcomeIcon = styled(BellWelcomeIc)`
  width: 2.9rem;
  height: 3.3rem;
  margin-bottom: 1.5rem;
`;

const SubText = styled.p`
  margin-top: 2.2rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body04};
`;

const BackButtonSignupIcon = styled(BackButtonSignupIc)`
  width: 4rem;
  height: 4rem;
  margin-left: -1.4rem;
`;
