import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText
} from '@ionic/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);

  const handleLogin = () => {
    console.log('Login with:', email, password);
    // Add your login logic here
  };

  const handleCreateAccount = () => {
    console.log('Create account with:', email, password, gender, age, country);
    // Add your account creation logic here
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{isLoginView ? 'Login' : 'Create Account'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput value={email} onIonChange={e => setEmail(e.detail.value)} type="email" />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput value={password} onIonChange={e => setPassword(e.detail.value)} type="password" />
        </IonItem>

        {!isLoginView && (
          <>
            <IonItem>
              <IonLabel position="floating">Gender</IonLabel>
              <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
                <IonSelectOption value="male">Male</IonSelectOption>
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Age</IonLabel>
              <IonInput value={age} onIonChange={e => setAge(e.detail.value)} type="number" placeholder="Your age (Optional)" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Country</IonLabel>
              <IonInput value={country} onIonChange={e => setCountry(e.detail.value)} placeholder="Your country (Optional)" />
            </IonItem>
            <IonText>
              <p className="ion-padding-start ion-padding-end">
                Providing accurate information will ensure better gift recommendations.
              </p>
            </IonText>
          </>
        )}

        {isLoginView ? (
          <>
            <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
            <IonText className="ion-text-center">
              <p>
                Don't have an account? <IonButton fill="clear" onClick={toggleView}>Create one</IonButton>
              </p>
            </IonText>
          </>
        ) : (
          <>
            <IonButton expand="block" onClick={handleCreateAccount}>Create Account</IonButton>
            <IonText className="ion-text-center">
              <p>
                Already have an account? <IonButton fill="clear" onClick={toggleView}>Login</IonButton>
              </p>
            </IonText>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
