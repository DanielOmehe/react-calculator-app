export default function evaluate({ firstOperand, operator, secondOperand, }) {
    let value1 = parseFloat(firstOperand),
    value2 = parseFloat(secondOperand),
    computation = 0;
    switch (operator) {
      case '+':
        computation = value1 + value2
        return computation.toString();
      case '-':
        computation = value1 - value2
        return computation.toString();
      case '*':
        computation = value1 * value2;
        return computation.toString();
      case '/':
        computation = value1 / value2
        return computation.toString();
      case '%':
        computation = (value1 / 100) * value2
        return computation.toString();
      default:
        return 0;
    }
}