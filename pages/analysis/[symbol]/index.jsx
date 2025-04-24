import Meta from '../../../components/Meta'
import StockAnalyzerTable from "../../../components/Analyzer_components/StockAnalyzerTable"
import AnalyzeButton from '../../../components/Analyzer_components/AnalyzeButton'
import StockTitle from "../../../components/StockTitle"
import {useState} from 'react'
import AnalysisResult from "../../../components/Analyzer_components/AnalysisResult"
import SymbolSearch from "../../../components/SymbolSearch"
import Header from '../../../components/Header'
import {resetInputs, getAnalyzedResults, addCurrencyConversion} from "../../../utils/utils"
import ResetButton from '../../../components/Analyzer_components/ResetButton'

const stockHome = ({reports}) => {
    const [analyzed, setAnalyzed] = useState(false);
    const [earningVals, setEarningVals] = useState(false);
    const [fcfVals, setFcfVals] = useState(false);
    const [numYears, setNumYears] = useState(5);

    const handleAnalyzeClick = () => {
        const analysisResult = getAnalyzedResults(reports, numYears)
        setEarningVals(analysisResult['earningsVals'])
        setFcfVals(analysisResult['fcfVals'])
        setAnalyzed(true)
    }

    const handleResetClick = () => {
        setAnalyzed(false)
        resetInputs()
    }

    const AnalysisOff = () => {
        setAnalyzed(false)
        found && resetInputs()
    }

    const found = reports.IS.symbol ? true : false  

    return <main className="bg-gray-900 min-h-screen flex flex-col items-center pt-24">
        <Meta />
        <Header />
        <SymbolSearch AnalysisOff={AnalysisOff} individual={true}/>

        <div className="flex flex-col md:flex-row w-[80vw] justify-center">
            {found && <StockTitle reports={reports}/>}
            {found && <AnalyzeButton pressed={false} reports={reports} handleClick={handleAnalyzeClick}/>}
            {found && <ResetButton pressed={false} reports={reports} handleClick={handleResetClick}/>}
        </div>
        {found && <StockAnalyzerTable reports={reports} numYears={numYears} setNumYears={setNumYears}/>}
        {!found && (
            <div className="mt-8 p-6 max-w-lg text-center bg-red-100/10 border border-red-400 text-red-300 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Symbol Not Found</h2>
                <p className="text-base">
                We couldn't find the stock symbol {reports.symbol} you entered. Please try again with a different one.
                </p>
            </div>
        )}
        <br />
        {analyzed && (
            <AnalysisResult earningVals={earningVals} fcfVals={fcfVals}/>
        )}
        {/* <Link href='/'>Go Back Home</Link> */}
        
    </main>
}

export const getServerSideProps = async (context) => {
    const symbol = context.params.symbol;
    const ALPHA_KEY = process.env.ALPHA_API_KEY;
    const FINNHUB_KEY = process.env.FINNHUB_TOKEN;

    const urls = [
        `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${ALPHA_KEY}`,
        `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${ALPHA_KEY}`,
        `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${symbol}&apikey=${ALPHA_KEY}`,
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${ALPHA_KEY}`,
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`
    ];
    console.log(urls)

    const [
        income_statement,
        balance_sheet,
        cash_flow,
        stock_info,
        price_info
    ] = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
    );

    const reports = await addCurrencyConversion({
        symbol,
        IS: income_statement,
        BS: balance_sheet,
        CF: cash_flow,
        SI: stock_info,
        PI: price_info,
    });

    return {
        props: {
            reports
        }
    };
};

export default stockHome