import React, { useReducer } from "react";
import "./App.scss";
import Button from "./components/button";
import {
  Calculator,
  Display,
  Integers,
  KeyPad,
  Operators,
  TrigFunctions,
} from "./components";

const ACTIONS = {
  INPUT_OPERATION: "input-operation",
  CLEAR_OPERATION: "clear-operation",
  DELETE_OPERATION: "delete-operation",
  EVALUATE_OPERATION: "evaluate-operation",
  INVERSE_FUNCTIONS: "inverse-functions",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.INPUT_OPERATION:
      if (payload.value === "0" && state.input === 0) return state;
      return {
        ...state,
        input: `${state.input}${payload.value}`,
      };
    case ACTIONS.CLEAR_OPERATION:
      return { input: '', result: '' };
    case ACTIONS.DELETE_OPERATION:
      return{
        ...state,
        input: state.input.slice(0, -1)
      }
    case ACTIONS.EVALUATE_OPERATION:
      return{
        ...state,
        input: '',
        result: evaluate(state.input)
      }
    default:
      return state;
  }
}

function evaluate(operation){
  return eval(operation);
}

function App() {
  const [{ input, result }, dispatch] = useReducer(reducer, { input: '', result: '' });
  return (
    <Calculator>
      <Display>
        <div className="input-screen">{input}</div>
        <div className="output-screen">{result}</div>
      </Display>
      <KeyPad>
        <TrigFunctions>
          <Button>Inv</Button>
          <Button
            value="sin("
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
            sin
          </Button>
          <Button
            value="cos("
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
            cos
          </Button>
          <Button
            value="tan("
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
            tan
          </Button>
          <Button
            value="log("
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
            log
          </Button>
          <Button
            value={Math.E}
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
            e
          </Button>
          <Button value="^" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            ^
          </Button>
          <Button value="(" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            (
          </Button>
          <Button value=")" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            )
          </Button>
          <Button value="√" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            √
          </Button>
          <Button
            value="sinh"
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
            sinh
          </Button>
          <Button
            value="cosh"
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
            cosh
          </Button>
        </TrigFunctions>
        <Integers>
          <Button value="7" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            7
          </Button>
          <Button value="8" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            8
          </Button>
          <Button value="9" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            9
          </Button>
          <Button value="4" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            4
          </Button>
          <Button value="5" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            5
          </Button>
          <Button value="6" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            6
          </Button>
          <Button value="1" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            1
          </Button>
          <Button value="2" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            2
          </Button>
          <Button value="3" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            3
          </Button>
          <Button value="0" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            0
          </Button>
          <Button value="." type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            .
          </Button>
          <Button
            value={Math.PI}
            type={ACTIONS.INPUT_OPERATION}
            dispatch={dispatch}
          >
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
          <Button value="+" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            +
          </Button>
          <Button value="-" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            -
          </Button>
          <Button value="/" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            &divide;
          </Button>
          <Button value="*" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
            &times;
          </Button>
          <Button value="%" type={ACTIONS.INPUT_OPERATION} dispatch={dispatch}>
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
