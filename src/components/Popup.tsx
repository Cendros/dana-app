import { IonIcon } from '@ionic/react';
import { qrCode } from 'ionicons/icons';
import React, { useRef } from 'react';

type PopupType = {
    content: React.ReactNode
}

const Popup: React.FC<PopupType> = ({ content }) => {
    const container = useRef<HTMLDivElement>(null);

    const onClick = () => {
        if (!container.current)
            return;
        container.current.removeAttribute('class');
        container.current.className += ' modal-container animation';
    }

    const out = () => {
        if (!container.current)
            return;
        container.current.className += ' out';
    }

    return (
        <>
            <div className="modal-container" ref={container} onClick={out}>
                <div className="modal-background">
                    <div className="modal">
                        { content }
                    </div>
                </div>
            </div>

            <IonIcon icon={qrCode} className='absolute top-0 right-0 p-2 w-2rem h-2rem bg-primary border-round-md' onClick={onClick}/>
        </>
    )
}

export default Popup;