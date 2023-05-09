import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>ברוכים הבאים למאגר הלומדים</h1>

      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recomment">חוות דעת</Link>
            </li>
            {/* <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/loginOut">LoginOut</Link>
          </li> */}
          </ul>
        </nav>
        {/* <button onClick={loginOut}>הרשמה למורה</button> */}
      </>

      {/* <Login />

  
    <Outlet /> */}
    </div>
  );
}
