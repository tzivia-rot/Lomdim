import React from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { addteacher } from "./listteachers";
// import { connect } from 'react-redux';

//  export default connect(()=>{} function loginOut(props)){
let Navigate = useNavigate();
const { dispatch } = this.props;
const nameRef = useRef("");
const idRef = idRef("");

// export default function loginOut(){

//   return(
//     <h1>To Insert</h1>
//   )
// }

export default function loginOut() {
  // dispatch(
  //   addteacher({ name: nameRef.current.value, id: idRef.current.value })
  // );

  // export default function insertTeacher() {

  //   dispatch(addteacher({ name: nameRef.current.value, id: idRef.current.value })
  //   );

  Navigate({
    pathName: "/loginOut",
    search: createSearchParams({
      name: nameRef.current.value,
      id: idRef.current.value,
    }).toString(),
  });
  // Navigate("/loginOut"),{state:{name:nameRef.current.value,id:idRef.current.value}};

  const backToHome = () => {
    Navigate("/");
  };


return (
  <div>
    <h1>הרשמה למורים</h1>

    <label>
      name:
      <input ref={nameRef} type="string"></input>
    </label>

    <label>
      id:
      <input ref={idRef} type="string"></input>
    </label>

    <Link to={"/"}>to start</Link>

    <button onClick={backToHome}>back to start</button>
  </div>
);
}
// export default insertTeacher;
