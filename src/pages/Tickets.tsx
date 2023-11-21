import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const Tickets: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding px-5'>
                <h2>Tickets</h2>
            </IonContent>
        </IonPage>
    );
};

export default Tickets;
