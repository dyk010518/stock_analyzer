import topStyles from '../../styles/TopRow.module.css'


const TopRow = () => {
    return (
        <thead>
            <tr className={topStyles.row}>
                <th className={topStyles.col}></th>
                <th className={topStyles.col1}>Past Numbers</th>
                <th className={topStyles.col1}>My 10-Year Assumptions</th>
            </tr>
            <tr className={topStyles.row}>
                <th className={topStyles.col}></th>
                <th className={topStyles.col}>
                    <p2>1 year</p2>
                    <p2>2 year</p2>
                    <p2>4 year</p2>
                </th>
                <th className={topStyles.col}>
                    <p2>Low</p2>
                    <p2>Mid</p2>
                    <p2>High</p2>
                </th>
            </tr>
        </thead>
    )
}

export default TopRow