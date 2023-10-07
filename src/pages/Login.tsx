import { IonButton, IonContent, IonPage } from '@ionic/react';
import { useAtom } from 'jotai/react';
import React from 'react';
import { tokenAtom } from '../atoms/globalStorage';

const Login: React.FC = () => {
    const [, setToken] = useAtom(tokenAtom);

    const login = () => {
        setToken("a");
        location.href = '/home';
    }

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonButton onClick={login}>Login</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;