import {server} from "../../../config"
import Link from 'next/link'
import { useRouter } from "next/router"
import Meta from '../../../components/Meta'
import { StockAnalyzer } from "../../../components/StockAnalyzer"
import AnalyzeResult from '../../../components/AnalyzeResult'
import StockTitle from "../../../components/StockTitle"


const article = ({income_statement, balance_sheet, cash_flow, daily_adjusted, stock_info, price_info,}) => {
    const info = {
        SI: stock_info,
        PI: price_info,
    }

    const reports = {
        IS: income_statement,
        BS: balance_sheet,
        CF: cash_flow,
        DA: daily_adjusted,
    }

    const found = income_statement.symbol ? true : false  

    return <>
        <Meta />
        {found && <StockTitle info={info}/>}
        <br />
        {found && <StockAnalyzer reports={reports}/>}
        {found && <AnalyzeResult pressed={false} />}
        {!found && <h2>We couldn't find the symbol you typed. Please try again with a different symbol</h2>}
        <Link href='/'>Go Back Home</Link>
        
    </>
}

export const getServerSideProps = async (context) => {
    const res1 = await fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const income_statement = await res1.json()

    const res2 = await fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const balance_sheet = await res2.json()

    const res3 = await fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const cash_flow = await res3.json()

    const res4 = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const daily_adjusted = await res4.json() 

    const res5 = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const stock_info = await res5.json()

    const res6 = await fetch(`https://finnhub.io/api/v1/quote?symbol=${context.params.symbol}&token=${process.env.FINNHUB_TOKEN}`)
    const price_info = await res6.json()

    return {
        props: {
            income_statement, 
            balance_sheet,
            cash_flow,
            daily_adjusted,
            stock_info,
            price_info,
        }
    }
}

const getCompanyStats = async (symbol) => {
    const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}}&apikey=${process.env.ALPHA_API_KEY}`)
    const obj = await res.json()
    console.log(obj)
    return 1
}

export default article