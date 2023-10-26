import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { useNavigate } from "react-router-dom";
import useGetAllLessons from "../../hooks/useGetAllLessons";
import { getLessonByTeacher } from "../../api/getLessonByTeacher";

interface lessonListType {
  idx: number;
  teacherName: string;
  studentName: string;
  subject: string;
  count: number;
  nowCount: number;
  percent: number;
}

export default function WelcomeLayout() {
  const navigate = useNavigate();
  const userRole = useRecoilValue(userRoleData);
  const [lessonInfo, setLessonInfo] = useState<lessonListType[]>();

  async function checkIfLessonExists() {
    const data = await getLessonByTeacher();
    setLessonInfo(data);
  }

  useEffect(() => {
    if (userRole == "선생님") checkIfLessonExists();
    else checkAlarmAlert();
  }, []);

  useEffect(() => {
    if (lessonInfo) checkAlarmAlert();
  }, [lessonInfo]);

  async function checkAlarmAlert() {
    const permission = await Notification.requestPermission();

    if (permission == "granted" || permission == "denied") {
      if (userRole == "선생님") {
        lessonInfo && lessonInfo.length ? navigate("/home") : navigate("/tree");
      } else navigate("/home");
    } else {
      navigate("/alert");
    }
  }

  return (
    <>
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  white-space: pre-line;
`;
