export default function useGetLessonRegularSchedule(lessonIdx: number) {
  //   const { data: lessonRegularSchedule } = useQuery(
  //     ["lessonRegularSchedule"],
  //     () => getLessonRegularSchedule(lessonIdx),
  //     {
  //       onError: (error) => {
  //         console.log(error);
  //       },
  //     },
  //   );
  const lessonRegularSchedule = [
    {
      dayOfWeekList: ["월", "화"],
      startTime: "21:30",
      endTime: "22:00",
    },
    {
      dayOfWeekList: ["수"],
      startTime: "16:30",
      endTime: "18:00",
    },
  ];

  return { lessonRegularSchedule };
}
