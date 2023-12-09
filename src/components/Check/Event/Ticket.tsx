import React, { useState } from 'react'
import { IonIcon, IonImg, useIonModal } from '@ionic/react'
import { ASSETS_URL } from '../../../consts/api'
import { EventType } from '../../../types/event'
import { formatDateTicket, formatHourTicket } from '../../../utils/date'
import { qrCode } from 'ionicons/icons'
import { useAtom } from 'jotai/react'
import { selectedEventAtom } from '../../../atoms/event'
import Details from './Details'

type TicketProps = {
    ticket: EventType
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
    const [showQr, setShowQr] = useState<boolean>(false);
    const [, setSelectedEvent] = useAtom(selectedEventAtom);

    const DetailsModal = ({ onDismiss }: { onDismiss: () => void }) => (
        <Details dismiss={onDismiss} showQr={showQr} />
    )

    const [presentModal, dismissModal] = useIonModal(DetailsModal, {
        onDismiss: () => {
            dismissModal();
        }
    })

    const onClick = (event: EventType) => {
        setSelectedEvent(event);
        presentModal();
    }

    return (
        <div className='w-full my-2 relative overflow-hidden' onClick={() => onClick(ticket)}>
            <div className='flex align-items-center justify-content-center relative border-round-2xl overflow-hidden h-10rem'>
                <IonImg src={`${ASSETS_URL}/events/${ticket.image}`} className='absolute w-full low-brightness' />
                <div className='text-white z-1 text-lg flex flex-row justify-content-between w-full h-full p-3'>
                    <div className='flex flex-column justify-content-between'>
                        <span className='font-bold'>{ticket.name}</span>
                        <span className='text-sm'>{ticket.structureName}</span>
                    </div>
                    <div className='flex flex-column justify-content-between align-items-end'>
                        <IonIcon icon={qrCode} onClick={() => setShowQr(true)} />
                        <div className='flex flex-column gap-2'>
                            <span className='text-sm'>{formatDateTicket(ticket.date)}</span>
                            <span className='text-sm'>{formatHourTicket(ticket.date)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-column align-items-start gap-1 mt-1 text-sm'>
            </div>
        </div>
    )
}

export default Ticket;