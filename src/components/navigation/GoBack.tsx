import GoHomeIcon from '../../icons/GoHomeIcon'
import Link from './Link'

export default function GoBack({ href, title }: { href: string, title: string }) {
    return (
        <div className="flex items-center gustify-center">
            <Link className="text-xl font-bold w-auto" href={href}>
                <div className="flex items-center justify-center space-x-2">
                    <GoHomeIcon className="text-xl" />
                    <span>Go back to {title} page</span>
                </div>
            </Link>
        </div>

    )
}
