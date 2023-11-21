import { useAtom, useAtomValue } from "jotai/react";
import { useEffect } from "react";
import { tokenAtom } from "../atoms/globalStorage";
import { eventsAtom } from "../atoms/event";
import { getNextEvents } from "../services/event";

const useEvents = () => {
    const token = useAtomValue(tokenAtom);
    const [events, setEvents] = useAtom(eventsAtom);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const res = await getNextEvents(token);
        
        setEvents(res.events);
    }

    return events;
}

export default useEvents;