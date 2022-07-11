import {server} from "../../../config"
import Link from 'next/link'
import { useRouter } from "next/router"
import Meta from '../../../components/Meta'
import StockAnalyzer from "../../../components/StockAnalyzer"
import AnalyzeButton from '../../../components/AnalyzeButton'
import StockTitle from "../../../components/StockTitle"
import {useState} from 'react'
import AnalyzeReturn from "../../../components/AnalyzeReturn"
import SymbolSearch from "../../../components/SymbolSearch"
import {resetInputs, getAnalyzedResults} from "../../../utils"



let earningVals, fcfVals


const article = ({income_statement, balance_sheet, cash_flow, stock_info, price_info,}) => {
    const [analyzed, setAnalyzed] = useState(false);

    const handleClick = () => {
        const analysisResult = getAnalyzedResults(income_statement, balance_sheet)
        earningVals = analysisResult['earningsVals']
        fcfVals = analysisResult['fcfVals']
        setAnalyzed(analyzed = true)
    }

    const AnalysisOff = () => {
        setAnalyzed(analyzed = false)
        resetInputs()
    }

    const reports = {
        IS: income_statement,
        BS: balance_sheet,
        CF: cash_flow,
        SI: stock_info,
        PI: price_info,
    }

    const found = income_statement.symbol ? true : false  

    return <>
        <Meta />
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
        
    </>
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

// const getAnalyzedResults = (IS, BS) => {
//     const number_of_quarters = IS.quarterlyReports.length
//     const last_revenue = number_of_quarters >= 4 ? getAverage([getQuarterlyRevenue(IS, 0), getQuarterlyRevenue(IS, 1), getQuarterlyRevenue(IS, 2), getQuarterlyRevenue(IS, 3)])*4 : undefined
//     const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined
//     const [growth_low, growth_mid, growth_high] = [Number(document.getElementById("revenue_input_low").value)/100, Number(document.getElementById("revenue_input_mid").value)/100, Number(document.getElementById("revenue_input_high").value)/100] 
//     const [p_margin_low, p_margin_mid, p_margin_high] = [Number(document.getElementById("ProfitMargin_input_low").value)/100, Number(document.getElementById("ProfitMargin_input_mid").value)/100, Number(document.getElementById("ProfitMargin_input_high").value)/100] 
//     const [fcf_margin_low, fcf_margin_mid, fcf_margin_high] = [Number(document.getElementById("FCFMargin_input_low").value)/100, Number(document.getElementById("FCFMargin_input_mid").value)/100, Number(document.getElementById("FCFMargin_input_high").value)/100] 
//     const [pe_low, pe_mid, pe_high] = [Number(document.getElementById("PE_input_low").value), Number(document.getElementById("PE_input_mid").value), Number(document.getElementById("PE_input_high").value)] 
//     const [pfcf_low, pfcf_mid, pfcf_high] = [Number(document.getElementById("PFCF_input_low").value), Number(document.getElementById("PFCF_input_mid").value), Number(document.getElementById("PFCF_input_high").value)] 
//     const [discount_low, discount_mid, discount_high] = [Number(document.getElementById("AnnualReturn_input_low").value)/100, Number(document.getElementById("AnnualReturn_input_mid").value)/100, Number(document.getElementById("AnnualReturn_input_high").value)/100] 
    
//     return {
//         'earningsVals': [getDiscountedVal(last_revenue, shares, growth_low, p_margin_low, pe_low, discount_low), getDiscountedVal(last_revenue, shares, growth_mid, p_margin_mid, pe_mid, discount_mid), getDiscountedVal(last_revenue, shares, growth_high, p_margin_high, pe_high, discount_high)],
//         'fcfVals': [getDiscountedVal(last_revenue, shares, growth_low, fcf_margin_low, pfcf_low, discount_low), getDiscountedVal(last_revenue, shares, growth_mid, fcf_margin_mid, pfcf_mid, discount_mid), getDiscountedVal(last_revenue, shares, growth_high, fcf_margin_high, pfcf_high, discount_high)],
//     }
// }

// const getDiscountedVal = (revenue, shares, growth, margin, multiple, discount) => {
//     let rev = revenue
//     let cumulative_val = 0
//     for(var time = 1; time <= 11; time++){
//         rev *= (1+growth)
//         let per_share = rev*margin/shares
//         if (time == 11) per_share *= multiple
//         cumulative_val += per_share/(1+discount)**time
//     }
//     return cumulative_val.toFixed(2)
// }

// const getQuarterlyRevenue = (IS, quarter) => {
//     return IS.quarterlyReports[quarter].totalRevenue != "None" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined
// }

export default article