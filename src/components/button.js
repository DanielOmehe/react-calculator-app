import '../stylesheets/button.scss';
const Button =({children, value, dispatch, type})=>{
    console.log(value);
    return <button onClick={()=> dispatch({type: type, payload: { value }})}>{children}</button>
}

export default Button