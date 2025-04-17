import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="h-12 px-16 bg-[#333333] text-white flex justify-start items-center">
            <ul className="flex flex-row justify-center items-center list-none space-x-8">
                <li>
                    <Link href='/'>Stock Analyzer</Link>
                </li>
                <li>
                    <Link href='/guide'>Guide</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav