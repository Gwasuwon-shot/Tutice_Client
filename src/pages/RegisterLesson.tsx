import Footer from '../components/RegisterLessonPage/Footer';
import Header from '../components/RegisterLessonPage/Header';
import LessonInput from '../components/RegisterLessonPage/LessonInput';
import ProgressBar from '../components/common/ProgressBar';
import React from "react";

export default function RegisterLesson() {
  return (
  <>
    <ProgressBar progress = {50} />
    <Header />
    <LessonInput />
    <Footer />
  </>
  );
}
