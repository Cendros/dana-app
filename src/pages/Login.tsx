import { IonButton, IonContent, IonInput, IonPage, IonSpinner, IonText } from '@ionic/react';
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
        <IonPage>
            <IonContent className="ion-padding">
                <h1>dana</h1>

                <h2 className='font-bold p-4 text-center text-5xl'>Connexion à votre compte</h2>
                <div className='flex flex-column gap-5 px-3'>
                    { error ? <IonText color='danger' className='text-center'>{error}</IonText> : null }
                    { submitting ?
                        <div className='flex justify-content-center align-items-center gap-2'>
                            <span className='text-xl'>Connexion en cours</span>
                            <IonSpinner />
                        </div>
                    : null}

                    <IonInput label='Adresse e-mail' labelPlacement='floating' type='email' fill='outline' placeholder='Adresse e-mail' className={invalid ? 'ion-invalid ion-touched' : ''} value={email} onIonInput={(e) => setEmail(e.detail.value || '')}/>
                    <div className='flex flex-column'>
                        <IonInput label='Mot de passe' labelPlacement='floating' type='password' fill='outline' placeholder='Mot de passe' className={invalid ? 'ion-invalid ion-touched' : ''} value={password} onIonInput={(e) => setPassword(e.detail.value || '')} />
                        <IonButton fill='clear' className='ml-auto'>
                            <span className='underline text-xs text-initial'>Mot de passe oublié ?</span>
                        </IonButton>
                    </div>
                    <IonButton className='align-self-center w-10' disabled={submitting} onClick={login}>Connexion</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;