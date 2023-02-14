import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCPz-0s-cIF4-7CVW9v-2NrGmFpWn61KPs",
    authDomain: "app-tornillos-hs.firebaseapp.com",
    projectId: "app-tornillos-hs",
    storageBucket: "app-tornillos-hs.appspot.com",
    messagingSenderId: "322725057158",
    appId: "1:322725057158:web:225e46085fe0831b833707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)