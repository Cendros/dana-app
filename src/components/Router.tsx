import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import { ellipse, homeOutline, mapOutline, qrCodeOutline, square, triangle } from 'ionicons/icons';


const Router = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                <Route exact path="/tab1">
                    <Tab1 />
                </Route>
                <Route exact path="/tab2">
                    <Tab2 />
                </Route>
                <Route path="/tab3">
                    <Tab3 />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tab1" />
                </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon aria-hidden="true" icon={homeOutline} />
                    <IonLabel>Accueil</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon aria-hidden="true" icon={qrCodeOutline} />
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon aria-hidden="true" icon={mapOutline} />
                    <IonLabel>Carte</IonLabel>
                </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Router;