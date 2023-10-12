import { useAtom, useAtomValue } from "jotai/react";
import { checksAtom, soldeAtom } from "../atoms/check";
import { useEffect } from "react";
import { getChecks } from "../services/check";
import { storedChecksAtom, tokenAtom } from "../atoms/globalStorage";
import { CheckType } from "../types/check";

const useChecks = () => {
    const [checks, setChecks] = useAtom(checksAtom);
    const [solde, setSolde] = useAtom(soldeAtom);
    const token = useAtomValue(tokenAtom);
    const [storedChecks, setStoredChecks] = useAtom(storedChecksAtom);

    useEffect(() => {
        if (!checks)
            fetchChecks();
    }, [])

    useEffect(() => {
        if (checks) {
            setSolde(checks.reduce((accu: number, item: CheckType) => accu += item.value * item.quantity, 0));
            return;
        }

        if (storedChecks && !solde)
            setSolde(storedChecks.reduce((accu: number, item: CheckType) => accu += item.value * item.quantity, 0));
    }, [checks, storedChecks]);

    const fetchChecks = async () => {        
        const { checks } = await getChecks(token);

        if (checks) {
            setStoredChecks(checks)
        }

        setChecks(checks);
    }

    return {checks: checks ? checks : storedChecks, isStored: !checks && storedChecks};
}

export default useChecks;