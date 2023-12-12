import { useAtom, useAtomValue } from "jotai/react";
import { useEffect } from "react";
import { tokenAtom } from "../atoms/globalStorage";
import { structuresAtom } from "../atoms/structure";
import { getMyStructures } from "../services/structure";

const useStructures = () => {
    const token = useAtomValue(tokenAtom);
    const [structures, setStructures] = useAtom(structuresAtom);

    useEffect(() => {
        if (!structures)
            fetchStructures();
    }, []);

    const fetchStructures = async () => {
        const res = await getMyStructures(token);
        setStructures(res.structures);
    }

    return structures;
}

export default useStructures;