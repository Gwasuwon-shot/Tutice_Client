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
    const lessonInfo = await getLessonByTeacher();
    lessonInfo.length > 0 ? setIfLessonExists(true) : setIfLessonExists(false);
  }

  useEffect(() => {
    checkIfLessonExists();
  }, []);

  useEffect(() => {
    checkAlarmAlert();
  }, [ifIsLessonExists]);

  async function checkAlarmAlert() {
    const permission = await Notification.requestPermission();

    if (permission == "granted" || permission == "denied") {
      if (userRole == "선생님") {
        console.log(userRole);
        ifIsLessonExists ? navigate("/home") : navigate("/tree");
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
