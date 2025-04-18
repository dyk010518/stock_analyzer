const AnalyzeButton = ({ handleClick }) => {
    return (
        <div className="flex justify-center ml-8 mt-8 mb-16">
            <button 
                className="bg-primary-300 hover:bg-primary-400 text-black font-semibold text-xl px-6 py-8 rounded-xl shadow-md transition-all duration-300 ease-in-out"
                onClick={handleClick}
            >
                Analyze
            </button>
        </div>
    )
}
export default AnalyzeButton