import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    onIdTokenChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { readable, writable } from 'svelte/store';
import { getMessaging,getToken } from "firebase/messaging";
const firebase_config = {
  apiKey: "AIzaSyCQCjYFhCMTDT1k4AL69WplhBDzoCQpRKY",
  authDomain: "koseli-511a0.firebaseapp.com",
  projectId: "koseli-511a0",
  storageBucket: "koseli-511a0.firebasestorage.app",
  messagingSenderId: "337968123010",
  appId: "1:337968123010:web:7a9b463053cbdedcf4389b",
  measurementId: "G-MNHLHVPCEF"
};

// initialize and login

const firebaseApp = initializeApp(firebase_config);

const auth = getAuth();
   
export async function token() {
    
 const messaging =getMessaging(firebaseApp);
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

messaging.setBackgroundMessageHandler(function(payload){
  const title = "Hello World";
  const option = { body: payload.data.status }
  return self.registration.showNotification(title,option);
});
    
}
export async function loginWithGoogle() {
    return await signInWithPopup(auth, new GoogleAuthProvider());
}

export async function logout() {
    return await signOut(auth);
}

export const user = readable(
    null,
    (set) =>
        onIdTokenChanged(auth, (_user) => {
            if (!_user) {
                set(null);
                return;
            }
            const { displayName, photoURL, uid, email } = _user;
            set({ displayName, photoURL, uid, email });
        })
);

