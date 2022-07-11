import searchStyles from '../styles/SymbolSearch.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SymbolSearch = (props) => {
    const router = useRouter()

    const handleClick = (input) => {
        /[a-zA-Z]/.test(input.value) && router.push(`/analysis/${input.value.toUpperCase()}`)
        input.value = ""
        if (props.individual) props.AnalysisOff()
    }

    return (
        <div className={searchStyles.container}>
            <input type='text' id="userInput" placeholder='Search Stock Symbol' className={searchStyles.search}></input>
            {typeof window !=='undefined' && (document.getElementById("userInput").value = "")}
            <button className={searchStyles.button} onClick={() => handleClick(document.getElementById("userInput"))}><img src="/search.png" className={searchStyles.glass}></img></button>
        </div>
    )
}




export default SymbolSearch