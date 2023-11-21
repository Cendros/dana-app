import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Solde from '../components/Check/Balance';
import Header from '../components/Header';
import NextEvents from '../components/Home/NextEvents';

import 'swiper/css';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import Structures from '../components/Home/Structures';

const Home: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding px-5'>
                <div className='flex flex-column align-items-center'>
                    <Solde />
                </div>
                <NextEvents />
                <Structures />
            </IonContent>
        </IonPage>
    );
};

export default Home;
