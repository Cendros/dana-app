import { IonButton, IonInput, IonPage, IonSpinner, IonText } from '@ionic/react';
import { useAtom } from 'jotai/react';
import React, { useState } from 'react';
import { tokenAtom } from '../atoms/globalStorage';
import { authUser } from '../services/auth';

const Login: React.FC = () => {
    const [, setToken] = useAtom(tokenAtom);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [invalid, setInvalid] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const login = async () => {
        setSubmitting(true);
        setError('');
        setInvalid(false);
        const {invalid, token} = await authUser(email, password);
        if (invalid) {
            setError('Identifiants invalides');
            setInvalid(true);
            setSubmitting(false);
            return;
        }

        if (!token) {
            setError('Aucune connexion à internet');
            setSubmitting(false);
            return;
        }
        
        setToken(token);
        setSubmitting(false);
        location.href = '/home';
    }

    return (
        <IonPage className='h-screen text-primary'>
            <img src="assets/background.png" className='background-dana'/>
            <div className='gradient-dana'></div>
            <div className='flex flex-column gap-3 mt-5 z-2'>
                <svg className='w-7 h-10rem align-self-center mt-8 mb-5' width="125" height="46" viewBox="0 0 125 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2816 40.5653H0V7H12.4301C23.2254 7 30.4064 13.6834 30.4064 23.808C30.4064 33.9326 22.7799 40.5653 12.2816 40.5653ZM12.4301 13.7328H7.23002V34.0314H12.2816C18.5212 34.0314 22.9775 30.0908 22.9775 23.8067C22.9775 17.5225 18.7188 13.7315 12.4288 13.7315L12.4301 13.7328Z" fill="#331863"/>
                    <path d="M33.8774 27.5229C33.8774 20.4403 39.6225 14.506 47.1495 14.506C54.6765 14.506 60.4706 20.0917 60.4706 27.5229V39.9417H53.7855V37.0493C52.0526 39.2433 49.3783 40.5906 46.0106 40.5906C38.88 40.5906 33.8774 34.7058 33.8774 27.5229ZM53.4382 27.5723C53.4382 24.0817 50.7638 21.1881 47.1495 21.1881C43.5352 21.1881 40.9099 24.0804 40.9099 27.5723C40.9099 31.0643 43.5352 33.9566 47.1495 33.9566C50.7638 33.9566 53.4382 31.0643 53.4382 27.5723Z" fill="#331863"/>
                    <path d="M72.5854 27.0663V40.6401H64.2642V26.0634C64.2642 17.5653 69.2455 10.6014 79.3832 10.6014C89.5208 10.6014 94.6189 17.5065 94.6189 26.0634V40.6401H86.2976V27.0663C86.2976 22.5808 84.1298 18.7444 79.3832 18.7444C74.6365 18.7444 72.5854 22.5808 72.5854 27.0663Z" fill="#331863"/>
                    <path d="M98.363 27.5737C98.363 20.491 104.108 14.5568 111.635 14.5568C119.162 14.5568 124.956 20.1425 124.956 27.5737V39.9924H118.271V37.1001C116.538 39.294 113.864 40.6414 110.496 40.6414C103.366 40.6414 98.363 34.7565 98.363 27.5737ZM117.924 27.6231C117.924 24.1325 115.249 21.2388 111.635 21.2388C108.021 21.2388 105.396 24.1312 105.396 27.6231C105.396 31.1151 108.021 34.0074 111.635 34.0074C115.249 34.0074 117.924 31.1151 117.924 27.6231Z" fill="#FB4D27"/>
                </svg>

                <h1 className='font-bold text-center text-xl'>Connexion à votre compte</h1>
                <div className='flex flex-column gap-1 px-3'>
                    { error ? <IonText color='danger' className='text-center'>{error}</IonText> : null }
                    { submitting ?
                        <div className='flex justify-content-center align-items-center gap-2'>
                            <span className='text-xl text-primary'>Connexion en cours</span>
                            <IonSpinner color='primary' />
                        </div>
                    : null}

                    <IonInput label='Adresse e-mail' labelPlacement='floating' type='email' placeholder='Adresse e-mail' className={`text-primary${invalid ? 'ion-invalid ion-touched' : ''}`} value={email} onIonInput={(e) => setEmail(e.detail.value || '')}/>
                    <div className='flex flex-column'>
                        <IonInput label='Mot de passe' labelPlacement='floating' type='password' placeholder='Mot de passe' className={`text-primary${invalid ? 'ion-invalid ion-touched' : ''}`} value={password} onIonInput={(e) => setPassword(e.detail.value || '')} />
                        <IonButton fill='clear' className='ml-auto'>
                            <span className='underline text-xs text-initial'>Mot de passe oublié ?</span>
                        </IonButton>
                    </div>
                    <IonButton className='align-self-center w-10 mt-5' disabled={submitting} onClick={login}>Connexion</IonButton>
                </div>
            </div>
        </IonPage>
    );
};

export default Login;