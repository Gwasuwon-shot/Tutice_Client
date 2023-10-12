import { AppCheckTokenResult } from "firebase/app-check";
import { getToken } from "firebase/messaging";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { patchDeviceToken } from "../../api/patchDeviceToken";
import { AlarmDeniedIc, AlarmGrantedIc } from "../../assets";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { connectLessonId } from "../../atom/registerLesson/registerLesson";
import { messaging } from "../../core/notification/settingFCM";
import { registerServiceWorker } from "../../utils/common/notification";

export default function Alarm() {
  const [isGranted, setIsGranted] = useState(false);
  const [deviceToken, setDeviceToken] = useState<AppCheckTokenResult>({
    token: "",
  });
  const userRole = useRecoilValue(userRoleData);
  const navigate = useNavigate();

  const [lessonIndex, setLessonIndex] = useRecoilState(connectLessonId);

  async function checkPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      setIsGranted(true);
    } else {
      setIsGranted(false);
    }
  }

  useEffect(() => {
    checkPermission();
  }, []);

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

  const { mutate: patchingDeviceToken } = useMutation(patchDeviceToken, {
    onSuccess: (res) => {
      setIsGranted(true);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleAlarm() {
    if (!isGranted) {
      handleAllowNotification();
    }
  }

  return (
    <>
      <TitleWrapper>
        <TitleText>푸시 알림</TitleText>
      </TitleWrapper>
      <ContentWrapper>
        <ContentText>알림 허용</ContentText>
        <div onClick={handleAlarm}>{isGranted ? <AlarmGrantedIcon /> : <AlarmDeniedIcon />}</div>
      </ContentWrapper>
    </>
  );
}

const ContentText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.4rem;
  height: 6rem;
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-right: 1.4rem;
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 2.6rem;

  background-color: ${({ theme }) => theme.colors.grey20};
`;

const TitleText = styled.h1`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};

  margin-left: 1.4rem;
`;

const AlarmGrantedIcon = styled(AlarmGrantedIc)`
  width: 4rem;
`;

const AlarmDeniedIcon = styled(AlarmDeniedIc)`
  width: 4rem;
`;
