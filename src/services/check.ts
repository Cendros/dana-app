import { apiUrl } from "../consts/api";

export const getChecks = async (id: number) => {
    const res = await fetch(`${apiUrl}/check/${id}`);
    const {checks} = await res.json();
    return checks;
}