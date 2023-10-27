import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { patchLessonParents } from "../../api/patchLessonParents";
import { connectLessonId } from "../../atom/registerLesson/registerLesson";
import { blockAccess } from "../../utils/common/privateRoute";

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
      const data = await patchLessonParents(lessonIndex);
      return data;
    }
  }

  useEffect(() => {
    if (lessonId) {
      setLessonIndex(lessonId);
    }

    if (!blockAccess()) {
      connectParentsAndTeacher();
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return <div></div>;
}
