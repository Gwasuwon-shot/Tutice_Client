import { BrowserRouter, Route, Routes } from "react-router-dom";

import CompleteCheckAttendance from "./pages/CompleteCheckAttendance";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageLesson from "./pages/ManageLesson";
import ManageLessonMain from "./pages/ManageLessonMain";
import OnBoarding from "./pages/OnBoarding";
import ParentCalendar from "./pages/ParentCalendar";
import RegisterCalendar from "./pages/RegisterCalendar";
import RegisterLesson from "./pages/RegisterLesson";
import RegularLesson from "./pages/RegularLesson";
import Schedule from "./pages/Schedule";
import Signup from "./pages/Signup";

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
        <Route path="/manage-lesson/1" element={<ManageLesson />} />
        <Route path="/parent-calendar" element={<ParentCalendar />} />
        <Route path="/register-lesson" element={<RegisterLesson />} />
        <Route path="/regular-lesson" element={<RegularLesson />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register-calendar" element={<RegisterCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}
