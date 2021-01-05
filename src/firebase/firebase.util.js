import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCZb_fGL7hbaaCBbDosFudS4nFd2NZkhT4",
    authDomain: "crwn-db-eb402.firebaseapp.com",
    projectId: "crwn-db-eb402",
    storageBucket: "crwn-db-eb402.appspot.com",
    messagingSenderId: "73681496374",
    appId: "1:73681496374:web:2a4c76b82caec270aeab97",
    measurementId: "G-VD636HEHJ9"
};

async function createUserProfileDocument(user, additionalData){
  if (!user) return;
  const userReference = firestore.doc(`users/${user.uid}`);
  const userSnapshot = await userReference.get();
  
  try{
    if (!userSnapshot.exists){

      const {displayName, email} = user;

      const createDate = new Date();

      await userReference.set({
        displayName,
        email,
        createDate,
        ...additionalData
      });
    }
  }catch(err){
    console.log("Error creating user" + err.message);
  }

  return userReference;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;
export {createUserProfileDocument};
