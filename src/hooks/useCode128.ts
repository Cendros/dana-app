import { useEffect, useState } from "react";
import { getCode128 } from "../services/user";
import { useAtomValue } from "jotai/react";
import { tokenAtom } from "../atoms/globalStorage";

const useCode128 = () => {
    const [code128, setCode128] = useState<string | undefined>(undefined);

    const token = useAtomValue(tokenAtom);

    useEffect(() => {
        fetchCode();
    }, [])

    const fetchCode = async () => {        
        const { code } = await getCode128(token);
        
        setCode128(code);
    }

    return code128;
}

export default useCode128;