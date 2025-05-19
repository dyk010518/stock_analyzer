import Meta from '../../../components/Meta'
import Header from '../../../components/Header'
import SymbolSearch from '../../../components/SymbolSearch'
import StockTitle from '../../../components/StockTitle'
import Buttons from '../../../components/Analyzer_components/Buttons'
import StockAnalyzerTable from "../../../components/Analyzer_components/StockAnalyzerTable"
import AnalysisResult from "../../../components/Analyzer_components/AnalysisResult"

import { useState } from 'react'
import { resetInputElements, getAnalyzedResults } from "../../../utils/utils"
import { buildMetricsData, getLastFiscalDate } from "../../../lib/metrics"
import { getReportsForSymbol } from '../../../lib/getReports'


const StockHome = ({reports}) => {
  const [analyzed, setAnalyzed] = useState(false);
  const [earningVals, setEarningVals] = useState(false);
  const [fcfVals, setFcfVals] = useState(false);
  const [numYears, setNumYears] = useState(5);

  const found = Boolean(reports?.IS?.symbol)

  const data = buildMetricsData(reports, found);
  const allInputIds = data.flatMap(row => row.inputIds || []);
  const initialInputState = Object.fromEntries(allInputIds.map(id => [id, ""]))
  const [inputValues, setInputValues] = useState(initialInputState)


  const resetInputs = () => {
    resetInputElements()
    setInputValues(initialInputState)
  }

  const handleAnalyzeClick = () => {
    const analysisResult = getAnalyzedResults(reports, numYears)
    setEarningVals(analysisResult['earningsVals'])
    setFcfVals(analysisResult['fcfVals'])
    setAnalyzed(true)
  }

  const resetAnalyzer = () => {
    setAnalyzed(false)
    resetInputs()
  }

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center pt-24">
      <Header />
      <SymbolSearch resetAnalyzer={resetAnalyzer} searched={true}/>

      <div className="flex flex-col md:flex-row w-[80vw] justify-center">
        {found && (
          <>
            <StockTitle reports={reports} />
            <Buttons handleAnalyzeClick={handleAnalyzeClick} handleResetClick={resetAnalyzer} />
          </>
        )}
      </div>

      {found ? (
        <>
          <StockAnalyzerTable
            data={data}
            fiscalDate={reports.IS.quarterlyReports[0].fiscalDateEnding}
            inputValues={inputValues}
            setInputValues={setInputValues}
            numYears={numYears}
            setNumYears={setNumYears}
          />
        </>
      ) : (
        <div className="mt-8 p-6 max-w-lg text-center bg-red-100/10 border border-red-400 text-red-300 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Symbol Not Found</h2>
          <p className="text-base">
            We couldn't find the stock symbol {reports.symbol} you entered. Please try again with a different one.
          </p>
        </div>
      )}

      <br />

      {analyzed && (
        <AnalysisResult earningVals={earningVals} fcfVals={fcfVals} />
      )}
      
    </main>
  )
}

export const getServerSideProps = async (context) => {
  const symbol = context.params.symbol;
  const reports = await getReportsForSymbol(symbol);

  return {
    props: {
      reports,
    },
  };
};

export default StockHome