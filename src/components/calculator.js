import { useState } from "react"

const Calculator =({children})=>{

    const [result,  setResult] = useState('');
    return(
        <div className="calculator">
            <form>
                <input type='text' id='output' value={result}/>
            </form>
            <div className="calculator-grid">{children}</div>
        </div>
    )
}

export default Calculator;