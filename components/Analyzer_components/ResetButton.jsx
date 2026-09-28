const ResetButton = ({ handleClick }) => {
    return (
        <div>
            <button 
                className="analysis-reset-button"
                onClick={handleClick}
            >
                Reset
            </button>
        </div>
    )
}
export default ResetButton
