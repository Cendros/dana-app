import React from "react";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { Redirect, Route } from "react-router"
import { IonReactRouter } from '@ionic/react-router';
import Home from "../pages/Home";
import Map from "../pages/Map";
import { homeOutline, mapOutline, personOutline, ticketOutline } from 'ionicons/icons';
import { useAtomValue } from "jotai/react";
import { tokenAtom } from "../atoms/globalStorage";
import Login from "../pages/Login";
import Tickets from "../pages/Tickets";
import Profile from "../pages/Profile";

const Router: React.FC = () => {
    const token = useAtomValue(tokenAtom);

    return (
        <IonReactRouter basename="/dana-app">
            { token ?
                <IonTabs>
                    <IonRouterOutlet>
                    <Route exact path="/home" render={() => <Home />} />
                    <Route exact path="/map" render={() => <Map />} />
                    <Route exact path="/tickets" render={() => <Tickets />} />
                    <Route exact path="/profile" render={() => <Profile />} />
                    <Route exact path="/">
                        <Redirect to={token ? "/home" : "/login"} />
                    </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home">
                            <IonIcon aria-hidden="true" icon={homeOutline} />
                            <IonLabel>Accueil</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="map" href="/map">
                            <IonIcon aria-hidden="true" icon={mapOutline} />
                            <IonLabel>Carte</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tickets" href="/tickets">
                            <IonIcon aria-hidden="true" icon={ticketOutline} />
                            <IonLabel>Billets</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="profile" href="/profile">
                            <IonIcon aria-hidden="true" icon={personOutline} />
                            <IonLabel>Compte</IonLabel>
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