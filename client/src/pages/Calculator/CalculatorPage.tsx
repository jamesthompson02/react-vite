import Calculator from "../../components/Calculator/Calculator";
import Header from "../../components/Header/Header";
import "./CalculatorPage.css";

const CalculatorPage = () => {
  return (
    <div>
      <div className="typewriter">
        <Header text="Calculator"></Header>
      </div>
      <div className="calculator-container">
        <Calculator></Calculator>
      </div>
    </div>
  );
};

export default CalculatorPage;
