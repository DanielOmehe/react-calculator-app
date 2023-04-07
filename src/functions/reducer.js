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
                if(payload.value === '√' && state.firstOperand.includes('√')) return state;
                if(payload.value === '3√' && state.firstOperand.includes('3√')) return state;
                if(payload.value === '^2' && state.firstOperand.includes('^2')) return state;
                if(payload.value === '^3' && state.firstOperand.includes('^3')) return state;
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
            case ACTIONS.INVERSE:
                return {
                    ...state,
                    inverse: !state.inverse
                }
            case ACTIONS.EVALUATE_OPERATION:
                if(state.firstOperand === '' && state.operator === '' && state.secondOperand === '' ){
                    return{
                        ...state,
                        result: null
                    }
                }
                if(state.firstOperand !== "" && state.operator === '' && state.secondOperand === ''){
                    if(state.firstOperand.includes('^2')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('!')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('√')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('3√')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('^3')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('sin')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('tan')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('cos')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    else if(state.firstOperand.includes('log')){
                        return {
                            ...state,
                            result: evaluate(state).toString()
                        }
                    }
                    return{
                        ...state,
                        result: null
                    }
                }
                if(state.firstOperand !== "" && state.operator !== '' && state.secondOperand === ''){
                    return{
                        ...state,
                        result: null
                    }
                }
                return {
                    ...state,
                    result: evaluate(state).toString(),
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
                if(payload.value === '.' && state.secondOperand.includes('.')) return state
                if(state.firstOperand !== '' && state.operator !== ''){
                    return {
                        ...state,
                        secondOperand: `${state.secondOperand ? state.secondOperand : ''}${payload.value}`
                    }
                }
                if(payload.value === 'π' ) {
                    if(state.firstOperand  === ''){
                        return {
                            ...state,
                            firstOperand: `${Math.PI}`
                        }
                    }
                    else if(state.firstOperand !== ''){
                        return {
                            ...state,
                            firstOperand: `${state.firstOperand ? state.firstOperand : ''}${payload.value}`,
                            result: `${state.firstOperand * Math.PI}`
                        }
                    }
                }
                if(payload.value === 'e') {
                    if(state.firstOperand !== ''){
                        return {
                            ...state,
                            firstOperand: `${state.firstOperand * Math.E}`
                        }
                    }
                    else if(state.firstOperand  === ''){
                        return {
                            ...state,
                            firstOperand: `${Math.E}`
                        }
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
                if(payload.operator !== '' && state.firstOperand !== '' && state.operator !== '' && state.secondOperand !== ''){
                    return {
                        ...state,
                        firstOperand: `${state.firstOperand}${state.operator}${state.secondOperand}`,
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