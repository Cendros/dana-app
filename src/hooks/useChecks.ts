import { useAtom, useAtomValue } from "jotai/react";
import { checksAtom, soldeAtom } from "../atoms/check";
import { useEffect, useState } from "react";
import { getChecks } from "../services/check";
import { storedChecksAtom, tokenAtom } from "../atoms/globalStorage";
import { CheckType } from "../types/check";

type ChecksHook = {
    checks: Array<CheckType> | undefined
    isStored: boolean
}

const useChecks = (): ChecksHook => {
    const [checks, setChecks] = useAtom(checksAtom);
    const [solde, setSolde] = useAtom(soldeAtom);
    const token = useAtomValue(tokenAtom);
    const [storedChecks, setStoredChecks] = useAtom(storedChecksAtom);
    const [isConnection, setIsConnection] = useState<boolean>(true);

    useEffect(() => {
        if (!checks)
            fetchChecks();
    }, [])

    useEffect(() => {
        if (checks)
            setSolde(checks.reduce((accu: number, item: CheckType) => accu += item.value * item.quantity, 0));
    }, [checks]);

    useEffect(() => {
        if (!isConnection && storedChecks) {
            setChecks(storedChecks)
            setSolde(storedChecks.reduce((accu: number, item: CheckType) => accu += item.value * item.quantity, 0));
        }
    }, [isConnection, storedChecks]);

    const fetchChecks = async () => {
        const { checks } = await getChecks(token);
        
        if (checks) {
            setStoredChecks(checks);
            setIsConnection(true);
            setChecks(checks);
        } else setIsConnection(false);
    }

    return {checks: checks, isStored: !isConnection};
}

export default useChecks;