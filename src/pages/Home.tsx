import React from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { useAtom, useAtomValue } from 'jotai/react';
import { tokenAtom } from '../atoms/globalStorage';
import { checksAtom, soldeAtom } from '../atoms/check';
import useChecks from '../hooks/useChecks';
import Solde from '../components/Check/Solde';
import Check from '../components/Check/Check';

const Home: React.FC = () => {
    const [, setToken] = useAtom(tokenAtom);
    const checks = useAtomValue(checksAtom);
    const refresh = useChecks();

    const logout = () => {
        setToken(undefined);
        location.href = '/login';
    }

    return (
        <IonPage className='ion-padding'>
            <IonContent fullscreen class='bg-light'>
                <IonButton onClick={logout}>Logout</IonButton>
                <div className='flex flex-column align-items-center'>
                    <Solde />

                    <h2 className='align-self-start font-bold'>Vos chèques Apollo</h2>
                    {checks ? checks.map((check, i) => (
                        <Check key={i} check={check} /> 
                    ))
                    : null }
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
