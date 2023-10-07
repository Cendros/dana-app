import React from 'react';
import { personOutline } from 'ionicons/icons';
import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar, useIonModal } from '@ionic/react'
import Profile from '../pages/Profile';

const Header: React.FC = () => {

    const ProfileModal = ({onDismiss}: {onDismiss: () => void}) => {
        return (
            <Profile dismiss={onDismiss} />
        )
    }

    const [presentProfile, dismissProfile] = useIonModal(ProfileModal, {
        onDismiss: () => dismissProfile()
    });

    return (
        <IonHeader translucent className='ion-no-border ion-padding'>
            <IonToolbar>
                <IonTitle>Apollo</IonTitle>
                <IonButtons slot='end'>
                    <IonButton onClick={() => presentProfile()}>
                        <IonIcon icon={personOutline} size='large'/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;