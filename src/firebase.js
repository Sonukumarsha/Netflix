
import { initializeApp } from "firebase/app";

import { getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";

import { addDoc,collection,getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDHf77ruYmu6QkRMxS_XYJldSm8sz5s0mY",
  authDomain: "netflix-clone-775e4.firebaseapp.com",
  projectId: "netflix-clone-775e4",
  storageBucket: "netflix-clone-775e4.firebasestorage.app",
  messagingSenderId: "833947324037",
  appId: "1:833947324037:web:eeb798df30abe84a4663ec"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
          });
       

    }catch(err){
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "));
        
    }

}

const login = async(email, password) => {
    try{
        const res = await signInWithEmailAndPassword(auth,email,password);
        return res;
    }catch(err){
        console.log(err.message);
        toast.error(err.code.split('/')[1].split('-').join(" "));
        
        
    }


}

const logout = () => {
    signOut(auth);
}


export {auth,db,signup,login,logout};