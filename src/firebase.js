import firebase from "firebase";
import "firebase/auth"; // for authentication
import 'firebase/storage';     // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions

const firebaseApp = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASEZ_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
});
export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export {firebase};

export const createUserDocument = async(user,additionalData) => {
  if(!user) return;
  const userRef = db.collection("users").doc(`${user.uid}`)
  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const {email} = user;
    const {fullname} = additionalData;

    try{
      userRef.set({
        fullname,
        email,
      });
    }
      catch(error){
          console.log('error in creating user',error)
      }
    
    }
  }