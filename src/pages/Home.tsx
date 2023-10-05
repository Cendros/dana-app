import React from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { useAtom } from 'jotai/react';
import { tokenAtom } from '../atoms/globalStorage';

const Home: React.FC = () => {
  const [, setToken] = useAtom(tokenAtom);

    const logout = () => {
        setToken(undefined);
        location.href = '/login';
    }

  return (
    <IonPage className='ion-padding'>
      <IonContent fullscreen class='bg-light'>
      <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
