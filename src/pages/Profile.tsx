import React, { useEffect } from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { useAtom } from 'jotai/react';
import { tokenAtom } from '../atoms/globalStorage';
import Header from '../components/Header';

const Profile: React.FC = () => {
    const [token, setToken] = useAtom(tokenAtom);

    const logout = () => {
        setToken(undefined);
        location.href = '/login';
    }

    //? DEV
    useEffect(() => {
        console.log(token);
    }, []);

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding px-5'>
                <IonButton onClick={logout}>Déconnexion</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
