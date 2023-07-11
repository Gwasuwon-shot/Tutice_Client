import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAttendance from "./pages/CheckAttendance";
import CheckLesson from "./pages/CheckLesson";
import Login from "./pages/Login";
import ParentCalendar from "./pages/ParentCalendar";
import ParentHome from "./pages/ParentHome";
import RegisterLesson from "./pages/RegisterLesson";
import Schedule from "./pages/Schedule";
import Signup from "./pages/Signup";
import OnBoarding from "./pages/OnBoarding";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onBoarding" element={<OnBoarding />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check-attendance" element={<CheckAttendance />} />
        <Route path="/check-lesson" element={<CheckLesson />} />
        <Route path="/parent-calendar" element={<ParentCalendar />} />
        <Route path="/parent-home" element={<ParentHome />} />
        <Route path="/register-lesson" element={<RegisterLesson />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}
