import { atom } from "jotai/vanilla";
import { EventType } from "../types/event";

export const eventsAtom = atom<Array<EventType> | undefined>(undefined);