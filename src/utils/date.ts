export const formatDateEventNumeric = (date: string) => {
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    } as const;

    return new Intl.DateTimeFormat('fr-FR', options).format(new Date(date));
}