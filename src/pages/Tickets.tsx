import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import useTickets from '../hooks/useTickets';
import Ticket from '../components/Check/Event/Ticket';
import { EventType } from '../types/event';

const Tickets: React.FC = () => {
    const tickets = useTickets();

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding px-5'>
                <h1 className='font-bold text-3xl'>Mes Billets</h1>
                { tickets?.length ?
                    tickets.map((ticket: EventType, i: number) => (
                        <Ticket key={i} ticket={ticket} />
                    ))
                :
                    <h2>Vous n&apos;avez aucun billet.</h2>
                }
            </IonContent>
        </IonPage>
    );
};

export default Tickets;
