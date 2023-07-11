import React, { useState } from "react";
import Role from "./Role";
import NameEmail from "./NameEmail";
import PwTos from "./PwTos";

type StepRendererProps = {
  step: Number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function StepRenderer({ step, setStep }: StepRendererProps) {
  useState;
  switch (step) {
    case 1:
      return <Role setStep={setStep} />;
    case 2:
      return <NameEmail setStep={setStep} />;
    case 3:
      return <PwTos setStep={setStep} />;
  }
}
