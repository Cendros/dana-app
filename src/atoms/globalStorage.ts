import { atomWithStorage } from 'jotai/utils'

export const tokenAtom = atomWithStorage<string | undefined>('token', undefined);

export const code128Atom = atomWithStorage<string | undefined>('code128', undefined);