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
                    <p2>1 year</p2>
                    <p2>5 year</p2>
                    <p2>10 year</p2>
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