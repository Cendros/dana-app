const format = (date: string, options: Record<string, string | boolean>) => {
    try {
        return new Intl.DateTimeFormat('fr-FR', options).format(new Date(date));
    }
    catch (error) {
        return '';
    }
}

export const formatDateEventNumeric = (date: string) => {
    const options = {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    } as const;

    return format(date, options);
}

export const formatDateEventDetail = (date: string) => {
    const options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    } as const;

    return format(date, options);
}

export const formatDateTicket = (date: string) => {
    const options = {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
    } as const;

    return format(date, options);
}

export const formatHourTicket = (date: string) => {
    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: false
    } as const;

    return format(date, options);
}