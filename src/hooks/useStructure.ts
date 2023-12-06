import { useAtom, useAtomValue } from "jotai/react";
import { selectedStructureAtom } from "../atoms/structure";
import { useEffect, useState } from "react";
import { StructureType } from "../types/structure";
import { getStructure } from "../services/structure";
import { tokenAtom } from "../atoms/globalStorage";

const useStructure = () => {
    const [structureId, setStructureId] = useAtom(selectedStructureAtom);
    const [structure, setStructure] = useState<StructureType | undefined>(undefined);

    const token = useAtomValue(tokenAtom);

    useEffect(() => {
        if (!structureId)
            return;
        
        if (structure && structureId !== structure.id)
            return;

        fetchStructure(structureId);
    }, [structureId]);

    const fetchStructure = async (structureId: number) => {
        setStructure(undefined);
        const { structure } = await getStructure(token, structureId);
        setStructure(structure);
    }

    return {
        structure: structure,
        setStructure: setStructureId
    }
}

export default useStructure;