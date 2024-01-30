import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonInput, IonPage, IonSpinner, IonText, useIonAlert } from '@ionic/react';
import { useAtom } from 'jotai/react';
import { tokenAtom } from '../atoms/globalStorage';
import Header from '../components/Header';
import useProfile from '../hooks/useProfile';
import Loading from '../components/Loading';
import { updateProfile } from '../services/user';

const Profile: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const [token, setToken] = useAtom(tokenAtom);

    const { profile, setProfile } = useProfile();

    const [presentAlert] = useIonAlert();

    useEffect(() => {
        if (!profile)
            return;
        setFirstname(profile.firstname ?? '');
        setLastname(profile.lastname ?? '');
        setEmail(profile.email ?? '');
    }, [profile]);

    const logout = () => {
        setToken(undefined);
        location.href = '/login';
    }

    const editProfile = async () => {
        if (!profile)
            return;
        
        setLoading(true);
        setError('');

        const { edited, error } = await updateProfile(token, firstname, lastname, oldPassword, password);
        setLoading(false);

        if (error) {
            setError(error);
            return;
        }

        if (!edited) {
            setError("Il y a eu une erreur lors de la modification des informations.");
            return;
        }

        setProfile({
            ...profile,
            firstname,
            lastname
        });

        setOldPassword('');
        setPassword('');

        presentAlert({
            header: 'Confirmation',
            message: 'Vos informations ont été modifiées.',
            buttons: ['Fermer']
        });
    }

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding'>
                <h3>Mes informations personnelles</h3>
                { profile ?
                    <>
                        <IonInput label='Adresse e-mail' labelPlacement='floating' type='email' placeholder='Adresse e-mail' className='text-primary' value={email} disabled />
                        <IonInput label='Prénom' labelPlacement='floating' type='text' placeholder='Prénom' className='text-primary' value={firstname} onIonInput={(e) => setFirstname(e.detail.value || '')}/>
                        <IonInput label='Nom' labelPlacement='floating' type='text' placeholder='Nom' className='text-primary' value={lastname} onIonInput={(e) => setLastname(e.detail.value || '')}/>

                        <h3 className='mt-5'>Modifier mon mot de passe</h3>
                        <IonInput label='Mot de passe actuel' labelPlacement='floating' type='password' className='text-primary' value={oldPassword} onIonInput={(e) => setOldPassword(e.detail.value || '')}/>
                        <IonInput label='Nouveau mot de passe' labelPlacement='floating' type='password' className='text-primary' value={password} onIonInput={(e) => setPassword(e.detail.value || '')}/>
                        
                        <div className='flex flex-column align-items-center mt-3'>
                            { error ? <IonText color='danger' className='text-center mb-2'>{error}</IonText> : null}
                            <IonButton onClick={editProfile} shape='round' className='w-9' disabled={loading}>
                                Modifier les informations
                                { loading ? <IonSpinner slot='end' name='bubbles' /> : null }
                            </IonButton>
                        </div>
                    </>
                : <Loading text='Chargement des informations' />}
                <div className='flex flex-column align-items-center'>
                    <IonButton onClick={logout} shape='round' fill='outline' className='w-9' disabled={loading}>Déconnexion</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
