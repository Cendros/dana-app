import { atom } from "jotai/vanilla";
import { CheckType } from "../types/check";

export const checksAtom = atom<Array<CheckType> | undefined>(undefined);

export const balanceAtom = atom<number | undefined>(undefined);