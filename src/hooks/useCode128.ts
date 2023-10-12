import { useEffect, useState } from "react";
import { getCode128 } from "../services/user";
import { useAtom, useAtomValue } from "jotai/react";
import { code128Atom, tokenAtom } from "../atoms/globalStorage";

const useCode128 = () => {
    const [code128, setCode128] = useState<string | undefined>(undefined);
    const [storedCode128, setStoredCode128] = useAtom(code128Atom);

    const token = useAtomValue(tokenAtom);

    useEffect(() => {
        fetchCode();
    }, [])

    const fetchCode = async () => {        
        const { code } = await getCode128(token);

        if (code)
            setStoredCode128(code)
        
        setCode128(code);
    }

    return { code128: code128 ? code128 : storedCode128, isStored: !code128 };
}

export default useCode128;