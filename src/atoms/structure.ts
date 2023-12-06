import { atom } from "jotai/vanilla";
import { StructureMinType } from "../types/structure";

export const structuresAtom = atom<Array<StructureMinType> | undefined>(undefined);

export const selectedStructureAtom = atom<number | undefined>(undefined);