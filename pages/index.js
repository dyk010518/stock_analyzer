import {server} from '../config'
import StockAnalyzer from '../components/StockAnalyzer'
import SymbolSearch from '../components/SymbolSearch'
import AnalyzeResult from '../components/AnalyzeButton'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const testvar = true

export default function Home() {
  return (
    <div>
      <SymbolSearch individual={false}/>
      <h1>Warning:</h1>
      <h3>This website is not designed to support mobile yet.</h3>
      <h3>Only US-based stocks are well supported for now.</h3>
      <h3>There could be a few bugs with abnormal events, such as stock-splits.</h3>
    </div>
    
  )
}
