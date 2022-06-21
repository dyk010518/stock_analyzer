import headerStyles from '../styles/Header.module.css'
import SymbolSearch from './SymbolSearch'

const Header = () => {
    return (
        <div>
            <h1 className = {headerStyles.title}>
                <span>Stock</span> Analyzer
            </h1>

            <SymbolSearch />
        </div>
    )
}

export default Header