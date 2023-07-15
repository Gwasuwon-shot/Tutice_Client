import { useNavigate } from "react-router-dom";

export default function useMoveToLessonDetail() {
  const navigate = useNavigate();

  function handleMoveToManageLessonDetail(idx: number) {
    navigate(`/manage-lesson/${idx}`);
  }
  return { handleMoveToManageLessonDetail };
}
