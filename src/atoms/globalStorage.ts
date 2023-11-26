import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai/vanilla';

const atomWithLocalStorage = (key: string, initialValue: object) => {
    const getInitialValue = () => {
        const item = localStorage.getItem(key);
        if (item !== null)
            return JSON.parse(item);
        return initialValue;
    }

    const baseAtom = atom(getInitialValue())

    const derivedAtom = atom(
        (get) => get(baseAtom),
        (get, set, update) => {
            const nextValue = typeof update === 'function' ? update(get(baseAtom)) : update;
            set(baseAtom, nextValue);
            localStorage.setItem(key, JSON.stringify(nextValue));
        },
    );

    return derivedAtom;
}

export const tokenAtom = atomWithStorage<string | undefined>('token', undefined);

export const ticketsAtom = atomWithLocalStorage('tickets', {});
