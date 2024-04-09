import "./ScreenAnswer.css";
import { useAppSelector } from "../../hooks/storeHooks";
import { useEffect, useRef, useState } from "react";

const ScreenAnswer = () => {
  // selectors
  const firstNumber = useAppSelector((state) => state.calculator.firstNumber);
  const secondNumber = useAppSelector((state) => state.calculator.secondNumber);
  const result = useAppSelector((state) => state.calculator.result);
  const operator = useAppSelector((state) => state.calculator.operator);

  // hooks
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState<number>(32);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const adjustFontSize = () => {
      const { scrollWidth, clientWidth } = container;
      console.log(scrollWidth, clientWidth);
      const ratio = clientWidth / scrollWidth;

      if (ratio <= 1) {
        setTimeout(
          () => setFontSize((prevFontSize) => prevFontSize * ratio),
          200
        );
      } else {
        setTimeout(
          () => setFontSize((prevFontSize) => prevFontSize * (1 + (1 - ratio))),
          200
        );
      }
    };

    adjustFontSize();
  }, [firstNumber, secondNumber, result, operator]);
  return (
    <>
      <div
        ref={containerRef}
        style={{ fontSize: `${fontSize}px`, overflow: "hidden" }}
        className="screen-answer"
      >
        {firstNumber &&
          operator &&
          secondNumber &&
          `${firstNumber} ${operator} ${secondNumber}`}

        {firstNumber &&
          operator &&
          !secondNumber &&
          `${firstNumber} ${operator}`}

        {firstNumber && !operator && !secondNumber && !result && firstNumber}

        {result && !firstNumber && !operator && !secondNumber && result}

        {!result && !firstNumber && !operator && !secondNumber && 0}
      </div>
    </>
  );
};

export default ScreenAnswer;
