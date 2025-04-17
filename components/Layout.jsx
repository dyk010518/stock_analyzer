import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'


const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className="flex flex-col justify-start items-center bg-[#191919]">
                <main className="min-h-screen py-16 text-xl text-white">
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout