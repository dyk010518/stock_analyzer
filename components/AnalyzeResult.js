import resultStyles from '../styles/AnalyzeResult.module.css'

const AnalyzeResult = ({pressed}) => {
    return (
        <div className={resultStyles.container}>
            {pressed && (
                <input type='text' placeholder='Search Stock Symbol'></input>
            )}
            {/* {pressed ? (
                <input type='text' placeholder='Search Stock Symbol'></input>
            ) : (<></>)} */}
            <button className={resultStyles.button}>Analyze</button>
        </div>
    )
}

export default AnalyzeResult