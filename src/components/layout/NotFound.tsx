import NotFoundIcon from '../../icons/NotfoundIcon'
import GoBack from '../navigation/GoBack'

export default function NotFound() {
    return (
        <>
            <div className="flex h-128 flex-col items-center justify-center space-y-8">
                <NotFoundIcon className="text-ginormous" />
                <p className="py-2.5 px-5 tracking-wide">Unable to locate the requested page.</p>
            </div>
            <GoBack href="/" title="home" />
        </>
    )
}
