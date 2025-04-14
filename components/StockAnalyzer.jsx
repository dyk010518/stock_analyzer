import Link from 'next/link'
import stockStyles from '../styles/StockAnalysis.module.css'
import TopRow from './Analyzer_components/TopRow'
import Revenue from './Analyzer_components/Revenue'
import ProfitMargin from './Analyzer_components/ProfitMargin'
import FCFMargin from './Analyzer_components/FCFMargin'
import PERatio from './Analyzer_components/PERatio'
import PFCFRatio from './Analyzer_components/PFCFRatio'
import DiscountRate from './Analyzer_components/DiscountRate'
import Table from 'react-bootstrap/Table';




const StockAnalyzer = ({reports}) => {
    return (
        // <Table striped bordered hover>
        <table className={stockStyles.table}>
            <TopRow />
            <Revenue reports={reports} />
            <ProfitMargin reports={reports}/>
            <FCFMargin reports={reports}/>
            <PERatio reports={reports}/>
            <PFCFRatio reports={reports}/>
            <DiscountRate reports={reports}/>
        </table>
        // </Table>
    )
}


export default StockAnalyzer