import Header from '../components/layout/Header'
import NotFound from '../components/layout/NotFound'


export default function NotFoundPage() {
    return (
        <>
            <Header title="Page Not Found" description="Unable to locate the requested page" />
            <NotFound />
        </>
    )
}
