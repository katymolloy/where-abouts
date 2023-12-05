import {initializeApp, getApp, getApps} from 'firebase/app';
import { getDatabase }  from 'firebase/database';
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';


// Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyBgonsOSbS-cpnNVFyNzyVl1WQZszk2GZM",
    authDomain: "md---group-project.firebaseapp.com",
    projectId: "md---group-project",
    storageBucket: "md---group-project.appspot.com",
    messagingSenderId: "160922574715",
    appId: "1:160922574715:web:c735319179eb7dca2a67de",
    measurementId: "G-7422DW7MF6"
};


var app;
if (!getApps().length){
  app = initializeApp(firebaseConfig); // If no app exists.
}
else{
  const APPS = getApps();
  app = APPS[0]; // Choose the first app from the array.
}

export const db = getDatabase(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);