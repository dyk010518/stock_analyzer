import {server} from '../config'
import ArticleList from '../components/ArticleList'
import StockAnalyzer from '../components/StockAnalyzer'
import SymbolSearch from '../components/SymbolSearch'
import AnalyzeResult from '../components/AnalyzeResult'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const testvar = true

export default function Home({articles}) {
  return (
    <div>
      {/* {testvar ? (<SymbolSearch/>) : (<></>)} */}
      <SymbolSearch />
      <StockAnalyzer />
      <AnalyzeResult pressed={testvar} />
      {/* <ArticleList articles={articles}/> */}
    </div>
    
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }