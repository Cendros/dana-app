export const formatDateEventNumeric = (date: string) => {
    const options = {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    } as const;

    return new Intl.DateTimeFormat('fr-FR', options).format(new Date(date));
}

export const formatDateEventDetail = (date: string) => {
    const options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    } as const;

    return new Intl.DateTimeFormat('fr-FR', options).format(new Date(date));
}