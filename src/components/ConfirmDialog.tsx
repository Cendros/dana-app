import { IonActionSheet } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import React from 'react';

type ConfirmDialogProps = {
    isOpen: boolean
    header: string
    subHeader?: string
    confirmText: string
    onDidDismiss: (res: OverlayEventDetail) => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, header, subHeader, confirmText, onDidDismiss }) => {
    const buttons = [
        {
            text: confirmText,
            data: {
                action: 'ok'
            }
        },
        {
            text: 'Annuler',
            role: 'cancel',
            data: {
                action: 'cancel'
            }
        }
    ];

    return (
        <IonActionSheet
            isOpen={isOpen}
            onDidDismiss={({ detail }) => onDidDismiss(detail)}
            header={header}
            subHeader={subHeader}
            buttons={buttons}
        />
    )
}

export default ConfirmDialog;