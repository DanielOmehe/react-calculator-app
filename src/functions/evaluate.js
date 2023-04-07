function factorial(num){
  if(num === 0 || num === 1) return 1
  for (let i = num - 1; i >= 1; i--){
    num = num * i;
  }
  return num
}

export default function evaluate({
  firstOperand,
  operator,
  secondOperand,
}) {
  let value1, value2, computation = 0;
  switch (true) {
    case firstOperand.endsWith('!'):
      computation = factorial(value1)
      return computation()
    case operator === '+':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      if(firstOperand.startsWith('sin') && secondOperand.startsWith('sin')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('cos')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('cos')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('sin')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('tan')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('cos')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('sin')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      computation = value1 + value2
      return computation.toString();
    case operator === '-':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      if(firstOperand.startsWith('sin') && secondOperand.startsWith('sin')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('cos')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('cos')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('sin')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('tan')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('cos')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('sin')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      computation = value1 - value2
      return computation.toString();
    case operator === '*':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      if(firstOperand.startsWith('sin') && secondOperand.startsWith('sin')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('cos')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('cos')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('sin')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('tan')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('cos')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('sin')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      computation = value1 * value2;
      return computation.toString();
    case operator === '^':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      if(firstOperand.startsWith('sin') && secondOperand.startsWith('sin')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('cos')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('cos')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('sin')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('tan')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('cos')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('sin')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      computation = Math.pow(value1, value2)
      return computation.toString();
    case operator === '/':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      if(firstOperand.startsWith('sin') && secondOperand.startsWith('sin')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('cos')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('cos')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('sin')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('tan')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('cos')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('sin')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      computation = value1 / value2
      return computation.toString();
    case operator === '%':
      value1 = parseFloat(firstOperand)
      value2 = parseFloat(secondOperand)
      if(firstOperand.startsWith('sin') && secondOperand.startsWith('sin')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('cos')){
        value1 = Math.sin(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('sin') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('sin', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('cos')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('sin')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      else if(firstOperand.startsWith('cos') && secondOperand.startsWith('tan')){
        value1 = Math.cos(parseFloat(firstOperand.replace('cos', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('tan')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.tan(parseFloat(secondOperand.replace('tan', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('cos')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.cos(parseFloat(secondOperand.replace('cos', '')))
      }
      else if(firstOperand.startsWith('tan') && secondOperand.startsWith('sin')){
        value1 = Math.tan(parseFloat(firstOperand.replace('tan', '')))
        value2 = Math.sin(parseFloat(secondOperand.replace('sin', '')))
      }
      computation = (value1 / 100) * value2
      return computation.toString();
    case firstOperand.startsWith('sin'):
      value1 = parseFloat(firstOperand.replace('sin', ''));
      computation = Math.sin(value1)
      return computation
    case firstOperand.startsWith('cos'):
      value1 = parseFloat(firstOperand.replace('cos', ''));
      computation = Math.cos(value1)
      return computation
    case firstOperand.startsWith('tan'):
      value1 = parseFloat(firstOperand.replace('tan', ''));
      computation = Math.tan(value1)
      return computation
    case firstOperand.startsWith('log'):
      value1 = parseFloat(firstOperand.replace('log', ''));
      computation = Math.log(value1)
      return computation
    case firstOperand.startsWith('√'):
      value1 = parseFloat(firstOperand.replace('√', ''));
      computation = Math.sqrt(value1)
      return computation
    case firstOperand.startsWith('3√'):
      value1 = parseFloat(firstOperand.replace('3√', ''));
      computation = Math.cbrt(value1)
      return computation
    case firstOperand.endsWith('^2'):
      value1 = parseFloat(firstOperand.replace('^2', ''));
      computation = Math.pow(value1, 2)
      return computation
    case firstOperand.endsWith('^3'):
      value1 = parseFloat(firstOperand.replace('^3', ''));
      computation = Math.pow(value1, 3)
      return computation
    case firstOperand.startsWith('asin'):
      value1 = parseFloat(firstOperand.replace('asin', ''));
      computation = Math.asin(value1);
      return computation
    case firstOperand.startsWith('acos'):
      value1 = parseFloat(firstOperand.replace('acos', ''));
      computation = Math.acos(value1)
      return computation
    case firstOperand.startsWith('atan'):
      value1 = parseFloat(firstOperand.replace('atan', ''));
      computation = Math.atan(value1).toString()
      return computation
    case firstOperand.startsWith('atanh'):
      value1 = parseFloat(firstOperand.replace('atanh', ''));
      computation = Math.atanh(value1).toString()
      return computation
    case firstOperand.startsWith('acosh'):
      value1 = parseFloat(firstOperand.replace('acosh', ''));
      computation = Math.acosh(value1).toString()
      return computation
    case firstOperand.startsWith('asinh'):
      value1 = parseFloat(firstOperand.replace('asinh', ''));
      computation = Math.asinh(value1)
      console.log(computation);
      return computation
    default:
      return 0;
  }
}
