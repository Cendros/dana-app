import { useAtom } from "jotai/react";
import { checksAtom, soldeAtom } from "../atoms/check";
import { useEffect } from "react";
import { getChecks } from "../services/check";

const useChecks = () => {
    const [checks, setChecks] = useAtom(checksAtom);
    const [, setSolde] = useAtom(soldeAtom);

    useEffect(() => {
        if (!checks) {
            fetchChecks();
            return;
        }
        const total = checks.reduce((accu, item) => accu += item.value * item.quantity, 0);
        setSolde(total);
    }, [checks])

    const fetchChecks = async () => {        
        const checks = await getChecks(2); //todo userID
        setChecks(checks);
    }

    return fetchChecks;
}

export default useChecks;