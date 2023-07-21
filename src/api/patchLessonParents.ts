import axios from "axios";

export async function patchLessonParents(lessonCode: string) {
  const data = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/api/lesson/parents`,
    {
      lessonCode: "MTA5",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_PARENTS_TOKEN}`,
      },
    },
  );

  return data?.data;
}
