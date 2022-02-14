import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB1gS84GrHYCzJ9-wTncxwCCjQlcIvv_0w",
  authDomain: "buywheels-96be5.firebaseapp.com",
  projectId: "buywheels-96be5",
  storageBucket: "buywheels-96be5.appspot.com",
  messagingSenderId: "19115705535",
  appId: "1:19115705535:web:6e466a5d739c925d43f20a",
  measurementId: "G-M7JP5863YV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
