// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCQCjYFhCMTDT1k4AL69WplhBDzoCQpRKY",
  authDomain: "koseli-511a0.firebaseapp.com",
  projectId: "koseli-511a0",
  storageBucket: "koseli-511a0.firebasestorage.app",
  messagingSenderId: "337968123010",
  appId: "1:337968123010:web:7a9b463053cbdedcf4389b",
  measurementId: "G-MNHLHVPCEF"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // console.log(
  //   '[firebase-messaging-sw.js] Received background message ',
  //   payload
  // );
  // // Customize notification here
  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //   body: 'Background Message body.',
  //   icon: '/firebase-logo.png'
  // };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});