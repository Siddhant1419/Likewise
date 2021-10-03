import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyAirqnGOqPxKtvbKb2CoL5rY1WdmWnQviI",
    authDomain: "likewise-434aa.firebaseapp.com",
    databaseURL: "https://likewise-434aa.firebaseio.com",
    projectId: "likewise-434aa",
    storageBucket: "likewise-434aa.appspot.com",
    messagingSenderId: "219298456829",
    appId: "1:219298456829:web:590eeb0a7c9f34bd848a94",
    measurementId: "G-FCHK73XM6X"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getFirestore(firebaseApp);

  export default database;