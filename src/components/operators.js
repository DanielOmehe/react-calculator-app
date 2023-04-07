import { useContext } from "react"
import Button from "./button"
import { CalculatorContext } from "../App"

const Operators =()=>{
    const { ACTIONS, dispatch } = useContext(CalculatorContext)
    return (
        <div className="operators">
            <Button type={ACTIONS.CLEAR_OPERATION} dispatch={dispatch}>CE</Button>
            <Button type={ACTIONS.DELETE_OPERATION} dispatch={dispatch}>DEL</Button>
            <Button operator="+" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>+</Button>
            <Button operator="-" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>-</Button>
            <Button operator="/" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>/</Button>
            <Button operator="*" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>*</Button>
            <Button operator="%" type={ACTIONS.INPUT_OPERATOR} dispatch={dispatch}>%</Button>
            <Button type={ACTIONS.EVALUATE_OPERATION} dispatch={dispatch}>=</Button>
      </div>
    )
}

export default Operators