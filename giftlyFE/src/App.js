import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route,Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Redirect empty path to "/login" */}
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={LoginPage} />
        {/* Other routes here */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
