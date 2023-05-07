import React from 'react'
import Login from './login';
import LoginOut from './loginOut';
import { Outlet, Link} from "react-router-dom";



export default function home() {
  

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
        <Link to="/login">Login</Link>
      </li>
 
      <li>
        <Link to="/loginOut">LoginOut</Link>
      </li>
    </ul>
  </nav>
  <button onClick={LoginOut}>הרשמה למורה</button>


</>
      
        <Login/>
  
       <header></header>
        <Outlet/>
        <footer></footer>


    </div>
  )
}
