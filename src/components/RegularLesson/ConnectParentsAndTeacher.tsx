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

  async function connectParentsAndTeacher() {
    if (lessonId) {
      const data = await patchLessonParents(lessonId);
      return data;
    }
  }

  useEffect(() => {
    if (lessonId) {
      setLessonIndex(lessonId);
    }

    if (cookie.length) {
      connectParentsAndTeacher();
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return <div></div>;
}
