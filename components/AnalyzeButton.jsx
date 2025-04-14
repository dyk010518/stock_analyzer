import resultStyles from '../styles/AnalyzeButton.module.css'

const AnalyzeButton = (props) => {

    return (
        <div className={resultStyles.container}>

            <button className={resultStyles.button} onClick={props.handleClick}>Analyze</button>
        </div>
    )
}



export default AnalyzeButton