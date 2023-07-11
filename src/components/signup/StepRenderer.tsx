import React, { useState } from "react";
import Role from "./Role";
import NameEmail from "./NameEmail";
import PwTos from "./PwTos";

interface StepRendererProps {
  step: Number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function StepRenderer(props: StepRendererProps) {
  const { step, setStep } = props;
  switch (step) {
    case 1:
      return <Role />;
    case 2:
      return <NameEmail />;
    case 3:
      return <PwTos />;
  }
}
