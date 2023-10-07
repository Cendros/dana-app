import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Home from "../pages/Home";
import QrCode from "../pages/QrCode";
import Map from "../pages/Map";
import { homeOutline, mapOutline, qrCodeOutline } from 'ionicons/icons';
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
                    <Route exact path="/qrcode" render={() => <QrCode />} />
                    <Route exact path="/map" render={() => <Map />} />
                    <Route exact path="/login" render={() => <Login />} />
                    <Route exact path="/">
                        <Redirect to={token ? "/home" : "/login"} />
                    </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon aria-hidden="true" icon={homeOutline} />
                            <IonLabel>Accueil</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="qrcode" href="/qrcode">
                            <IonIcon aria-hidden="true" icon={qrCodeOutline} />
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