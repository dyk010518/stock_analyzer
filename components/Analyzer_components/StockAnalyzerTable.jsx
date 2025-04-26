import buildMetricsData from "../../lib/metrics";
import DesktopTable from "./DesktopTable";
import MobileDataTable from "./MobileDataTable";
import MobileInputTable from "./MobileInputTable";
import { useState } from "react";

const StockAnalyzerTable = ({ data, inputValues, setInputValues, numYears, setNumYears }) => {

  const handleInputChange = (id, value) => {
    setInputValues(prev => ({ ...prev, [id]: value }));
  };

  const pastOnlyRows = data.map(row => ({
    title: row.title,
    pastData: row.pastData,
    isPercentage: row.isPercentage
  }));

  const inputOnlyRows = data.map(row => ({
    title: row.title,
    inputIds: row.inputIds,
    isPercentage: row.isPercentage
  }));

  return (
    <div className="max-w-6xl mx-8 space-y-8 md:mt-8">
      <div className="hidden md:block">
        <DesktopTable
          data={data}
          numYears={numYears}
          setNumYears={setNumYears}
          inputValues={inputValues}
          handleInputChange={handleInputChange}
        />
      </div>

      <div className="block md:hidden space-y-8">
        <MobileDataTable pastOnlyRows={pastOnlyRows}/>
        <MobileInputTable
          inputOnlyRows={inputOnlyRows}
          numYears={numYears}
          setNumYears={setNumYears}
          inputValues={inputValues}
          handleInputChange={handleInputChange}
        />
      </div>

      
    </div>
  )
};

export default StockAnalyzerTable;
