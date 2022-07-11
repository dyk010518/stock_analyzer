import Table from 'react-bootstrap/Table';
import returnStyles from '../styles/AnalyzeReturn.module.css'


const AnalyzeReturn = (props) => {

    return (
        <table className={returnStyles.table}>
            <thead>
                <tr className={returnStyles.top_row}>
                    <th className={returnStyles.top_col}></th>
                    <th className={returnStyles.top_col}>Low</th>
                    <th className={returnStyles.top_col}>Mid</th>
                    <th className={returnStyles.top_col}>High</th>
                </tr>
            </thead>
            <tbody>
                <tr className={returnStyles.row}>
                    <th className={returnStyles.col}>
                        <p1>Multiples Valuation</p1>
                    </th>
                    <th className={returnStyles.col}>
                        <p2>{props.earningVals[0]}</p2>
                    </th>
                    <th className={returnStyles.col}>
                        <p2>{props.earningVals[1]}</p2>
                    </th>
                    <th className={returnStyles.col}>
                        <p2>{props.earningVals[2]}</p2>
                    </th>
                </tr>
                <tr className={returnStyles.row}>
                    <th className={returnStyles.col}>
                        <p1>DCF Valuation</p1>
                    </th>
                    <th className={returnStyles.col}>
                        <p2>{props.fcfVals[0]}</p2>
                    </th>
                    <th className={returnStyles.col}>
                        <p2>{props.fcfVals[1]}</p2>
                    </th>
                    <th className={returnStyles.col}>
                        <p2>{props.fcfVals[2]}</p2>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}



export default AnalyzeReturn