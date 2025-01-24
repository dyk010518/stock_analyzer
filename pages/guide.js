import Meta from '../components/Meta'
import {useState} from 'react'
import Image from 'next/image';
import Step1 from '../public/Step_1.gif'
import Step2 from '../public/Step_2.gif'
import Step3 from '../public/Step_3.gif'


const instrusctions = {
    0: "Step 1: Type the ticker of the symbol and press the search button. Make sure it's NYSE listed.",
    1: "Step 2: Put in your assumptions for the next 10 years of that stock in bear, base, and bull cases.",
    2: "Step 3: Press analyze button and see the fair price in bear, base, and bull case based on your assumptions."
}


const Guide = () => {
    const [step, setStep] = useState(0);

    const handleClick = () => {
        setStep(step = (step+1)%3)
    }

    return <>
        {step == 0 && <Image src={Step1} alt="my gif" height={500} width={800} /> }
        {step == 1 && <Image src={Step2} alt="my gif" height={500} width={800} /> }
        {step == 2 && <Image src={Step3} alt="my gif" height={500} width={800} /> }
        <h2>{instrusctions[step]}</h2>

        <button onClick={handleClick}>Move</button>

        
    </>
}

export default Guide