const AnalyzeButton = ({ handleClick }) => {
    return (
        <div>
            <button 
                className="analysis-primary-button"
                onClick={handleClick}
            >
                Analyze
            </button>
        </div>
    )
}
export default AnalyzeButton
