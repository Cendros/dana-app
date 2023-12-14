import { atomWithStorage } from 'jotai/utils'
import { EventType } from '../types/event';

export const tokenAtom = atomWithStorage<string | undefined | null>('token', undefined);

export const ticketsAtom = atomWithStorage<Array<EventType>>('tickets', []);
