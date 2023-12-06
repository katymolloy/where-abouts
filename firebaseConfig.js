// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBpYJuE-_l7ZExvn0-ohvWMV-wHnVLWZmY",

  authDomain: "where-abouts-c7d80.firebaseapp.com",

  databaseURL: "https://where-abouts-c7d80-default-rtdb.firebaseio.com",

  projectId: "where-abouts-c7d80",

  storageBucket: "where-abouts-c7d80.appspot.com",

  messagingSenderId: "781958942218",

  appId: "1:781958942218:web:dca176b56f761aad48d9f3"

};


// Initialize Firebase

var app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}
else {
  const APPS = getApps();
  app = APPS[0]
}

export const db = getDatabase(app);
export const auth = getAuth(app);