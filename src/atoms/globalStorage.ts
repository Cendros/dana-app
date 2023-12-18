import { atomWithStorage } from 'jotai/utils'
import { EventType } from '../types/event';

export const tokenAtom = atomWithStorage<string | undefined>('token', undefined, undefined, { getOnInit: true });

export const ticketsAtom = atomWithStorage<Array<EventType>>('tickets', []);
