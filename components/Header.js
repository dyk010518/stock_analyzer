import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className = {headerStyles.title}>
                <span>Stock</span> Analyzer
            </h1>
            <p className={headerStyles.description}>Stock Analyzer Tool</p>
        </div>
    )
}

export default Header