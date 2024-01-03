import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonText, IonSelectOption, IonSelect } from "@ionic/react";
import React from "react";

interface ILoginDetails {
  email: string;
  password: string;
  gender: string;
  age: string;
  country: string;
}

export const LoginPage: React.FC = () => {
  const [loginDetails, setLoginDetails] = React.useState<ILoginDetails>({
    email: "",
    password: "",
    gender: "",
    age: "",
    country: "",
  });

  const handleRegister = () => {
    console.log(loginDetails);
  };

  return (
    <IonContent className="ion-padding">
      <IonItem>
        <IonLabel position="floating">Gender</IonLabel>
        <IonSelect
          label="gender"
          placeholder="Select One"
          onIonChange={(e) => setLoginDetails({ ...loginDetails, gender: e.target.value })}
        >
          <IonSelectOption value="male">Male</IonSelectOption>
          <IonSelectOption value="female">Female</IonSelectOption>
          <IonSelectOption value="other">Other</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Age</IonLabel>
        <IonInput
          label="age"
          type="number"
          placeholder="Your age (Optional)"
          onIonChange={(e) => {
            const age = e.target.value?.toString();
            if (age) {
              setLoginDetails({ ...loginDetails, age: age });
            }
          }}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Country</IonLabel>
        <IonInput
          label="country"
          onIonChange={(e) => {
            const country = e.target.value?.toString();
            if (country) {
              setLoginDetails({ ...loginDetails, country: country });
            }
          }}
          placeholder="Your country (Optional)"
        />
      </IonItem>
      <IonText>
        <p className="ion-padding-start ion-padding-end">
          Providing accurate information will ensure better gift recommendations.
        </p>
      </IonText>
      <IonButton fill="clear" onClick={handleRegister}>
        Register
      </IonButton>
    </IonContent>
  );
};
