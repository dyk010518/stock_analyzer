const AnalysisResult = (props) => {
    return (
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/20 bg-white/5 backdrop-blur-md mb-16">
            <table className="w-[80vw] md:w-[50vw]">
                <thead className="text-primary-300">
                    <tr className="bg-white/10 h-12 text-sm md:text-base">
                        <th></th>
                        <th>Bear</th>
                        <th>Base</th>
                        <th>Bull</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-white h-8 font-light md:font-medium text-xs sm:text-sm md:text-base border-b border-white/10">
                        <th className="w-1/3 py-2 px-6 font-medium md:font-bold text-sm md:text-base">
                            <p1>Multiples Valuation</p1>
                        </th>
                        <th className="">
                            <p className="inline-block">
                                ${props.earningVals[0]}
                            </p>
                        </th>
                        <th className="">
                            <p className="inline-block">
                                ${props.earningVals[1]}
                            </p>
                        </th>
                        <th className="">
                            <p className="inline-block">
                                ${props.earningVals[2]}
                            </p>
                        </th>
                    </tr>
                    <tr className="text-white h-8 font-light md:font-medium text-xs sm:text-sm md:text-base border-b border-white/10">
                        <th className="w-1/3 py-2 px-6 font-medium md:font-bold text-sm md:text-base">
                            <p1>DCF Valuation</p1>
                        </th>
                        <th className="">
                            <p className="inline-block">
                                ${props.fcfVals[0]}
                            </p>
                        </th>
                        <th className="">
                            <p className="inline-block">
                                ${props.fcfVals[1]}
                            </p>
                        </th>
                        <th className="">
                            <p className="inline-block">
                                ${props.fcfVals[2]}
                            </p>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export default AnalysisResult