import {server} from "../../../config"
import Link from 'next/link'
import { useRouter } from "next/router"
import Meta from '../../../components/Meta'
import { StockAnalyzer } from "../../../components/StockAnalyzer"
import AnalyzeResult from '../../../components/AnalyzeResult'


const article = ({income_statement, balance_sheet, cash_flow, daily_adjusted}) => {
    const reports = {
        IS: income_statement,
        BS: balance_sheet,
        CF: cash_flow,
        DA: daily_adjusted,
    }
    const found = income_statement.symbol ? true : false  

    return <>
        <Meta />
        {found && (<h1>{reports.IS.symbol}</h1>)}
        <br />
        <h>{found}</h>
        <StockAnalyzer reports={reports}/>
        <AnalyzeResult pressed={false} />
        <Link href='/'>Search up a new stock</Link>
        
    </>
}

export const getServerSideProps = async (context) => {
    const res1 = await fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const income_statement = await res1.json()


    const res2 = await fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const balance_sheet = await res2.json()

    const res3 = await fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${context.params.symbol}&apikey=${process.env.ALPHA_API_KEY}`)
    const cash_flow = await res3.json()

    const res4 = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${context.params.symbol}&outputsize=full&apikey=${process.env.ALPHA_API_KEY}`)
    const daily_adjusted = await res4.json() 

    return {
        props: {
            income_statement, 
            balance_sheet,
            cash_flow,
            daily_adjusted,
        }
    }
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     console.log(article.id)

//     return {
//         props: {
//             article
//         }
//     }

// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false,
//     }
// }

export default article