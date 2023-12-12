import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonImg, IonModal, IonPage, useIonModal } from '@ionic/react';
import Header from '../components/Header';
import MapView, { Marker } from '../components/Map';
import 'leaflet/dist/leaflet.css';
import Loading from '../components/Loading';
import useStructures from '../hooks/useStructures';
import { StructureType } from '../types/structure';
import useStructure from '../hooks/useStructure';
import Details from '../components/Check/Structure/Details';

const Map: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [selectedStructure, setSelectedStructure] = useState<StructureType | undefined>(undefined);
    const [markers, setMarkers] =  useState<Array<Marker> | undefined>(undefined);

    const structures = useStructures();

    const { setStructure } = useStructure();

    const DetailsStructureModal = ({ onDismiss }: { onDismiss: () => void }) => (
        <Details dismiss={onDismiss} />
    )

    const [presentModal, dismissModal] = useIonModal(DetailsStructureModal, {
        onDismiss: () => dismissModal()
    })

    const structureInfos = (structureId: number) => {
        setStructure(structureId);
        presentModal();
    }

    useEffect(() => {
        if (structures == undefined)
            return;        

        const _markers = structures.map(structure => {
            return {
                coords: [Number(structure.longitude), Number(structure.latitude)],
                onClick: () => setSelectedStructure(structure)
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
                    <MapView center={[49.23077763216166, -0.3315435963674239]} zoom={11} className='w-full h-full' markers={markers} onClick={() => setSelectedStructure(undefined)} />
                : <Loading text='Chargement de la carte' /> }
            </IonContent>
            <IonModal isOpen={!!selectedStructure} onDidDismiss={() => setSelectedStructure(undefined)} backdropDismiss={false} initialBreakpoint={.33} backdropBreakpoint={.33} breakpoints={[0, .25]}>
                { selectedStructure ?
                    <div className='p-3'>
                        <h3>{selectedStructure.name}</h3>
                        <div className='flex flex-row gap-2'>
                            <div className='aspect-16-9 flex-1 border-round-lg overflow-hidden'>
                                <IonImg src={selectedStructure.image} className='w-full h-full img-cover' />
                            </div>
                            <div className='flex flex-column gap-1 flex-1'>
                                <span>{selectedStructure.address}</span>
                                <span>{selectedStructure.city}</span>
                                <span>{selectedStructure.postalCode}</span>
                            </div>
                        </div>
                        <IonButton className='flex mt-3 text-initial' fill='outline' onClick={() => {structureInfos(selectedStructure.id)}}>Voir plus</IonButton>
                    </div>
                : null }
            </IonModal>
        </IonPage>
    );
};

export default Map;
