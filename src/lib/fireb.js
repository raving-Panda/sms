// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
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
export async function token() {

	try{
		const messaging = getMessaging(app);
	}catch(err){

		console.error("Messaging error"+err);
		return "0"

	}
    
	getToken(messaging, {vapidKey: "BKBh8bQ_Fw4tEZ_cgOpFFyPmo0W97AFfhQv7q_dyVstf0unoA4HLR9M-MfoeLE0BPw1bESXe6z_HpfXHJtaa4FI"}).then(
          async (currentToken) => {
          if (currentToken) {
            return currentToken;
          }else{
            console.error("Did not get token");
			return "0"
          };
        }); 
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

