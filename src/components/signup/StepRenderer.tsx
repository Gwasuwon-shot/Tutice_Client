import React, { useState } from "react";
import Role from "./Role";
import NameEmail from "./NameEmail";
import PwTos from "./PwTos";
import { isRecoilValue, useRecoilValue } from "recoil";
import { stepNum } from "../../atom/signup/signup";

export default function StepRenderer() {
  const step = useRecoilValue(stepNum);
  switch (step) {
    case 1:
      return <Role />;
    case 2:
      return <NameEmail />;
    case 3:
      return <PwTos />;
  }
}
