import { calendarLessonsType } from "./calendarLessonsType";

export interface DayItemProps {
  date: Date;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  myLessons?: calendarLessonsType;
  myChildLessons?: calendarLessonsType;
}
