import type { AppProps } from 'next/app'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <main id="main" className="mx-auto w-full max-w-main px-2.5 lg:px-0">
            <div className="min-h-body p-2.5 md:p-0">
                <Component {...pageProps} />
            </div>
        </main>
    )
}

export default App;
