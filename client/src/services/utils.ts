export class UtilsService {
  static performCalculation(
    firstNumber: string,
    secondNumber: string,
    operator: string
  ) {
    try {
      switch (operator) {
        case "*":
          return `${parseFloat(firstNumber) * parseFloat(secondNumber)}`;
        case "+":
          return `${parseFloat(firstNumber) + parseFloat(secondNumber)}`;
        case "-":
          return `${parseFloat(firstNumber) - parseFloat(secondNumber)}`;
        case "/":
          return `${parseFloat(firstNumber) / parseFloat(secondNumber)}`;
        default:
          return "Error";
      }
    } catch {
      return "Error";
    }
  }
}
