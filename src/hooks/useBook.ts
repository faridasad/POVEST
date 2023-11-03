import { ReactElement, useState } from "react";

export function useBook(steps: ReactElement[]) {
  const [stepIndex, setStepIndex] = useState(0);

  const next = () => {
    setStepIndex((i) => {
      return i >= steps.length - 1 ? i : i + 1;
    });
  };

  const prev = () => {
    setStepIndex((i) => {
      return i <= 0 ? i : i - 1;
    });
  };

  const moveTo = (index: number) => {
    setStepIndex(index);
  };

  return {
    stepIndex,
    moveTo,
    next,
    prev,
    step: steps[stepIndex],
    isLastStep: stepIndex === steps.length - 1,
    isFirstStep: stepIndex === 0,
  };
}
