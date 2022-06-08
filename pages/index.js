import {server} from '../config'
import ArticleList from '../components/ArticleList'
import StockAnalysis from '../components/StockAnalysis'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  return (
    <div>
      <StockAnalysis />
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

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}