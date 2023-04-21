import { generateKey } from 'openpgp';
import { initTRPC } from '@trpc/server';
import * as z from 'zod';
import { Email, Name, PassPhrase, PrivateKey, PublicKey, RespError } from './types';

export const trpc = initTRPC.create();

const appRouter = trpc.router({
    createKeys: trpc.procedure
        .input(Name.merge(Email).merge(PassPhrase))
        .output(PublicKey.merge(PrivateKey).merge(RespError))
        .query(async ({ input }) => {
            try {
                const data = await generateKey({
                    type: 'rsa',
                    rsaBits: 4096,
                    userIDs: [{ name: input.name, email: input.email }],
                    passphrase: input.passphrase
                });

                const result = PublicKey.merge(PrivateKey).parse(data);
                return { ...result, error: '' };
            } catch (error) {
                const e = error instanceof z.ZodError ? error?.message : error?.toString();
                console.error(e);
                throw e;
            }
        }),
});

export default appRouter;

export type AppRouter = typeof appRouter
