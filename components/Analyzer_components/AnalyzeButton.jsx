const AnalyzeButton = ({ handleClick }) => {
    return (
        <div className="flex justify-center items-center ml-0 md:ml-8">
            <button 
                className="bg-primary-300 hover:bg-primary-500 text-black font-semibold text-lg md:text-xl px-6 h-12 md:h-12 rounded-xl shadow-md transition-all duration-300 ease-in-out"
                onClick={handleClick}
            >
                Analyze
            </button>
        </div>
    )
}
export default AnalyzeButton