import Lottie from "lottie-react";
import check from "../core/checkAttendance/check.json";
import checkCircle from "../core/checkAttendance/check_circle.json";

export default function CompleteCheckAttendance() {
  return (
    <>
      <Lottie loop={false} animationData={check} style={{ width: "50%", height: "50%" }} />
      <Lottie loop={false} animationData={checkCircle} style={{ width: "50%", height: "50%" }} />
    </>
  );
}
