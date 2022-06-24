import resultStyles from '../styles/AnalyzeResult.module.css'
import {useState} from 'react'

const AnalyzeResult = ({pressed}) => {

    const analyze = () => {
        document.getElementById("revenue_input_1").value = undefined
    }

    return (
        <div className={resultStyles.container}>
            {pressed && (
                <input type='text' placeholder='Search Stock Symbol'></input>
            )}
            <button className={resultStyles.button} onClick={analyze}>Analyze</button>
        </div>
    )
}

export default AnalyzeResult