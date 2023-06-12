// import { keyboard } from "@testing-library/user-event/dist/keyboard";
// import e from "express";
import React, { useRef, useState, useEffect, useContext } from "react";
// import { Link, createSearchParams, useNavigate } from "react-router-dom";
import AuthContext from "../contex/authProvider";
import "./login.css";
// import { json } from "react-router-dom";
import profil from "../picthers/profil.png";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavDropDown } from '../header/headerStyle';


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
  function ProfilTeacher1() {
    return <></>;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img id="profil" img src={profil} />
      </div>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form class="text" onSubmit={handlesubmit}>
              <label htmlFor="username">userName:</label>
              <input
                class="container"
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
              <input
                class="container"
                type="password"
                id="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                required
              />
              <br />
              <br />
              <Nav id="button">
                <NavBtn>
                  <NavBtnLink to="/profilTeacher">sign In</NavBtnLink>
                </NavBtn>
              </Nav>
              {/* <button  to="/profilTeacher" className="signin"> */}
              {/* sign In */}
              {/* </button> */}
              <br /> <br />
            </form>
            <p>
              <br />
            </p>
          </div>
        </section>
      )}
    </>
  );
}

//   <Link to={"sign up"}>to start</Link>

//   <button onClick={backToHome}>back to start</button>
// </div>

// export default ProfilTeacher;
