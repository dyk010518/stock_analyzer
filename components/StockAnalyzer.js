import Link from 'next/link'
import stockStyles from '../styles/StockAnalysis.module.css'
import TopRow from './Analyzer_components/TopRow'
import Revenue from './Analyzer_components/Revenue'
import ProfitMargin from './Analyzer_components/ProfitMargin'
import FCFMargin from './Analyzer_components/FCFMargin'
import PERatio from './Analyzer_components/PERatio'
import PFCFRatio from './Analyzer_components/PFCFRatio'
import AnnualReturn from './Analyzer_components/AnnualReturn'



const StockAnalyzer = () => {
    return (
        <table className={stockStyles.table}>
            <TopRow />
            <Revenue />
            <ProfitMargin />
            <FCFMargin />
            <PERatio />
            <PFCFRatio />
            <AnnualReturn />
        </table>
    )
}

export default StockAnalyzer