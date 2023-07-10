import { NO_REGISTERED_CLASS_BANNER } from "../../core/teacherHome";
import WelcomeTeacher from "./WelcomeTeacher";

export default function Banner() {
  return (
    <>
      <WelcomeTeacher teacherName={NO_REGISTERED_CLASS_BANNER.data.teacherName} />
    </>
  );
}
