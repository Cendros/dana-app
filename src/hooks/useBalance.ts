import { useAtom, useAtomValue } from "jotai/react";
import { balanceAtom } from "../atoms/check";
import { useEffect } from "react";
import { getBalance } from "../services/user";
import { tokenAtom } from "../atoms/globalStorage";

const useBalance = () => {
    const token = useAtomValue(tokenAtom);
    const [balance, setBalance] = useAtom(balanceAtom);

    useEffect(() => {
        fetchBalance();
    }, []);

    const fetchBalance = async () => {
        const res = await getBalance(token);
        setBalance(res.balance);
    }

    return balance;
}

export default useBalance;