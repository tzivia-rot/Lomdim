// import { keyboard } from "@testing-library/user-event/dist/keyboard";
// import e from "express";
import React, { useRef, useState, useEffect, useContext } from "react";
// import { Link, createSearchParams, useNavigate } from "react-router-dom";
import AuthContext from "../contex/authProvider";
import "../LoginOut/Login.css";
import ProfilTeacher from "../profilTecher/profilTeacher";
// import { json } from "react-router-dom";
import profil from '../profil.png';


export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef("");
  const errRef = useRef("");

  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [succsess, setsuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handlesubmit = async (e) => {
    e.preventDefault();
  };
  function ProfilTeacher() {
    <ProfilTeacher/>
 }
  return (
    <>
      <img id='profil' img src={profil} />

      {succsess ? (
        <section>
          <h1>you are logged in!</h1>
          <br />
          <p>
            <a href="#">go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {" "}
            {errMsg}
          </p>

          <h1></h1>

          <form  className="text" onSubmit={handlesubmit}>
            <label htmlFor="username">userName:</label>

            <input class="container"
              ref={userRef}
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setuser(e.target.value)}
              value={user}
              required
            />
            <br />
            <br />

            <label htmlFor="password">password:</label>

            <input class="container"
              type="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
            />
            <br />
            <br />
              <button id='button' onClick={ProfilTeacher} className="signin">
              sign In
            </button>
              <br /> <br />
          </form>
          <p>
            <br />
          </p>
        </section>
      )}
    </>
  );
}


//   <Link to={"sign up"}>to start</Link>

//   <button onClick={backToHome}>back to start</button>
// </div>

// export default profilTeacher;
