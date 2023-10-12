import { atomWithStorage } from 'jotai/utils'
import { CheckType } from '../types/check';

export const tokenAtom = atomWithStorage<string | undefined>('token', undefined);

export const code128Atom = atomWithStorage<string | undefined>('code128', undefined);

export const storedChecksAtom = atomWithStorage<Array<CheckType> | undefined>('storedChecks', undefined);