// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { userState } from "./state.svelte";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQCjYFhCMTDT1k4AL69WplhBDzoCQpRKY",
  authDomain: "koseli-511a0.firebaseapp.com",
  projectId: "koseli-511a0",
  storageBucket: "koseli-511a0.firebasestorage.app",
  messagingSenderId: "337968123010",
  appId: "1:337968123010:web:7a9b463053cbdedcf4389b",
  measurementId: "G-MNHLHVPCEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
 
getToken(messaging, {vapidKey: "BBIHepxfbBzPFzhtDJKA8FKJ3cSkzTeHHlgCIXd0Gh6oVfX0G4cknxC9HrcFwrBL3InL-SClRpSFR2Z6vV1JDPA"}).then((currentToken) => {
  if (currentToken) {
  
    userState.token = currentToken;
    
  } else {
    // Show permission request UI
    userState.token = "Dummy token 2"
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
}); 