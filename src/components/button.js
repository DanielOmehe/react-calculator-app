import '../stylesheets/button.scss';
const Button = ({
    children,
    value,
    dispatch,
    type,
    operator
}) => {
    return <button onClick = {
            () => dispatch({
                type: type,
                payload: {
                    value: value,
                    operator: operator
                }
            })
        } > {
            children
        } </button>
}

export default Button