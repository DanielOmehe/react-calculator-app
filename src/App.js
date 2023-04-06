import React, { useReducer } from "react";
import "./App.scss";
import Button from "./components/button";
import {
  Calculator,
  Screen,
  Integers,
  KeyPad,
  Operators,
  TrigFunctions,
} from "./components";
import reducer from "./functions/reducer";
import { ACTIONS } from "./functions/reducer";

const initialState = { firstOperand: '',  operator: '', secondOperand: '', result: '' };
function App() {
  const [ state, dispatch ] =
    useReducer(reducer, initialState);
  return (
    <Calculator>
      <Screen>
        <div className="input-screen">
          {state.firstOperand} {state.operator} {state.secondOperand}
        </div>
        <div className="output-screen">{state.result}</div>
      </Screen>
      <KeyPad>
        <TrigFunctions>
          <Button dispatch={dispatch} type={ACTIONS.INVERSE}>Inv</Button>
          <Button
            type={ACTIONS.RADIAN}
            dispatch={dispatch}
          >
            RAD
          </Button>
          <Button
            value="cos"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            cos
          </Button>
          <Button
            value="tan"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            tan
          </Button>
          <Button
            value="sin"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            sin
          </Button>
          <Button
            value='e'
            type={ACTIONS.INPUT_OPERAND}
            dispatch={dispatch}
          >
            e
          </Button>
          <Button operator='^2' type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>
            X<sup>2</sup>
          </Button>
          <Button value="" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>
            X<sup>3</sup>
          </Button>
          <Button value="^" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>
            X<sup>y</sup>
          </Button>
          <Button value="3√" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>
            <sup>3</sup>&radic;
          </Button>
          <Button value="√" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>
          &radic;
          </Button>
          <Button
            value="sinh"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            sinh
          </Button>
          <Button
            value="cosh"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            cosh
          </Button>
          <Button
            value="tanh"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            tanh
          </Button>
          <Button
            value="acos"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            acos
          </Button>
          <Button
            value="asin"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            asin
          </Button>
          <Button
            value="atan"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            atan
          </Button>
          <Button
            value="log"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            log
          </Button>
          <Button
            value="cosh"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            cosh
          </Button>
          <Button
            value="cosh"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            cosh
          </Button>
          <Button
            value="cosh"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            (
          </Button>
          <Button
            value=")"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >)
          </Button>
          <Button
            value="sec"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            sec
          </Button>
          <Button
            value="cosh"
            type={ACTIONS.INVERSE_FUNCTIONS}
            dispatch={dispatch}
          >
            cot
          </Button>
        </TrigFunctions>
        <Integers>
          <Button value="7" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            7
          </Button>
          <Button value="8" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            8
          </Button>
          <Button value="9" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            9
          </Button>
          <Button value="4" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            4
          </Button>
          <Button value="5" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            5
          </Button>
          <Button value="6" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            6
          </Button>
          <Button value="1" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            1
          </Button>
          <Button value="2" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            2
          </Button>
          <Button value="3" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            3
          </Button>
          <Button value="0" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            0
          </Button>
          <Button value="." type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            .
          </Button>
          <Button value='π' type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>
            π
          </Button>
        </Integers>
        <Operators>
          <Button type={ACTIONS.CLEAR_OPERATION} dispatch={dispatch}>
            CE
          </Button>
          <Button type={ACTIONS.DELETE_OPERATION} dispatch={dispatch}>
            DEL
          </Button>
          <Button operator="+" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>
            +
          </Button>
          <Button operator="-" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>
            -
          </Button>
          <Button operator="/" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>
            /
          </Button>
          <Button operator="*" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>
            *
          </Button>
          <Button operator="%" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>
            %
          </Button>
          <Button type={ACTIONS.EVALUATE_OPERATION} dispatch={dispatch}>
            =
          </Button>
        </Operators>
      </KeyPad>
    </Calculator>
  );
}

export default App;
