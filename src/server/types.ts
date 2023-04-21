import * as z from 'zod';

export const Name = z.object({ name: z.string().min(1) });
export const Email = z.object({ email: z.string().min(1) });
export const PassPhrase = z.object({ passphrase: z.string().min(10).max(30) });

export const PublicKey = z.object({ publicKey: z.string() });
export const PrivateKey = z.object({ privateKey: z.string() });
export const RespError = z.object({ error: z.string().optional() })

