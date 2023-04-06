export default function evaluate({
  firstOperand,
  operator,
  secondOperand,
}) {
  let value1, value2, computation = 0;
  switch (true) {
    case operator === '+':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      computation = value1 + value2
      return computation.toString();
    case operator === '-':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      computation = value1 - value2
      return computation.toString();
    case operator === '*':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      computation = value1 * value2;
      return computation.toString();
    case operator === '^':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      computation = Math.pow(value1, value2)
      return computation.toString();
    case operator === '/':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      computation = value1 / value2
      return computation.toString();
    case operator === '%':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      computation = (value1 / 100) * value2
      return computation.toString();
    case firstOperand.startsWith('sin'):
      value1 = parseFloat(firstOperand.replace('sin', ''));
      console.log(value1);
      value2 = parseFloat(secondOperand)
      computation = Math.sin(value1)
      return computation
    case firstOperand.startsWith('cos'):
      value1 = parseFloat(firstOperand.replace('cos', ''));
      console.log(value1);
      value2 = parseFloat(secondOperand)
      computation = Math.cos(value1)
      return computation
    case firstOperand.startsWith('tan'):
      value1 = parseFloat(firstOperand.replace('tan', ''));
      console.log(value1);
      value2 = parseFloat(secondOperand)
      computation = Math.tan(value1)
      return computation
    default:
      return 0;
  }
}