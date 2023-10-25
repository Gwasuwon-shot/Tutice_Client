import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { useNavigate } from "react-router-dom";
import useGetAllLessons from "../../hooks/useGetAllLessons";
import { getLessonByTeacher } from "../../api/getLessonByTeacher";

export default function WelcomeLayout() {
  const navigate = useNavigate();
  const userRole = useRecoilValue(userRoleData);
  const [ifIsLessonExists, setIfLessonExists] = useState(false);

  async function checkIfLessonExists() {
    const { lessonList } = await getLessonByTeacher();
    lessonList.length ? setIfLessonExists(true) : setIfLessonExists(false);
  }

  if (userRole === "선생님") {
    checkIfLessonExists();
  }

  useEffect(() => {
    checkAlarmAlertShow();
  }, []);

  async function checkAlarmAlertShow() {
    const permission = await Notification.requestPermission();

    if (permission == "granted" || permission == "denied") {
      if (userRole == "선생님") {
        ifIsLessonExists ? navigate("/home") : navigate("/tree");
      } else navigate("/home");
    } else {
      navigate("/alert");
    }
  }
  checkAlarmAlertShow();

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
