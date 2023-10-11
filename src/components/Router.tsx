import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Home from "../pages/Home";
import Barcode from "../pages/Barcode";
import Map from "../pages/Map";
import { barcodeOutline, homeOutline, mapOutline } from 'ionicons/icons';
import { useAtomValue } from "jotai/react";
import { tokenAtom } from "../atoms/globalStorage";
import Login from "../pages/Login";

const Router: React.FC = () => {
    const token = useAtomValue(tokenAtom);

    return (
        <IonReactRouter>
            { token ?
                <IonTabs>
                    <IonRouterOutlet>
                    <Route exact path="/home" render={() => <Home />} />
                    <Route exact path="/barcode" render={() => <Barcode />} />
                    <Route exact path="/map" render={() => <Map />} />
                    <Route exact path="/">
                        <Redirect to={token ? "/home" : "/login"} />
                    </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon aria-hidden="true" icon={homeOutline} />
                            <IonLabel>Accueil</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="barcode" href="/barcode">
                            <IonIcon aria-hidden="true" icon={barcodeOutline} />
                        </IonTabButton>
                        <IonTabButton tab="map" href="/map">
                            <IonIcon aria-hidden="true" icon={mapOutline} />
                            <IonLabel>Carte</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            :
                <IonRouterOutlet>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Redirect to={"/login"} />
                    </Route>
                </IonRouterOutlet>
            }
        </IonReactRouter>
    )
}

export default Router;