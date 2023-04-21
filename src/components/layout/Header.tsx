import Head from 'next/head'
import concatTitle from '../../utils/concatTitle'
import { useRouter } from 'next/router'

export type HeaderProps = {
    description?: string
    title?: string
    type?: string
}

export default function Header({
    description = 'OpenPGP Key Generator',
    title = '',
    type = 'website'
}: HeaderProps) {
    const { asPath } = useRouter()
    const baseUrl = process.env.NEXT_PUBLIC_HOST_URL
    const documentTitle = concatTitle(title, description);

    return (
        <Head>
            <meta name="viewport" content="width=device-width" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="canonical" href={`${baseUrl}${asPath}`} />
            <link rel="apple-touch-icon" sizes="192x192" href="/logo_192x192.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/logo_192x192.png" color="#01406C" />
            <meta name="theme-color" content="#000000" />
            <meta name="robots" content="all" />
            <meta name="googlebot" content="all" />
            <meta property="og:locale" content="en_US" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="description" content={description} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={documentTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={type} />
            <meta property="og:site_name" content="OpenPGP Key Generator | Matt Carlotta" />
            <title>{documentTitle}</title>
        </Head>
    )
}
