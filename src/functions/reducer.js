import evaluate from "./evaluate";


export const ACTIONS = {
    INPUT_OPERAND: "input-operand",
    CLEAR_OPERATION: "clear-operation",
    DELETE_OPERATION: "delete-operation",
    EVALUATE_OPERATION: "evaluate-operation",
    INVERSE_FUNCTIONS: "inverse-functions",
    INPUT_OPERATOR: "input-operators",
    INVERSE: 'inverse',
    RADIAN: 'radian'
};

export default function reducer( state, { type, payload } ){
    try {
        switch(type){
            case ACTIONS.INVERSE_FUNCTIONS:
                return{
                    ...state,
                    firstOperand: `${state.firstOperand}${payload.value}`,
                    result: evaluate(state)
                }
            case ACTIONS.INVERSE:
                return {
                    ...state,
                    inverse: !state.inverse
                }
            case ACTIONS.EVALUATE_OPERATION:
                return {
                    ...state,
                    result: evaluate(state),
                    firstOperand: '',
                    operator: '',
                    secondOperand: ''
                }
            case ACTIONS.INPUT_OPERAND:
                if( payload.value === '0'  && state.firstOperand === '0') {
                    return {...state}
                }
                if(payload.value === '0' && state.firstOperand !== '' && state.operator !== '' && state.secondOperand === '0') return state
                if(payload.value === '.' && state.firstOperand.includes('.')) return state
                if(state.firstOperand !== '' && state.operator !== ''){
                    return {
                        ...state,
                        secondOperand: `${state.secondOperand}${payload.value}`
                    }
                }
                if(payload.value === 'π' && state.firstOperand  === '') {
                    return {
                        ...state,
                        firstOperand: `${Math.PI}`
                    }
                }
                if(payload.value === 'π' && state.firstOperand !== ''){
                    return {
                        ...state,
                        firstOperand: `${state.firstOperand * Math.PI}`
                    }
                }
                if(payload.value === 'e' && state.firstOperand  === '') {
                    return {
                        ...state,
                        firstOperand: `${Math.E}`
                    }
                }
                if(payload.value === 'e' && state.firstOperand !== ''){
                    return {
                        ...state,
                        firstOperand: `${state.firstOperand * Math.E}`
                    }
                }
                return{
                    ...state,
                    firstOperand: `${state.firstOperand}${payload.value}`
                }
            case ACTIONS.INPUT_OPERATOR:
                if(state.firstOperand === '' && state.secondOperand === '') return state;
                if(state.firstOperand !== '' ){
                    return{
                        ...state,
                        operator: `${payload.operator}`
                    }                    
                }
                if(state.operator !== ''){
                    return {
                        ...state,
                        operator: `${payload.operator}`
                    }
                }
                if(state.firstOperand !== '' && state.operator !== '' && state.secondOperand !== ''){
                    return {
                        ...state,
                        firstOperand: `${evaluate(state)}`,
                        secondOperand: ''
                    }
                }
                break;
            case ACTIONS.DELETE_OPERATION:
                if(state.secondOperand !== ''){
                    return {
                        ...state,
                        secondOperand: `${state.secondOperand.slice(0, -1)}`
                    }
                }
                if(state.operator !== ''){
                    return{
                        ...state,
                        operator: `${state.operator.slice(0, -1)}`
                    }
                }
                if(state.firstOperand !== ''){
                    return {
                        ...state,
                        firstOperand: `${state.firstOperand.slice(0, -1)}`
                    }
                }
                if(state.firstOperand === '') return { ...state, firstOperand: '' }
                break;
            case ACTIONS.CLEAR_OPERATION:
                return {
                    ...state,
                    firstOperand: '',
                    operator: '',
                    secondOperand: '',
                    result: ''
                }
            default:
                return { ...state };
        }
    } catch (error) {
        console.log(error);
    }
}