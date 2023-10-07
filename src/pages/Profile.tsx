import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useAtom } from 'jotai/react';
import { tokenAtom } from '../atoms/globalStorage';

type ProfileProps = {
    dismiss: () => void;
}

const Profile: React.FC<ProfileProps> = ({ dismiss }) => {
    const [, setToken] = useAtom(tokenAtom);

    const logout = () => {
        setToken(undefined);
        location.href = '/login';
    }

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
