import "./ScreenAnswer.css";
import { useAppSelector } from "../../hooks/storeHooks";

const ScreenAnswer = () => {
  const firstNumber = useAppSelector((state) => state.calculator.firstNumber);
  const secondNumber = useAppSelector((state) => state.calculator.secondNumber);
  const result = useAppSelector((state) => state.calculator.result);
  const operator = useAppSelector((state) => state.calculator.operator);
  return (
    <>
      <div className="screen-answer">
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
