const AnalyzeButton = (props) => {

    return (
        <div className="flex justify-center mt-8">

            <button 
                className="bg-[#d5a82aff] text-white text-2xl h-12 w-44"
                onClick={props.handleClick}
            >
                Analyze
            </button>
        </div>
    )
}



export default AnalyzeButton