// import { keyboard } from "@testing-library/user-event/dist/keyboard";
// import e from "express";
import React, { useRef, useState, useEffect, useContext } from "react";
// import { Link, createSearchParams, useNavigate } from "react-router-dom";
import AuthContext from "../contex/authProvider";
import "./login.css";
// import { json } from "react-router-dom";
import profil from "../picthers/profil.png";
import { Nav, NavBtn, NavBtnLink} from "../Login/loginStyle";
import { Form } from "react-router-dom";


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
  // function ProfilTeacher1() {
  //   return <></>;
  // }
  return (
    <>
    <div className="login-wapper">
       {/* <div 
       style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
        <img id="profil" alt="imgProfil" img src={profil} />
      </div> */}
      {succsess ? (<section>
          <h1>you are logged in!</h1>
          <br />
          <p>
            <a href="#">go to Home</a>
          </p>
        </section>) 
        : (
        <section>
          <p ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive">
            {" "}
            {errMsg}
          </p>
          <div>
              <div>
                <h3>כניסה למשתמש רשום</h3>
              </div>

            <form className="text" onSubmit={handlesubmit}>
              <label htmlFor="username">שם משתמש:</label>
              <input
                className="container"
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
              <label htmlFor="password">סיסמא:</label>
              <input
                className="container"
                type="password"
                id="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                required
              />
              <br />
              <br />
              <Nav className="button">
                <NavBtn>
                  <NavBtnLink to="/profilTeacher">כניסה</NavBtnLink>
                </NavBtn>
              </Nav>
              <br /> <br />
            </form>
          </div>
        </section>
      )}
      </div>
    </>
  );
}

//   <Link to={"sign up"}>to start</Link>

//   <button onClick={backToHome}>back to start</button>
// </div>

// export default ProfilTeacher;
