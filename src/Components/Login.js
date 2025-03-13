import React, { useRef, useState } from 'react'
import { Checkvalidate } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errormsg,setErrormsg] = useState("");
  const name=useRef(null);
  const email = useRef(null)
  const password = useRef(null)

      const handlebuttonclick = () =>
      {
        //validate the form data using useref // console.log(email.current.value);
         let message = Checkvalidate(email.current.value,password.current.value);
          setErrormsg(message);
          if(message) return;
          
          //*SIGN IN and SIGN-UP Logic

          if(!isSignInForm)
          {
            //sign up
              createUserWithEmailAndPassword(auth,email.current.value,password.current.value).then((userCredential)=>
              {
                const user=userCredential.user;
                // console.log(user);

                updateProfile(user, {
                  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                  const {uid, email,displayName} = auth.currentUser;
                  dispatch(addUser({uid:uid,email:email,displayName:displayName}))

                }).catch((error) => {
                  setErrormsg(error.message);
                });

              }).catch((error)=>{
                const errorcode = error.code;
                const errormessage = error.message;
                setErrormsg(errormessage);
              })
          }
          else
          {
            //sign in

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrormsg(errorMessage);
            });

          }
      }

        const toggleform = ()=>
      {
        setIsSignInForm(!isSignInForm);
      }

  return (
    <div>
       <div id='formdiv'>
       <form id='form' onSubmit={(e)=>{e.preventDefault()}}>
        <h1>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {isSignInForm?"":<input type='text' placeholder='Full Name' required className='inputauth' ref={name}></input>}
        <input type='email' placeholder='Email Address' id='email' ref={email} className='inputauth'/>
        <input type='password' placeholder='Password' id='pwd' ref={password} className='inputauth'/>
        <button id='authbutton' onClick={handlebuttonclick}>{isSignInForm?"Sign in":"Sign Up"}</button>
          <div id='signupdiv'>
          <h3 onClick={toggleform}>{isSignInForm?"New to VidStream? Sign Up Now":"Already Registered? Login Now"}</h3>
          </div>
          <p id='errormessage'>{errormsg}</p>
        </form>
        </div>
    </div>
  )
}

export default Login
