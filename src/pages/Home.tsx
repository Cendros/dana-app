import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useAtomValue } from 'jotai/react';
import { checksAtom } from '../atoms/check';
import useChecks from '../hooks/useChecks';
import Solde from '../components/Check/Solde';
import Check from '../components/Check/Check';
import Header from '../components/Header';

const Home: React.FC = () => {
    const checks = useAtomValue(checksAtom);
    useChecks();

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding'>
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
