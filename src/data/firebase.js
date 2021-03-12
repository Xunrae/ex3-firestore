import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCPHD2u1jjZfQ4d-W5qKImDKg1I9BalT4U",
  authDomain: "panier-achat-acl.firebaseapp.com",
  databaseURL: "https://panier-achat-acl-default-rtdb.firebaseio.com",
  projectId: "panier-achat-acl",
  storageBucket: "panier-achat-acl.appspot.com",
  messagingSenderId: "1051741793466",
  appId: "1:1051741793466:web:892fb5f5be50e686f36683",
  measurementId: "G-NRTB79L5TQ"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
const bd = fbAppli.firestore();
export default bd;