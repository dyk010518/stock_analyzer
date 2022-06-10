import searchStyles from '../styles/SymbolSearch.module.css'

const SymbolSearch = () => {
    return (
        <div className={searchStyles.container}>
            <input type='text' placeholder='Search Stock Symbol' className={searchStyles.search}></input>
            <button className={searchStyles.button}><img src="/search.png" className={searchStyles.glass}></img></button>
        </div>
    )
}

export default SymbolSearch