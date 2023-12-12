import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import MapView, { Marker } from '../components/Map';
import 'leaflet/dist/leaflet.css';
import Loading from '../components/Loading';
import useStructures from '../hooks/useStructures';

const Map: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [markers, setMarkers] =  useState<Array<Marker> | undefined>(undefined);

    const structures = useStructures();

    useEffect(() => {
        if (structures == undefined)
            return;        

        const _markers = structures.map(structure => {
            return {
                coords: [Number(structure.longitude), Number(structure.latitude)],
            } as Marker
        })

        setMarkers(_markers);
        setShow(true);
    }, [structures]);
    
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light'>
                { show ?
                    <MapView center={[49.23077763216166, -0.3315435963674239]} zoom={11} className='w-full h-full' markers={markers} />
                : <Loading text='Chargement de la carte' /> }
            </IonContent>
        </IonPage>
    );
};

export default Map;
