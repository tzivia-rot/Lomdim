import { Connect } from 'react-redux'
// import Login from '../LoginOut/login';
import React ,{ useRef, useState} from "react";

export default function Register() {
  const nameRef = useRef("");
  const idRef = useRef("");
  const poneRef=useRef("");
  const mailRef=useRef("");

  const confirmRef =useRef("");



  const [pone, setpone] = useState("");
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [mail, setmail] = useState("");



  const submit = async (e) => {
    e.preventDefault();
  };
  return ( 
    <form onSubmit={submit}>



    <label htmlFor="pone">pone:</label>
    <input
      ref={poneRef}
      type="text"
      id="pone"
      autoComplete="off"
      onChange={(e) => setpone(e.target.value)}
      value={pone}
      required
    />
    <br/><br/>

    <label htmlFor="mail">mail:</label>
    <input
      ref={mailRef}
      type="text"
      id="pone"
      autoComplete="off"
      onChange={(e) => setmail(e.target.value)}
      value={mail}
      required
    />
    <br/><br/>

    <label htmlFor="user">userName:</label>
    <input
      ref={nameRef}
      type="text"
      id="user"
      autoComplete="off"
      onChange={(e) => setuser(e.target.value)}
      value={user}
      required
    />
    <br/><br/>
    
    <label htmlFor="password">password:</label>
    <input
    ref={idRef}
      type="password"
      id="password"
      onChange={(e) => setpassword(e.target.value)}
      value={password}
      required
    />
    <br/><br/>

    <label htmlFor="confirm">confirm Password:</label>
    <input
    ref={confirmRef}
      type="confirm"
      id="confirm"
      onChange={(e) => setconfirm(e.target.value)}
      value={confirm}
      required
    />
    <br/><br/>

    <button onClick={submit}>sign up</button>

  </form> 
 
  )
  
}
