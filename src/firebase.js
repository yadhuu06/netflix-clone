
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {setDoc, collection, getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup=async(name,email,password)=>{
    try {
        console.log("Attempting signup with:", email, password);
        const res = await createUserWithEmailAndPassword(auth,email,password);
        console.log("User created:", res.user)
        const user=res.user;
        await setDoc(collection(db,"users"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }

}
const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log("Logged in user:", user);
      alert("Login successful!");
    } catch (error) {
      console.log("Login error:", error);
      alert(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      alert("You have been logged out!");
    } catch (error) {
      console.log("Logout error:", error);
      alert(error.message);
    }
  };

  export { auth, db, signup, login, logout };