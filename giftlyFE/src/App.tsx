import React from "react";
import { IonApp } from "@ionic/react";

import { Routes } from "./config/Routes";

export const App: React.FC = () => {
  return (
    <IonApp>
      <Routes />
    </IonApp>
  );
};
