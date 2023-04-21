import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { client } from '../../server/client';
import clsx from '../../utils/clsx';
import Input from './Input'

type Store = {
    name: string;
    email: string;
    passphrase: string;
    privateKey: string;
    publicKey: string;
    isSubmitting: boolean;
};

function OpenPGPKey({ children, title }: { title: string, children: string }) {
    return (
        <>
            <h2 className="text-xl font-bold">{title}</h2>
            <textarea readOnly rows={10} className="w-full text-black bg-white p-1" value={children} />
        </>
    )
}

const initialState = {
    name: '',
    email: '',
    passphrase: '',
    privateKey: '',
    publicKey: '',
    isSubmitting: false,
}

export default function OpenPGPForm() {
    const [store, setStore] = useState<Store>(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStore(p => ({ ...p, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!store.name || !store.email || !store.passphrase) return;

        setStore(p => ({ ...p, isSubmitting: true, privateKey: '', publicKey: '' }))

        try {
            const { privateKey, publicKey } = await client.createKeys.query({
                name: store.name,
                email: store.email,
                passphrase: store.passphrase
            });

            setStore({ ...initialState, privateKey, publicKey })
        } catch (error: any) {
            alert(error.toString());
            setStore(p => ({ ...p, isSubmitting: false }))
        }
    };

    return (
        <div className="w-full max-w-xl flex flex-col rounded bg-primary-800 p-8 text-white my-10">
            <h1 className="text-center text-3xl">Generate OpenPGP Keys</h1>
            <h2 className="text-center text-3xl">Server-Side</h2>
            <form className="full flex flex-col space-y-4" onSubmit={handleSubmit}>
                <Input
                    min="1"
                    type="text"
                    label="Name"
                    id="name"
                    placeholder="Enter name..."
                    value={store.name}
                    onChange={handleInputChange}
                />
                <Input
                    type="email"
                    id="email"
                    label="Email"
                    placeholder="Enter email..."
                    value={store.email}
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    id="passphrase"
                    min="10"
                    max="30"
                    label="Pass Phrase (min. 10 characters)"
                    placeholder="Enter pass phrase..."
                    value={store.passphrase}
                    onChange={handleInputChange}
                />
                <div className='!mt-10'>
                    <button
                        disabled={store.isSubmitting}
                        className={clsx(
                            store.isSubmitting ? 'text-gray-200 bg-gray cursor-none' : 'text-white bg-orange-500',
                            'w-full text-lg rounded primary p-3.5'
                        )}
                        type="submit"
                    >
                        {store.isSubmitting ? "Generating keys..." : "Generate"}
                    </button>
                </div>
            </form>
            {store.privateKey && store.publicKey ?
                <div className="mt-4">
                    <div className="h-px border-t border-dashed border-white my-3.5" />
                    <OpenPGPKey title="Private Key">
                        {store.privateKey}
                    </OpenPGPKey>
                    <OpenPGPKey title="Public Key">
                        {store.publicKey}
                    </OpenPGPKey>
                </div>
                : null}
        </div>
    );
}
