import { initializeApp } from 'firebase/app';
import { getStorage } from '@firebase/storage'
import firebase from "firebase/compat";

const Config = {
    apiKey: "AIzaSyB2WksV2HjTgnKUv8DIsItxUbOioVseoIo",
    authDomain: "astute-harbor-329318.firebaseapp.com",
    projectId: "astute-harbor-329318",
    storageBucket: "astute-harbor-329318.appspot.com",
    messagingSenderId: "466152025535",
    appId: "1:466152025535:web:c776140b7f24c1b2ab850a",
    measurementId: "G-GR2QSVY2MB"
};


// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage()

firebase.initializeApp(Config)
export default firebase

