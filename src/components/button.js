import '../stylesheets/button.scss';
const Button =({children, value, dispatch, type})=>{
    return <button onClick={()=> dispatch({type: type, payload: {value: value ? value : null}})}>{children}</button>
}

export default Button