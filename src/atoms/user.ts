import { atom } from "jotai/vanilla";
import { User } from "../types/user";

export const balanceAtom = atom<number | undefined>(undefined);

export const profileAtom = atom<User | undefined>(undefined);