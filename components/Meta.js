import Head from 'next/head'
import prefix from '../prefix'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href={prefix + '/favicon.ico'} />
            <title>{title}</title>
        </Head> 
    )
}

Meta.defaultProps = {
    title: 'Stock Analyzer',
    keywords: 'stocks, stock analyzer, fundamental, investing, portfolio, DCF',
    desctiption: 'Analyze and price different stocks based on your assumptions',
}

export default Meta