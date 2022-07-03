import Link from 'next/link'
import stockStyles from '../styles/StockAnalysis.module.css'
import TopRow from './Analyzer_components/TopRow'
import Revenue from './Analyzer_components/Revenue'
import ProfitMargin from './Analyzer_components/ProfitMargin'
import FCFMargin from './Analyzer_components/FCFMargin'
import PERatio from './Analyzer_components/PERatio'
import PFCFRatio from './Analyzer_components/PFCFRatio'
import AnnualReturn from './Analyzer_components/AnnualReturn'
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
            <AnnualReturn reports={reports}/>
        </table>
        // </Table>
    )
}

const getAverage = (input_array) => {
    let sum = 0
    let irrelevant = 0
    for(var i = 0; i < input_array.length; i++){
        if(typeof input_array[i] == "number") sum += input_array[i]
        if(typeof input_array[i] != "number") irrelevant ++
    }
    return input_array.length != irrelevant ? sum/(input_array.length-irrelevant) : undefined
}

export {StockAnalyzer, getAverage}