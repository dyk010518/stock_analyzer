import Table from 'react-bootstrap/Table';

const AnalyzeReturn = (props) => {

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th></th>
                    <th>Low</th>
                    <th>Mid</th>
                    <th>High</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Multiples Valuation</td>
                    <td>{props.earningVals[0]}</td>
                    <td>{props.earningVals[1]}</td>
                    <td>{props.earningVals[2]}</td>
                </tr>
                <tr>
                    <td>DCF Valuation</td>
                    <td>{props.fcfVals[0]}</td>
                    <td>{props.fcfVals[1]}</td>
                    <td>{props.fcfVals[2]}</td>
                </tr>
            </tbody>
        </Table>
    )
}



export default AnalyzeReturn