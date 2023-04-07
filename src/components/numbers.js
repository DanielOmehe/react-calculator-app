import { useContext } from 'react'
import { CalculatorContext } from '../App';
import Button from './button';

const Numbers =()=>{
    const { ACTIONS, dispatch } = useContext(CalculatorContext);
    return (
        <div className="numbers">          
            <Button value="7" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>7</Button>
            <Button value="8" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>8</Button>
            <Button value="9" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>9</Button>
            <Button value="4" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>4</Button>
            <Button value="5" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>5</Button>
            <Button value="6" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>6</Button>
            <Button value="1" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>1</Button>
            <Button value="2" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>2</Button>
            <Button value="3" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>3</Button>
            <Button value="0" type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>0</Button>
            <Button value="." type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>.</Button>
            <Button value='π' type={ACTIONS.INPUT_OPERAND} dispatch={dispatch}>π</Button>
        </div>
    )
}

export default Numbers