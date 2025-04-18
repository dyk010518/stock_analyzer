import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 px-16 bg-[#021222] bg-opacity-80 text-white border-b-[0.5px] border-white z-20 flex justify-start items-center">
            <ul className="flex flex-row items-center list-none space-x-8">
                <li>
                    <Link href='/'>
                        Stock Analyzer
                    </Link>
                </li>
                {/* <li>
                    <Link href='/guide'>
                        Guide
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav
