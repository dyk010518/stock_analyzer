import Link from 'next/link'
import stockStyles from '../styles/StockAnalysis.module.css'
import TopRow from './TopRow'
import Revenue from './Revenue'
import ProfitMargin from './ProfitMargin'
import FCFMargin from './FCFMargin'
import PERatio from './PERatio'
import PFCFRatio from './PFCFRatio'
import AnnualReturn from './AnnualReturn'



const StockAnalysis = () => {
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

export default StockAnalysis