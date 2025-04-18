import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const SymbolSearch = (props) => {
    const [inputValue, setInputValue] = useState('')
    const router = useRouter()

    const handleClick = () => {
        if (/[a-zA-Z]/.test(inputValue)) {
            router.push(`/analysis/${inputValue.toUpperCase()}`)
        }
        setInputValue('')
        if (props.individual) props.AnalysisOff()
    }

    return (
        <div className="flex justify-center mb-8">
            <input 
                type="text"
                id="userInput"
                placeholder="Search Stock Symbol"
                className="h-10 w-72 text-xl text-gray-700 pl-4"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
                className="h-10 w-10 bg-gray-400 flex items-center justify-center"
                onClick={handleClick}
            >
                <Image 
                    src="/search.png" 
                    alt="Search" 
                    width={24} // You can set the width and height as needed
                    height={24} 
                />
            </button>
        </div>
    )
}

export default SymbolSearch
