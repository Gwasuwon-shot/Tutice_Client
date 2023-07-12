import { BrowserRouter, Route, Routes } from "react-router-dom";

import CheckAttendance from "./pages/CheckAttendance";
import CheckLesson from "./pages/CheckLesson";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ParentCalendar from "./pages/ParentCalendar";
import RegisterLesson from "./pages/RegisterLesson";
import Schedule from "./pages/Schedule";
import Signup from "./pages/Signup";
import RegisterCalendar from "./pages/RegisterCalendar";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check-attendance" element={<CheckAttendance />} />
        <Route path="/check-lesson" element={<CheckLesson />} />
        <Route path="/parent-calendar" element={<ParentCalendar />} />
        <Route path="/register-lesson" element={<RegisterLesson />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register-calendar" element={<RegisterCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}
