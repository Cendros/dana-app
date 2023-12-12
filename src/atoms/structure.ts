import { atom } from "jotai/vanilla";
import { StructureType } from "../types/structure";

export const structuresAtom = atom<Array<StructureType> | undefined>(undefined);

export const selectedStructureAtom = atom<number | undefined>(undefined);