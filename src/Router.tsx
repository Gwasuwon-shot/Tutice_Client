import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChangeSchedule from "./pages/ChangeSchedule";
import CompleteCheckAttendance from "./pages/CompleteCheckAttendance";
import EditShcedule from "./pages/EditSchedule";
import Home from "./pages/Home";
import LessonDetail from "./pages/LessonDetail";
import LessonInfo from "./pages/LessonInfo";
import LessonShare from "./pages/LessonShare";
import Login from "./pages/Login";
import ManageLessonDetail from "./pages/ManageLessonDetail";
import ManageLessonMain from "./pages/ManageLessonMain";
import Mypage from "./pages/Mypage";
import NoAttendanceCheck from "./pages/NoAttendanceCheck";
import OnBoarding from "./pages/OnBoarding";
import ParentCalendar from "./pages/ParentCalendar";
import RegisterCalendar from "./pages/RegisterCalendar";
import RegisterLesson from "./pages/RegisterLesson";
import RegisterPayment from "./pages/RegisterPayment";
import RegularLesson from "./pages/RegularLesson";
import Schedule from "./pages/Schedule";
import Signup from "./pages/Signup";
import TimePickerPage from "./pages/TimePickerPage";
import TuitionPayment from "./pages/TuitionPayment";
import WelcomeSignup from "./pages/WelcomeSignup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onBoarding" element={<OnBoarding />} />
        <Route path="/" element={<Home />} />
        <Route path="/onBoarding" element={<OnBoarding />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-check-attendance" element={<CompleteCheckAttendance />} />
        <Route path="/manage-lesson" element={<ManageLessonMain />} />
        <Route path="/manage-lesson/:manageLessonId" element={<ManageLessonDetail />} />
        <Route path="/register-payment/:manageLessonId" element={<RegisterPayment />} />
        <Route path="/parent-calendar" element={<ParentCalendar />} />
        <Route path="/register-lesson" element={<RegisterLesson />} />
        <Route path="/regular-lesson" element={<RegularLesson />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register-calendar" element={<RegisterCalendar />} />
        <Route path="/lesson-detail/:lessonId" element={<LessonDetail />} />
        <Route path="/time-picker" element={<TimePickerPage />} />
        <Route path="/change-schedule" element={<ChangeSchedule />} />
        <Route path="/tuition-payment" element={<TuitionPayment />} />
        <Route path="/change-lessonschedule" element={<ChangeSchedule />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/no-attendance-check" element={<NoAttendanceCheck />} />
        <Route path="/lesson-share" element={<LessonShare />} />
        <Route path="/lesson-info/:lessonId" element={<LessonInfo />} />
        <Route path="/edit-lessonschedule" element={<EditShcedule />} />
        <Route path="/welcome" element={<WelcomeSignup />} />
      </Routes>
    </BrowserRouter>
  );
}
