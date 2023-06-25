import { connect } from "react-redux";
import React, { useRef, useState } from "react";
import "../Register/register.css";
import { Nav, NavBtn, NavBtnLink } from "../header/headerStyle";
import PersonalDetails from "./personalDetails";
import { addUser } from "../action";

export default connect()( function Register(props) {
const { dispatch } = props;


  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const mailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = (e) => {
    while (password.value !== confirmPassword.value) {
      alert("סיסמה ואימות סיסמה אינם תואמים");
    }
    e.preventDefault();
  };

  function insertNewUser(){
    dispatch(addUser({
      firstName:firstNameRef.current.value, 
      lastName:lastNameRef.current.value,
      email:mailRef.current.value,
      password:passwordRef.current.value
    }))
  }

  return (
    <>
      <div className="register-wapper">
        <h3 className="title-register">הרשמה</h3>
        <form className="form" onSubmit={submit} action="/personal_details">
          <div className="register-details">
            <div className="input-wapper">
              <input
                placeholder="שם פרטי"
                ref={firstNameRef}
                type="text"
                id="firstName"
                autoComplete="on"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </div>
            <div className="input-wapper">
              <input
                placeholder="שם משפחה"
                ref={lastNameRef}
                type="text"
                id="lastName"
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </div>

            <div className="input-wapper">
              <input
                placeholder="אימייל"
                ref={mailRef}
                type="text"
                id="pone"
                autoComplete="off"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                required
              />
            </div>
            <div className="input-wapper">
              <input
                placeholder="סיסמא"
                ref={passwordRef}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="input-wapper">
              <input
                placeholder="אימות סיסמא"
                ref={confirmPasswordRef}
                type="password"
                id="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </div>
          </div>

          <button type="submit" class="btn-save1" onClick={insertNewUser}>
            שמור והמשך
          </button>
        </form>
      </div>
    </>
  );
})
