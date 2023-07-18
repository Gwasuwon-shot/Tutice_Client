import { styled } from "styled-components";
import { bellWelcomeIc } from "../../assets";
import SignupTitleLayout from "../signup/SignupTitleLayout";
import ButtonLayout from "./ButtonLayout";
import { registerServiceWorker } from "../../utils/common/notification";
import { useEffect, useState } from "react";
import { messaging } from "../../core/notification/settingFCM";
import { AppCheckTokenResult } from "firebase/app-check";
import { getToken } from "firebase/messaging";
import { useMutation } from "react-query";
import { patchDeviceToken } from "../../api/patchDeviceToken";

export default function AlertSignup() {
  const [deviceToken, setDeviceToken] = useState<AppCheckTokenResult>({
    token: "",
  });
  const MAIN_TEXT = `수업 나무를 통한 \n 쉬운 관리를 위해\n 알림을 활성화 해보세요 `;

  const SUB_TEXT = "푸시알림을 활성화를 통해 \n 출결, 수업비 관리를 도울 수 있어요";

  // useEffect(() => {
  //   mutate(deviceToken.token);
  // }, [deviceToken]);

  async function handleAllowNotification() {
    const permission = await Notification.requestPermission();

    if (permission === "denied") {
      console.log("알림 권한 허용 안됨");
    } else if (permission === "granted") {
      console.log("알림 권한 허용됨");
    } else {
      console.log(permission);
    }

    registerServiceWorker();
    getDeviceToken().then(() => {
      console.log(deviceToken.token);
      patchingDeviceToken(deviceToken.token);
    });
  }

  async function getDeviceToken() {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
    });

    console.log(token);
    setDeviceToken({
      token: token,
    });
  }

  const { mutate: patchingDeviceToken } = useMutation(patchDeviceToken, {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      <Container>
        <BellWelcomeIcon />
        <SignupTitleLayout MainText={MAIN_TEXT} />
        <SubText>{SUB_TEXT}</SubText>
      </Container>

      <ButtonLayout onClick={() => handleAllowNotification()} buttonText={"할래요!"} />
    </>
  );
}

const Container = styled.div`
  margin-top: 3.6rem;
`;
const BellWelcomeIcon = styled(bellWelcomeIc)`
  width: 2.9rem;
  height: 3.3rem;
  margin-bottom: 1.5rem;
`;

const SubText = styled.p`
  margin-top: 2.2rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body04};
`;
