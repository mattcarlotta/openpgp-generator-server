export default function getBaseUrl() {
    if (typeof window === 'undefined')
        return '';

    if (process.env.PUBLIC_VERCEL_URL)
        return `https://${process.env.PUBLIC_VERCEL_URL}`;

    return `http://localhost:${process.env.PORT ?? 3000}`;
}
