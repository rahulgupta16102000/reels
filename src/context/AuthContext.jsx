 
import React,{useState,useEffect} from 'react';
import { auth } from '../firebase';
export const AuthContext = React.createContext();

export function AuthProvider(props) {
    // const [email,setEmail] = useState('');
    const [loading,setloading]=useState(true);
    const [user,setuser] = useState();
    function singup(email,password){
         return auth.createUserWithEmailAndPassword(email,password);
          
    } function login(email,password){
      return auth.signInWithEmailAndPassword(email,password);
    }  function logout(){
      return  auth.signOut();
      }
    useEffect(()=>{
      let unsub = auth.onAuthStateChanged((user)=>{
        setuser(user);
        setloading(false)
      })
      return ()=>{
        unsub();
      }
    },[])
  
   
    const store={
user,
singup,
login,
logout
    }
    return (
        <AuthContext.Provider value={store}>
         {!loading && props.children}
        </AuthContext.Provider>
    )
}