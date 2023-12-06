import React from 'react';
import { modalProps } from '../../../types/components';
import { IonButton, IonContent, IonIcon, IonImg, IonPage } from '@ionic/react';
import { arrowBack} from 'ionicons/icons';
import Header from '../../Header';
import Loading from '../../Loading';
import useStructure from '../../../hooks/useStructure';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { mapMarker } from '../../../consts/map';

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
                            <MapContainer center={[structure.longitude, structure.latitude]} zoom={14} scrollWheelZoom={false} className='aspect-1'>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[structure.longitude, structure.latitude]} icon={mapMarker}>
                                    <Popup>
                                        {structure.name}
                                    </Popup>
                                </Marker>
                            </MapContainer>
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