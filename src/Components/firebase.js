import firebase from "firebase";
import firebaseInfo from "../config/firebaseConfig";

const firebaseConfig = firebaseInfo;

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
