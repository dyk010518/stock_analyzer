import {server} from "../../../config"
import Link from 'next/link'
import { useRouter } from "next/router"
import Meta from '../../../components/Meta'
import StockAnalysis from "../../../components/StockAnalysis"

const article = ({stock}) => {
    // const router = useRouter()
    // const {id} = router.query

    return <>
        <Meta />
        <h1>{stock.symbol}</h1>
        <br />
        <StockAnalysis />
        <Link href='/'>Go Back</Link>
    </>
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://finnhub.io/api/v1/stock/financials-reported?symbol=${context.params.symbol}&freq=quarterly&token=caf8e0iad3ibf4h8u1u0`)
    const stock = await res.json()

    return {
        props: {
            stock
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