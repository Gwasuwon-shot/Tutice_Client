// import { useState } from "react";
// import { useQuery } from "react-query";
// import { getLessonByUser } from "../api/getLessonByUser";

// export default function useGetLessonByUser() {
//   const [isLessonExist, setIsLessonExist] = useState<boolean>();

//   const { data: lessonByUser } = useQuery(["getLessonByUser"], getLessonByUser, {
//     onSuccess: (response) => {
//       setIsLessonExist(response.data.isLesson);
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//     staleTime: 300000,
//   });

//   return { isLessonExist };
// }

import { useState } from "react";
import { useQuery } from "react-query";
import { getLessonByUser } from "../api/getLessonByUser";

export default function useGetLessonByUser() {
  const [isLessonExist, setIsLessonExist] = useState<boolean>();

  const { data: lessonByUser } = useQuery(["getLessonByUser"], getLessonByUser, {
    staleTime: 300000,
  });

  return { lessonByUser };
}
