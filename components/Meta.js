import Head from 'next/head'
import prefix from '../prefix'

const prefix = '/stock_analyzer'

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
    title: 'WebDev Mewz',
    keywords: 'web development, programming',
    desctiption: 'Get the latest news in web dev',
}

export default Meta