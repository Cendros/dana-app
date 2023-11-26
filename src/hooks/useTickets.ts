import { useAtom, useAtomValue } from "jotai/react";
import { useEffect } from "react";
import { ticketsAtom, tokenAtom } from "../atoms/globalStorage";
import { getMyTickets } from "../services/event";

const useTickets = () => {
    const token = useAtomValue(tokenAtom);
    const [tickets, setTickets] = useAtom(ticketsAtom);

    useEffect(() => {
        console.log('fetch');
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        const res = await getMyTickets(token);
        console.log(res);
        
        setTickets(res);
    }

    return tickets;
}

export default useTickets;