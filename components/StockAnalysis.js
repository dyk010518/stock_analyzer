import Link from 'next/link'
import stockStyles from '../styles/StockAnalysis.module.css'
import TopRow from './TopRow'

const StockAnalysis = () => {
    return (
        <table className={stockStyles.table}>
            <TopRow />
        </table>
    )
}

export default StockAnalysis