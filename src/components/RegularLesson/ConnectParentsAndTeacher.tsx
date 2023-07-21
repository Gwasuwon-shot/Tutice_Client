import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { connectLessonId } from "../../atom/registerLesson/registerLesson";
import { Cookies } from "react-cookie";
import { patchLessonParents } from "../../api/patchLessonParents";

export default function ConnectParentsAndTeacher() {
  const { lessonId } = useParams();
  const [lessonIndex, setLessonIndex] = useRecoilState(connectLessonId);

  const navigate = useNavigate();

  const cookies = new Cookies();

  const cookie = (name: string) => {
    return cookies.get(name);
  };

  useEffect(() => {
    if (lessonId) {
      setLessonIndex(lessonId);
    }
  }, []);

  async function checkIfCookieExists() {
    if (lessonId) {
      const data = await patchLessonParents(lessonId);
      return data;
    }
  }

  //쿠키에 값 있는지 확인하기
  if (cookie.length) {
    checkIfCookieExists();
  } else {
    navigate("/login");
  }

  return <div>ConnectParentsAndTeacher</div>;
}
