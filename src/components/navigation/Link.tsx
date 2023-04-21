import type { ReactNode } from 'react'
import NextLink from 'next/link'
import clsx from '../../utils/clsx'

type LinkProps = {
    ariaLabel?: string
    href: string
    className?: string
    children: ReactNode
    noFocusRing?: boolean
    underline?: boolean
}

export default function Link({ ariaLabel, className, children, href, noFocusRing, underline }: LinkProps) {
    return (
        <div className="flex justify-center items-center w-full">
            <NextLink
                aria-label={ariaLabel}
                className={clsx(
                    'text-primary flex w-full items-center justify-center rounded border-2 border-solid border-transparent transition-[box-shadow] duration-300 ease-in-out hover:text-white sm:mx-0 md:mx-1 md:w-auto md:p-2.5',
                    className,
                    noFocusRing ? '' : 'focus:border-primary-100 focus:shadow-ring focus:text-white',
                    underline ? 'underline' : 'no-underline'
                )}
                href={href}
                prefetch={false}>
                {children}
            </NextLink>

        </div>

    )
}
