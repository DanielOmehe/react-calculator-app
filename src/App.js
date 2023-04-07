import React, { useReducer } from "react";
import "./App.scss";
import {
  Calculator,
  Screen,
  Integers,
  KeyPad,
  Operators,
  TrigFunctions,
  InputScreen,
  OutputScreen,
} from "./components";
import reducer from "./functions/reducer";
import { ACTIONS } from "./functions/reducer";
import { createContext } from "react";

export const CalculatorContext = createContext();

const initialState = {
  firstOperand: '',
  operator: '',
  secondOperand: '',
  operation: '',
  result: ''
}
function App() {
  const [ { firstOperand, operator, secondOperand, result }, dispatch ] = useReducer(reducer, initialState);
  return (
    <CalculatorContext.Provider  value={{ ACTIONS, dispatch }}>
      <Calculator>
        <Screen>
          <InputScreen>{firstOperand}{operator}{secondOperand}</InputScreen>
          <OutputScreen>{result}</OutputScreen>
        </Screen>
        <KeyPad>
          <TrigFunctions />
          <Integers />
          <Operators />
        </KeyPad>
      </Calculator>
    </CalculatorContext.Provider>
  )
}

export default App;
