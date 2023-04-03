import '../stylesheets/button.scss';
const Button =({children, id, value, dispatch, type})=>{
    return <button id={id} onClick={dispatch} >{children}</button>
}

export default Button