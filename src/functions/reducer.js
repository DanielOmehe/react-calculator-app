import evaluate from "./evaluate";

export const ACTIONS = {
    INPUT_OPERAND: "input-operand",
    CLEAR_OPERATION: "clear-operation",
    DELETE_OPERATION: "delete-operation",
    EVALUATE_OPERATION: "evaluate-operation",
    INVERSE_FUNCTIONS: "inverse-functions",
    INPUT_CONSTANT: "input-constant",
    INPUT_OPERATOR: "input-operators",
    INVERSE: 'inverse'
};

export default function reducer( state, { type, payload } ){
    console.log(state)
    try {
        switch(type){
            case ACTIONS.EVALUATE_OPERATION:
                return {
                    ...state,
                    result: evaluate(state)
                }
            case ACTIONS.INPUT_OPERAND:
                if( payload.value === '0'  && state.firstOperand === '0') {
                    return {...state}
                };
                if(payload.value === '.' && state.firstOperand.includes('.')) return {...state}
                if(state.firstOperand !== '' && state.operator !== ''){
                    return {
                        ...state,
                        secondOperand: `${state.secondOperand ? state.secondOperand : ''}${payload.value}`
                    }
                }
                return{
                    ...state,
                    firstOperand: `${state.firstOperand ? state.firstOperand : ''}${payload.value}`
                }
            case ACTIONS.INPUT_OPERATOR:
                if(state.firstOperand === '' && state.secondOperand === '') return state;
                if(state.firstOperand !== '' ){
                    return{
                        ...state,
                        operator: `${state.operator}${payload.value}`
                    }                    
                }
                if(payload.value === '+' && state.operator.includes('+')) return {...state}
                if(payload.value === '-' && state.operator.includes('-')) return {...state}
                if(payload.value === '/' && state.operator.includes('/')) return {...state}
                if(payload.value === '*' && state.operator.includes('*')) return {...state}
                return{
                    ...state,
                    operator: `${payload.value}`
                }
            case ACTIONS.DELETE_OPERATION:
                if(state.firstOperand !== null){
                    return {
                        ...state,
                        firstOperand: `${state.firstOperand.slice(0, -1)}`
                    }
                }
                if(state.operator !== null){
                    return{
                        ...state,
                        operator: `${state.operator.slice(0, -1)}`
                    }
                }
                if(state.secondOperand !== null){
                    return {
                        ...state,
                        secondOperand: `${state.secondOperand.slice(0, -1)}`
                    }
                }
                return
            case ACTIONS.CLEAR_OPERATION:
                return {
                    ...state,
                    firstOperand: '',
                    operator: '',
                    secondOperand: '',
                    result: '0'
                }
            case ACTIONS.INPUT_CONSTANT:
                if(state.secondOperand === '' && state.operator){
                    return {
                        ...state, 
                        secondOperand: `${state.secondOperand ? state.secondOperand : ''}${payload.value}`
                    }
                }
                return{
                    ...state,
                    firstOperand: `${state.firstOperand ? state.firstOperand : ''}${payload.value}`,
                }
            default:
                return { ...state };
        }
    } catch (error) {
        console.log(error);
    }
}