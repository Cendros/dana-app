import React from 'react'
import { IonImg } from '@ionic/react'
import { EventType } from '../../../types/event'
import { ASSETS_URL } from '../../../consts/api'
import { formatDateEventNumeric } from '../../../utils/date'

type EventProps = {
    event: EventType
}

const Event: React.FC<EventProps> = ({ event }) => {
    return (
        <div className='w-full my-2 relative overflow-hidden'>
            <div className='flex align-items-center justify-content-center relative border-round-2xl overflow-hidden aspect-1'>
                <IonImg src={`${ASSETS_URL}/events/${event.image}`} className={`absolute w-full low-brightness ${event.quantity === 0 ? 'filter-gray' : null}`} />
                <div className='text-white z-1 text-lg flex flex-column text-center'>
                    <span>{event.quantity}</span>
                    <span>places</span>
                </div>
            </div>
            <div className='flex flex-column align-items-start gap-1 mt-1 text-sm'>
                <span className='font-bold'>{event.name}</span>
                <span>{formatDateEventNumeric(event.date)}</span>
            </div>
        </div>
    )
}

export default Event;