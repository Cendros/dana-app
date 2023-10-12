import React, { useEffect } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useAtom } from 'jotai/react';
import { code128Atom, storedChecksAtom, tokenAtom } from '../atoms/globalStorage';

type ProfileProps = {
    dismiss: () => void;
}

const Profile: React.FC<ProfileProps> = ({ dismiss }) => {
    const [token, setToken] = useAtom(tokenAtom);
    const [, setCode128] = useAtom(code128Atom);
    const [, setStoredChecks] = useAtom(storedChecksAtom); 

    const logout = () => {
        setToken(undefined);
        setCode128(undefined);
        setStoredChecks(undefined);
        location.href = '/login';
    }

    //? DEV
    useEffect(() => {
        console.log(token);
    }, []);

    return (
        <IonPage>
        <IonHeader translucent className='ion-no-border'>
            <IonToolbar>
                <IonButtons slot='start'>
                    <IonButton fill='clear' onClick={dismiss}>
                        <IonIcon size='large' icon={arrowBack} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className='ion-padding'>
            <IonButton onClick={logout}>Déconnexion</IonButton>
        </IonContent>
        </IonPage>
    );
};

export default Profile;
