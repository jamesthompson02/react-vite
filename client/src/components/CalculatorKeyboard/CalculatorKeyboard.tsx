import "./CalculatorKeyboard.css";
import { keyboardButtonData } from "../../data/KeyboardButtonData";
import { ButtonProps } from "../../models/components/Button";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  updateFirstNumber,
  updateOperator,
  updateResult,
  updateSecondNumber,
  clear,
  expressAsPercentage,
  reverseSign,
} from "../../state/Calculator";

const CalculatorKeyboard = () => {
  const dispatch = useAppDispatch();

  const firstNumber = useAppSelector((state) => state.calculator.firstNumber);
  const operator = useAppSelector((state) => state.calculator.operator);

  const addDigit = (text: string) => {
    if (firstNumber && operator) {
      dispatch(updateSecondNumber(text));
      return;
    }
    dispatch(updateFirstNumber(text));
    return;
  };

  const addOperator = (operator: string) => {
    dispatch(updateOperator(operator));
    return;
  };

  const calculateResult = () => {
    dispatch(updateResult());
    return;
  };

  const clearEverything = () => {
    dispatch(clear());
  };

  const convertToPercentage = () => {
    dispatch(expressAsPercentage());
  };

  const applyReverseSign = () => {
    dispatch(reverseSign());
  };

  return (
    <>
      <div className="keyboard-container">
        {keyboardButtonData.map((value: ButtonProps, i) => {
          if (value.type === "calculate") {
            return (
              <Button
                key={i}
                text={value.text}
                func={() => calculateResult()}
                cssClasses={value.cssClasses ? value.cssClasses : [""]}
              ></Button>
            );
          }
          if (value.type === "operator") {
            return (
              <Button
                key={i}
                text={value.text}
                func={() => addOperator(value.text)}
                cssClasses={value.cssClasses ? value.cssClasses : [""]}
              ></Button>
            );
          }
          if (value.type === "clear") {
            return (
              <Button
                key={i}
                text={value.text}
                func={() => clearEverything()}
                cssClasses={value.cssClasses ? value.cssClasses : [""]}
              ></Button>
            );
          }
          if (value.type === "reverse") {
            return (
              <Button
                key={i}
                text={value.text}
                func={() => applyReverseSign()}
                cssClasses={value.cssClasses ? value.cssClasses : [""]}
              ></Button>
            );
          }
          if (value.type === "percentage") {
            return (
              <Button
                key={i}
                text={value.text}
                func={() => convertToPercentage()}
                cssClasses={value.cssClasses ? value.cssClasses : [""]}
              ></Button>
            );
          }

          return (
            <Button
              key={i}
              text={value.text}
              func={() => addDigit(value.text)}
              cssClasses={value.cssClasses ? value.cssClasses : [""]}
            ></Button>
          );
        })}
      </div>
    </>
  );
};

export default CalculatorKeyboard;
