import topStyles from '../styles/TopRow.module.css'


const TopRow = () => {
    return (
        <thead>
            <tr className={topStyles.row}>
                <th className={topStyles.col}></th>
                <th className={topStyles.col}>Past Numbers</th>
                <th className={topStyles.col}>My Assumptions</th>
            </tr>
            <tr className={topStyles.row}>
                <th className={topStyles.col}></th>
                <th className={topStyles.col}>
                    <td>1 year</td>
                    <td>3 year</td>
                    <td>5 year</td>
                    <td>10 year</td>
                </th>
                <th className={topStyles.col}>
                    <td>Low</td>
                    <td>Mid</td>
                    <td>High</td>
                </th>
            </tr>
        </thead>
    )
}

export default TopRow