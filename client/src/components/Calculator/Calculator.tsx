import "./Calculator.css";
import CalculatorScreen from "../CalculatorScreen/CalculatorScreen";
import CalculatorKeyboard from "../CalculatorKeyboard/CalculatorKeyboard";

const Calculator = () => {
  return (
    <>
      <div className="calculator">
        <CalculatorScreen></CalculatorScreen>
        <CalculatorKeyboard></CalculatorKeyboard>
      </div>
    </>
  );
};

export default Calculator;
