import AnalyzeButton from "./AnalyzeButton"
import ResetButton from "./ResetButton"

const Buttons = ({ handleAnalyzeClick, handleResetClick }) => {
    return (
        <div className="analysis-buttons">
            {<AnalyzeButton handleClick={handleAnalyzeClick}/>}
            {<ResetButton handleClick={handleResetClick}/>}
        </div>
    )
}
export default Buttons
