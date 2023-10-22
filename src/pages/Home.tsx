import React from 'react';
import { IonContent, IonIcon, IonPage, IonText } from '@ionic/react';
import Solde from '../components/Check/Balance';
import Check from '../components/Check/Check';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { warning } from 'ionicons/icons';

const Home: React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding'>
                <div className='flex flex-column align-items-center h-full'>
                    {/* { checks && isStored ?
                        <div className='border-2 border-warning border-round-xl flex align-items-center gap-2 p-3 mb-3'>
                            <IonIcon icon={warning} color='warning' size='large' className='w-4' />
                            <IonText color='warning'>Aucune connexion, connectez vous à internet pour récupérer vos chèques.</IonText>
                        </div>
                    : null } */}
                    <Solde />

                    {/* { checks ?
                        <>
                            <h2 className='align-self-start font-bold'>Vos chèques dana</h2>
                            { checks.length ?
                                checks.map((check, i) => (
                                    <Check key={i} check={check} noConnection={isStored} /> 
                                ))
                            :
                                <>
                                    <h2>Vous n&apos;avez aucun chèque disponible.</h2>
                                </>
                            }
                        </>
                    :
                        <Loading text='Chargement de vos chèques' />
                    } */}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
