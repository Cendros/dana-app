import React from 'react';
import useEvents from '../../hooks/useEvents';
import { Swiper, SwiperSlide } from 'swiper/react';
import Event from '../Check/Event/Event';
import Loading from '../Loading';
import Details from '../Check/Event/Details';
import { useIonModal } from '@ionic/react';
import { useAtom } from 'jotai/react';
import { selectedEventAtom } from '../../atoms/event';
import { EventType } from '../../types/event';

const NextEvents: React.FC = () => {
    const events = useEvents();

    const [, setSelectedEvent] = useAtom(selectedEventAtom);

    const DetailsModal = ({ onDismiss }: { onDismiss: () => void }) => (
        <Details dismiss={onDismiss} />
    )

    const [presentModal, dismissModal] = useIonModal(DetailsModal, {
        onDismiss: () => dismissModal()
    })

    const onClick = (event: EventType) => {
        setSelectedEvent(event);
        presentModal();
    }
    
    return (
        <>
            { events ?
                <>
                    <h2 className='align-self-start font-bold'>À venir</h2>
                    { events.length ?
                        <Swiper
                            pagination
                            slidesPerView={2.3}
                            spaceBetween={10}
                        >
                            { events.map((event, i) => (
                                <SwiperSlide key={i} onClick={() => onClick(event)}>
                                    <Event event={event} />
                                </SwiperSlide>
                            )) }
                        </Swiper>
                    :
                        <>
                            <h2>Votre société ne propose aucune offre pour le moment.</h2>
                        </>
                    }
                </>
            : <Loading text='Chargement des offres' /> }
        </>
    )
}

export default NextEvents;