import React, { useState } from "react";
import Role from "./Role";
import NameEmail from "./NameEmail";
import PwTos from "./PwTos";
import { isRecoilValue, useRecoilValue } from "recoil";
import { stepNum } from "../../atom/signup/signup";
import { useNavigate } from "react-router-dom";

export default function StepRenderer() {
  const step = useRecoilValue(stepNum);
  // const [step, setStep] = useState(1);
  const navigate = useNavigate();
  switch (step) {
    case 0:
      navigate(-1);
      break;
    case 1:
      return <Role />;
    case 2:
      return <NameEmail />;
    case 3:
      return <PwTos />;
  }
}
