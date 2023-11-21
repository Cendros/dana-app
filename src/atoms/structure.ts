import { atom } from "jotai/vanilla";
import { StructureMinType } from "../types/structure";

export const structuresAtom = atom<Array<StructureMinType> | undefined>(undefined);