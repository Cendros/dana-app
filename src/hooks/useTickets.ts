import { useAtom, useAtomValue } from "jotai/react";
import { useEffect } from "react";
import { ticketsAtom, tokenAtom } from "../atoms/globalStorage";
import { getMyTickets } from "../services/event";

const useTickets = () => {
    const token = useAtomValue(tokenAtom);
    const [tickets, setTickets] = useAtom(ticketsAtom);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        const res = await getMyTickets(token);
        
        setTickets(res);
    }

    return tickets;
}

export default useTickets;