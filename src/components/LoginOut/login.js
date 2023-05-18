// import { keyboard } from "@testing-library/user-event/dist/keyboard";
// import e from "express";
import React, { useRef, useState, useEffect,useContext } from "react";
// import { Link, createSearchParams, useNavigate } from "react-router-dom";
import AuthContext from '../contex/authProvider';


import { json } from "react-router-dom";
// import App from "../../App";



export default function Login() {
  
  const{setAuth}=useContext(AuthContext);
  const userRef = useRef("");
  const errRef = useRef("");



  
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [succsess, setsuccess] = useState(false);


  useEffect(()=>{
    setErrMsg('');
  },[user,password])

 

  const handlesubmit = async (e) => {
    e.preventDefault();
    
//להחזיר מכאן//

    // try{
    //   const response=await axios.post(LOGIN_URL,JSON.stringify({user,password}),{
    //     Headers:{'content-Type':'application/json'},
    //     withCredentials: true
     
    //    });
    //    console.log(json.stringify(response?.data));
    //    console.log(json.stringify(response));
    //    const accessToken=response?.data?.accessToken;
    //    const roles=response?.data?.roles;
    //    setAuth({user,password,accessToken,roles})
       
    // setuser('');
    // setpassword('');
    // setsuccess(true);
    // }catch(err){
    //   if(!err?.response){
    //     setErrMsg('no server response');
    //   }else if(err.response?.status===400){
    //     setErrMsg('missing username or password')
    //   }else if(err.response?.status===401){
    //     setErrMsg('unauthorized');
    // }else{
    //   setErrMsg('login failed');
    // }
    // errRef.current.value();

//עד כאן//
  
  };

  return (
    
    <>
    
    {succsess ? (
    <section>
      <h1>you are logged in!</h1>
      <br/>
      <p>
        <a href="#">go to Home</a>
      </p>
      
      </section>
      )
      :(
    
      <section className="bg">
       
      <p 
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"> {errMsg}
      </p>
      
      <h1>sign In</h1>
      
      <form className="text" onSubmit={handlesubmit}>
        <label  htmlFor="username">userName:</label>

        <input 
          ref={userRef}
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setuser(e.target.value)}
          value={user}
          required
        />
        <br/><br/>
        
        <label htmlFor="password">password:</label>

        <input
          type="password"
          id="password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          required
        />
        <br/><br/>
        <button  onClick={handlesubmit} className="signin">sign In</button>
        <br/><br/>


      </form>
      <p>
        <br/>
        <span className="line">{ }
          

        </span>
      </p>
   
      </section>
      
  )}
    </> 

     );
    }
    // <App />

    //   <Link to={"sign up"}>to start</Link>

    //   <button onClick={backToHome}>back to start</button>
    // </div>
    
  
// export default insertTeacher;
