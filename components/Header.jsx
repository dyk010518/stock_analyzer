const Header = () => {
    return (
        <div>
            <h1
                className="text-[4rem] mb-16 leading-[1.15] text-[#aaa] text-center"
                style={{
                    textShadow: '1px 0 0 #aaa, 0 -1px 0 #aaa, 0 1px 0 #aaa, -1px 0 0 #aaa',
                }}
            >
                <span
                    className="text-[#d5a82a]"
                    style={{
                        textShadow: '1px 0 0 #aaa, 0 -1px 0 #aaa, 0 1px 0 #aaa, -1px 0 0 #aaa',
                    }}
                >
                    Stock
                </span>{' '}
                Analyzer
            </h1>
        </div>
    )
}

export default Header
