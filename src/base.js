import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLyt8eOeBC_EkZDe0RaaBPUujPJL-8u64",
  authDomain: "catch-of-the-day---ymn.firebaseapp.com",
  databaseURL: "https://catch-of-the-day---ymn-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database()); 

export { firebaseApp }

export default base;