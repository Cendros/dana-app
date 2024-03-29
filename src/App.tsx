import React from 'react';
import { IonApp, setupIonicReact } from '@ionic/react';
import Router from './components/Router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css';
import './theme/form.css';
import './theme/popup.css';
import './theme/ui.css';
import './theme/shadowParts.css';

import 'primeflex/primeflex.min.css'

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <Router />
    </IonApp>
);

export default App;
