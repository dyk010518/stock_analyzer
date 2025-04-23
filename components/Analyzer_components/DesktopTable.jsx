import TopRow from "./TopRow";
import NormalRow from "./NormalRow";

const DesktopTable = ({ data, numYears, setNumYears, inputValues, handleInputChange }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
        <table className="w-full table-auto text-center">
            <TopRow numYears={numYears} setNumYears={setNumYears} />
            <tbody>
            {data.map((row, idx) => (
                <NormalRow key={`mobile-${idx}`} row={row} rowIdx={idx} inputValues={inputValues} handleInputChange={handleInputChange}/>
            ))}
            </tbody>
        </table>
    </div>


  )
};

export default DesktopTable;
