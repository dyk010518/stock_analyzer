import TopRow from "./TopRow";
import NormalRow from "./NormalRow";

const DesktopTable = ({ data, fiscalDate, numYears, setNumYears, inputValues, handleInputChange }) => {
  return (
    <>
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
      <div className="text-right mt-2 mr-2">
        <span className="italic text-gray-400">
          Latest fiscal quarter: <span className="not-italic font-bold text-primary-300">{fiscalDate}</span>
        </span>
      </div>
    </>


  )
};

export default DesktopTable;
