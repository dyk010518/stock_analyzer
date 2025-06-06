import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'

const SymbolSearch = ( {resetAnalyzer, searched} ) => {
    const [inputValue, setInputValue] = useState('')
    const router = useRouter()

    const handleClick = () => {
        if (/[a-zA-Z]/.test(inputValue)) {
            router.push(`/analysis/${inputValue.toUpperCase()}`)
        }
        setInputValue(inputValue.toUpperCase())
        if (searched) resetAnalyzer()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    useEffect(() => {
        setInputValue('');
      }, [router.query.symbol]);

    return (
        <div className="flex justify-center mb-8">
            <input 
                type="text"
                id="userInput"
                placeholder="Search Stock Symbol"
                className="h-10 w-48 md:w-72 text-base md:text-xl text-gray-700 pl-4 mr-2 rounded-full"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button 
                className="h-10 w-10 bg-gray-400 flex items-center justify-center rounded-full hover:bg-gray-500 duration-200"
                onClick={handleClick}
            >
                <Image 
                    src="/search.png" 
                    alt="Search" 
                    width={24}
                    height={24}
                />
            </button>
        </div>
    )
}

export default SymbolSearch
