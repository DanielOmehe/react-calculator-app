import { useContext } from 'react';
import '../stylesheets/calculator.scss'
import Button from './button';
import { CalculatorContext } from '../App';

const TrigFunctions =()=>{

    const { ACTIONS, dispatch } = useContext(CalculatorContext)
    return (
      <div className="trig-functions">
        <Button dispatch={dispatch} type={ACTIONS.INVERSE}>Inv</Button>
        <Button type={ACTIONS.RADIAN} dispatch={dispatch}>RAD</Button>
        <Button value="(" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>(</Button>
        <Button value=")" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>)</Button>
        <Button value='!' type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>!</Button>
        <Button value='e' type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>e</Button>
        <Button value='^2' type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>X<sup>2</sup></Button>
        <Button value="^3" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>X<sup>3</sup></Button>
        <Button operator="^" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>X<sup>y</sup></Button>
        <Button value="3√" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}><sup>3</sup>&radic;</Button>
        <Button value="√" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>&radic;</Button>
        <Button value="log" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>log</Button>
        <Button value="cos" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>cos</Button>
        <Button value="tan" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>tan</Button>
        <Button value="sin" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>sin</Button>
        <Button value="sinh" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>sinh</Button>
        <Button value="cosh" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>cosh</Button>
        <Button value="tanh" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>tanh</Button>
        <Button value="acos" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>acos</Button>
        <Button value="asin" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>asin</Button>
        <Button value="atan" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>atan</Button>
        <Button value="asinh" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>asinh</Button>
        <Button value="acosh" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>acosh</Button>
        <Button value="atanh" type={ACTIONS.INVERSE_FUNCTIONS} dispatch={dispatch}>atanh</Button>
      </div>
    )
}

export default TrigFunctions