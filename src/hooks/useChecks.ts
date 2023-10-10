import { useAtom, useAtomValue } from "jotai/react";
import { checksAtom, soldeAtom } from "../atoms/check";
import { useEffect } from "react";
import { getChecks } from "../services/check";
import { tokenAtom } from "../atoms/globalStorage";

const useChecks = () => {
    const [checks, setChecks] = useAtom(checksAtom);
    const [, setSolde] = useAtom(soldeAtom);
    const token = useAtomValue(tokenAtom);

    useEffect(() => {
        if (!checks) {
            fetchChecks();
            return;
        }
        const total = checks.reduce((accu, item) => accu += item.value * item.quantity, 0);
        setSolde(total);
    }, [checks])

    const fetchChecks = async () => {        
        const { checks } = await getChecks(token);
        
        setChecks(checks);
    }

    return fetchChecks;
}

export default useChecks;