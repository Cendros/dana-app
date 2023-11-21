import React from 'react';
import useEvents from '../../hooks/useEvents';
import { Swiper, SwiperSlide } from 'swiper/react';
import Event from '../Check/Event/Event';
import Loading from '../Loading';

const NextEvents: React.FC = () => {
    const events = useEvents();
    
    return (
        <>
            { events ?
                <>
                    <h2 className='align-self-start font-bold'>À venir</h2>
                    { events.length ?
                        <Swiper
                            pagination
                            slidesPerView={2.3}
                            loop
                            spaceBetween={10}
                        >
                            { events.map((event, i) => (
                                <SwiperSlide key={i}>
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