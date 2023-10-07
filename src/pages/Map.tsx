import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const Map: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding'>
            </IonContent>
        </IonPage>
    );
};

export default Map;
