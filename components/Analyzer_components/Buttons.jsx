import AnalyzeButton from "./AnalyzeButton"
import ResetButton from "./ResetButton"

const Buttons = ({ handleAnalyzeClick, handleResetClick }) => {
    return (
        <div className="flex flex-row md:flex-col justify-center items-center md:gap-y-4 gap-x-4 md:gap-x-0">
            {<AnalyzeButton handleClick={handleAnalyzeClick}/>}
            {<ResetButton handleClick={handleResetClick}/>}
        </div>
    )
}
export default Buttons