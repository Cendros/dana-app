import { useAtom, useAtomValue } from "jotai/react";
import { profileAtom } from "../atoms/user";
import { useEffect } from "react";
import { getProfile } from "../services/user";
import { tokenAtom } from "../atoms/globalStorage";

const useProfile = () => {
    const [profile, setProfile] = useAtom(profileAtom);
    const token = useAtomValue(tokenAtom);

    useEffect(() => {
        if (profile)
            return;
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const { profile } = await getProfile(token);
        setProfile(profile);
    }

    return {
        profile,
        setProfile
    }
}

export default useProfile;