import React from 'react';
import { modalProps } from '../../../types/components';
import { IonButton, IonContent, IonIcon, IonImg, IonPage } from '@ionic/react';
import { arrowBack} from 'ionicons/icons';
import Header from '../../Header';
import Loading from '../../Loading';
import useStructure from '../../../hooks/useStructure';
import 'leaflet/dist/leaflet.css';
import Map from '../../Map';

const Details: React.FC<modalProps> = ({ dismiss }) => {
    const { structure } = useStructure();

    const left = (
        <IonButton fill='clear' onClick={dismiss}>
            <IonIcon size='large' icon={arrowBack} />
        </IonButton>
    );

    return (
        <IonPage>
            <Header left={left} />
            <IonContent fullscreen className='bg-light ion-padding'>
                { structure ?
                    <>
                        <h1 className='font-bold text-3xl'>{structure.name}</h1>
                        <div className='border-round-2xl overflow-hidden h-15rem'>
                            <IonImg src={structure.image} className='w-full' />
                        </div>
                        <div className='flex flex-column gap-2 my-3'>
                            <span>{structure.address}</span>
                            <span>{structure.city}, {structure.postalCode}</span>
                        </div>

                        { structure.longitude && structure.latitude ?
                            <Map
                                center={[structure.longitude, structure.latitude]}
                                zoom={14}
                                markers={[{
                                    coords: [structure.longitude, structure.latitude],
                                    popupText: structure.name
                                }]}
                                className='w-full aspect-1'
                            />
                        : null }
                    </>
                :
                    <div className='flex justify-content-center h-full'>
                        <Loading text="Chargement" />
                    </div>
                }
            </IonContent>
        </IonPage>
    )
}

export default Details;