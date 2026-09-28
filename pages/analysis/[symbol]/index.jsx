import Meta from '../../../components/Meta'
import Header from '../../../components/Header'
import SymbolSearch from '../../../components/SymbolSearch'
import StockTitle from '../../../components/StockTitle'
import Buttons from '../../../components/Analyzer_components/Buttons'
import StockAnalyzerTable from "../../../components/Analyzer_components/StockAnalyzerTable"
import AnalysisResult from "../../../components/Analyzer_components/AnalysisResult"

import { useState } from 'react'
import { resetInputElements, getAnalyzedResults, getShares } from "../../../utils/utils"
import { buildMetricsData } from "../../../lib/metrics"
import { getReportsForSymbol } from '../../../lib/getReports'

const DATA_ERRORS = {
  unsupported: ['Financial Statements Unavailable', 'This company does not have supported quarterly US-GAAP statements in US dollars. Funds, foreign filers, and companies using custom accounting tags may not be supported.'],
  configuration: ['Financial Data Not Configured', 'The financial data connection has not been configured. Please contact the site owner.'],
  rate_limited: ['Financial Data Temporarily Busy', 'The data provider is limiting requests. Please try again in a minute.'],
  unavailable: ['Financial Data Unavailable', 'We could not reach the financial data provider. Please try again shortly.'],
};

const StockHome = ({reports}) => {
  const [analyzed, setAnalyzed] = useState(false);
  const [earningVals, setEarningVals] = useState(false);
  const [fcfVals, setFcfVals] = useState(false);
  const [projections, setProjections] = useState([]);
  const [numYears, setNumYears] = useState(5);

  const found = Boolean(reports?.IS?.symbol)
  const dataError = reports?.error === 'not_found'
    ? ['Symbol Not Found', `We couldn't find the stock symbol ${reports.symbol} you entered. Please try again with a different one.`]
    : DATA_ERRORS[reports?.error] || DATA_ERRORS.unavailable

  const data = buildMetricsData(reports, found);
  const allInputIds = data.flatMap(row => row.inputIds || []);
  const initialInputState = Object.fromEntries(allInputIds.map(id => [id, ""]))
  const [inputValues, setInputValues] = useState(initialInputState)


  const resetInputs = () => {
    resetInputElements()
    setInputValues(initialInputState)
  }

  const handleAnalyzeClick = () => {
    const yearlyResults = Array.from({ length: numYears }, (_, index) => ({
      year: index + 1,
      ...getAnalyzedResults(reports, index + 1),
    }))
    const analysisResult = yearlyResults[yearlyResults.length - 1]
    setProjections(yearlyResults)
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
      <Meta />
      <Header />
      <SymbolSearch resetAnalyzer={resetAnalyzer} searched={true}/>

      <div className="analysis-company-row">
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
          <h2 className="text-2xl font-semibold mb-2">{dataError[0]}</h2>
          <p className="text-base">
            {dataError[1]}
          </p>
        </div>
      )}

      <br />

      {analyzed && (
        <AnalysisResult earningVals={earningVals} fcfVals={fcfVals} projections={projections} />
      )}

      {found && (
        <details className="data-note">
          <summary>Data sources &amp; coverage</summary>
          <p>
          Financial statements: SEC EDGAR · USD · Missing or incomplete history is shown as “-”.
          {reports.BS.sharesSource === 'Finnhub' && ' Current shares outstanding: Finnhub.'}
          {reports.quoteStatus !== 'ok' && ' Quotes are unavailable. P/E and P/FCF require a current quote.'}
          {!getShares(reports.BS) && ' Shares outstanding are unavailable. P/E, P/FCF, and per-share valuations require a share count.'}
          </p>
        </details>
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
