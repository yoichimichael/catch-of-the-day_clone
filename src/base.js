import Rebase from 're-base';
import firebase from 'firebase';

// creates firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLyt8eOeBC_EkZDe0RaaBPUujPJL-8u64",
  authDomain: "catch-of-the-day---ymn.firebaseapp.com",
  databaseURL: "https://catch-of-the-day---ymn-default-rtdb.firebaseio.com",
})

// creates rebase bindings
const base = Rebase.createClass(firebaseApp.database()); 

// this is a named export
export { firebaseApp }

// this is a default export
export default base;