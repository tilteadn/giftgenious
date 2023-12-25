import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@ionic/react/css/core.css';
import { IonReactRouter } from '@ionic/react-router';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root.
root.render(
  <React.StrictMode>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </React.StrictMode>
);

reportWebVitals();
