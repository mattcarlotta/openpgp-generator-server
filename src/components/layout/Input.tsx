import type { ChangeEvent } from "react"

export type InputProps = {
    id: string
    label: string
    min?: string
    max?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    value: string
    type?: string
}

export default function Input({ id, label, ...rest }: InputProps) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="block" html-for={id}>
                {label}
            </label>
            <input
                className="rounded px-1.5 py-2 text-black"
                name={id}
                id={id}
                required
                {...rest}
            />
        </div>
    );
}
