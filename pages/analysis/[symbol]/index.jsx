    import Meta from '../../../components/Meta'
    import StockAnalyzer from "../../../components/StockAnalyzer"
    import AnalyzeButton from '../../../components/AnalyzeButton'
    import StockTitle from "../../../components/StockTitle"
    import {useState} from 'react'
    import AnalyzeReturn from "../../../components/AnalyzeReturn"
    import SymbolSearch from "../../../components/SymbolSearch"
    import Header from '../../../components/Header'


    import {resetInputs, getAnalyzedResults} from "../../../utils"

    const article = ({income_statement, balance_sheet, cash_flow, stock_info, price_info,}) => {
        const [analyzed, setAnalyzed] = useState(false);
        const [earningVals, setEarningVals] = useState(false);
        const [fcfVals, setFcfVals] = useState(false);

        const handleClick = () => {
            const analysisResult = getAnalyzedResults(income_statement, balance_sheet)
            setEarningVals(earningVals = analysisResult['earningsVals'])
            setFcfVals(fcfVals = analysisResult['fcfVals'])
            setAnalyzed(analyzed = true)
        }

        const AnalysisOff = () => {
            setAnalyzed(analyzed = false)
            found && resetInputs()
        }

        const reports = {
            IS: income_statement,
            BS: balance_sheet,
            CF: cash_flow,
            SI: stock_info,
            PI: price_info,
        }

        const found = income_statement.symbol ? true : false  

        return <main className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
            <Meta />
            <Header />
            <SymbolSearch AnalysisOff={AnalysisOff} individual={true}/>

            <div class="info-container">
                {found && <StockTitle reports={reports}/>}
                {found && <AnalyzeButton pressed={false} reports={reports} handleClick={handleClick}/>}
            </div>
            <br />
            {found && <StockAnalyzer reports={reports}/>}
            {!found && <h2>We couldn't find the symbol you typed. Please try again with a different symbol</h2>}
            <br />
            {analyzed && (
                <AnalyzeReturn earningVals={earningVals} fcfVals={fcfVals}/>
            )}
            {/* <Link href='/'>Go Back Home</Link> */}
            
        </main>
    }

    export const getServerSideProps = async (context) => {
        const res1 = await fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
        const income_statement = await res1.json()

        const res2 = await fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
        const balance_sheet = await res2.json()

        const res3 = await fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
        const cash_flow = await res3.json()

        const res5 = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
        const stock_info = await res5.json()

        const res6 = await fetch(`https://finnhub.io/api/v1/quote?symbol=${context.params.symbol}&token=${process.env.FINNHUB_TOKEN}`)
        const price_info = await res6.json()

        return {
            props: {
                income_statement, 
                balance_sheet,
                cash_flow,
                stock_info,
                price_info,
            }
        }
    }

    export default article