import Head from 'next/head'
import prefix from '../config/prefix'

const Meta = ({
    title = 'Stock Analyzer',
    keywords = 'stocks, stock analyzer, fundamental, investing, portfolio, DCF',
    description = 'Analyze and price different stocks based on your assumptions',
}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href={prefix + '/stock_chart.png'} />
            <title>{title}</title>
        </Head> 
    )
}

export default Meta