import React, { useEffect, useState } from 'react';
import { modalProps } from '../../../types/components';
import { IonButton, IonContent, IonIcon, IonImg, IonPage, useIonAlert, useIonModal } from '@ionic/react';
import { arrowBack, qrCode } from 'ionicons/icons';
import Header from '../../Header';
import { useAtom, useAtomValue } from 'jotai/react';
import { selectedEventAtom } from '../../../atoms/event';
import Loading from '../../Loading';
import { ASSETS_URL } from '../../../consts/api';
import { formatDateEventDetail, formatDateOnly } from '../../../utils/date';
import ConfirmDialog from '../../ConfirmDialog';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { bookEvent } from '../../../services/event';
import { ticketsAtom, tokenAtom } from '../../../atoms/globalStorage';
import { balanceAtom } from '../../../atoms/user';
import QrCode from '../../QrCode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import useStructure from '../../../hooks/useStructure';
import DetailsStructure from '../Structure/Details';

type DetailsProps = {
    showQr?: boolean
}

const Details: React.FC<modalProps & DetailsProps> = ({ dismiss, showQr }) => {
    const [open, setOpen] = useState<boolean>(false);

    const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);

    const token = useAtomValue(tokenAtom);
    const event = useAtomValue(selectedEventAtom);

    const [balance, setBalance] = useAtom(balanceAtom);

    const [tickets, setTickets] = useAtom(ticketsAtom);

    const [presentAlert] = useIonAlert();

    const { setStructure } = useStructure();

    const DetailsStructureModal = ({ onDismiss }: { onDismiss: () => void }) => (
        <DetailsStructure dismiss={onDismiss} />
    )

    const [presentModal, dismissModal] = useIonModal(DetailsStructureModal, {
        onDismiss: () => dismissModal()
    })

    const structureInfos = (structureId: number) => {
        setStructure(structureId);
        presentModal();
    }

    useEffect(() => {
        if (showQr && swiper && !swiper.destroyed)
            swiper.slideNext();
    }, [swiper]);

    const left = (
        <IonButton fill='clear' onClick={dismiss}>
            <IonIcon size='large' icon={arrowBack} />
        </IonButton>
    );

    const book = async (res: OverlayEventDetail) => {
        setOpen(false);
        
        if (res.data.action !== 'ok' || !event)
            return;

        const { ticket, error } = await bookEvent(token, event.id);

        if (error) {
            presentAlert({
                header: 'Erreur',
                message: error === true ? 'Il y a eu une erreur lors de la réservation.' : error,
                buttons: ['Fermer']
            });
            return;
        }

        presentAlert({
            header: 'Confirmation',
            message: 'Votre place a bien été réservée.',
            buttons: ['Fermer']
        });

        setBalance((balance ?? 0) - event.value);
        setTickets([...tickets, ticket]);

        dismiss();
    }

    const slideToQr = () => {
        console.log(swiper);
        
        if (swiper)
            swiper.slideNext();
    }

    return (
        <IonPage>
            <Header left={left} />
            <IonContent fullscreen className='bg-light ion-padding'>
                { event ?
                    <>
                        <h1 className='font-bold text-3xl'>{event.name}</h1>
                        <div className='flex align-items-center justify-content-center relative border-round-2xl overflow-hidden aspect-1'>
                            { event.ticketId ?
                                <Swiper
                                    loop
                                    pagination
                                    className='h-full'
                                    onInit={(ev: SwiperType) => {
                                        setSwiper(ev);
                                    }}
                                >
                                    <SwiperSlide>
                                        <IonImg src={`${ASSETS_URL}/events/${event.image}`} className='absolute' />
                                        <IonIcon icon={qrCode} className='absolute top-0 right-0 p-3 bg-primary border-round-xl' onClick={slideToQr}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <QrCode ticketId={event.ticketId} />
                                    </SwiperSlide>
                                </Swiper>
                            : 
                                <>
                                    <IonImg src={`${ASSETS_URL}/events/${event.image}`} className={`absolute w-full h-full  img-cover ${!event.ticketId ? 'black-gradient-bottom' : null} ${event.quantity === 0 ? 'filter-gray' : null}`} />
                                    <div className='text-white z-1 text-lg flex flex-column align-self-end gap-3 mb-3 text-center'>
                                        <span className='font-bold text-xl'>Places restantes</span>
                                        <span className='font-bold text-5xl'>{event.quantity}</span>
                                    </div>
                                </>
                            }
                        </div>
                        <div className='flex flex-row justify-content-between align-items-center mt-3'>
                            { !event.ticketId ? <span className='font-bold text-xl'>{event.value} €</span> : null }
                            { event.date ?
                                <>
                                    { event.dateExpiration ?
                                        <div className='flex flex-column gap-2'>
                                            <span className='font-bold text-xl'>Du {formatDateOnly(event.date)}</span>
                                            <span className='font-bold text-xl'>au {formatDateOnly(event.dateExpiration)}</span>
                                        </div>
                                    :
                                        <span className='font-bold text-xl'>{formatDateEventDetail(event.date)}</span>
                                    }
                                </>
                            : null }
                        </div>
                        { !event.ticketId ?
                            <>
                                <IonButton className='flex mt-3 text-initial' onClick={() => setOpen(true)}>Réserver ma place</IonButton>
                            </>
                        : null}
                        <IonButton className='flex mt-3 text-initial' fill='outline' onClick={() => {structureInfos(event.structureId)}}>Voir la structure</IonButton>
                        <p>{event.description}</p>
                    </>
                :
                    <div className='flex justify-content-center h-full'>
                        <Loading text="Chargement de l'évènement" />
                    </div>
                }
            </IonContent>
            <ConfirmDialog
                isOpen={open}
                header='Voulez-vous réserver votre place pour cet évènement ?'
                subHeader='Votre solde sera débité et vous ne pourrez pas annuler cette action.'
                confirmText='Réserver'
                onDidDismiss={book}
            />
        </IonPage>
    )
}

export default Details;