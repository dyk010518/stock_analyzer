const AnalyzeReturn = (props) => {
    return (
        <table className="w-[50vw]">
            <thead>
                <tr className="bg-[#fff143] text-white h-12">
                    <th></th>
                    <th>Low</th>
                    <th>Mid</th>
                    <th>High</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-[#fcf6e5ff] text-[#7f6000] h-8">
                    <th className="w-1/4">
                        <p1>Multiples Valuation</p1>
                    </th>
                    <th className="w-1/4">
                        <p className="text-xl inline-block">
                            {props.earningVals[0]}
                        </p>
                    </th>
                    <th className="w-1/4">
                        <p className="text-xl inline-block">
                            {props.earningVals[1]}
                        </p>
                    </th>
                    <th className="w-1/4">
                        <p className="text-xl inline-block">
                            {props.earningVals[2]}
                        </p>
                    </th>
                </tr>
                <tr className="bg-[#fcf6e5ff] text-[#7f6000] h-8">
                    <th className="w-1/4">
                        <p1>DCF Valuation</p1>
                    </th>
                    <th className="w-1/4">
                        <p className="text-xl inline-block">
                            {props.fcfVals[0]}
                        </p>
                    </th>
                    <th className="w-1/4">
                        <p className="text-xl inline-block">
                            {props.fcfVals[1]}
                        </p>
                    </th>
                    <th className="w-1/4">
                        <p className="text-xl inline-block">
                            {props.fcfVals[2]}
                        </p>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}



export default AnalyzeReturn