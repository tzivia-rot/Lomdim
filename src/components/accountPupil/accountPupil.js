import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import "./accountPupil.css";
import CreateLesson from "./createLesson";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function mapStateToProps(state) {
  return {
    // currentUser: state.user.currentUser,
    categories: state.category.category,
  };
}

function AccountPupil(props) {
  // const [page, setPage] = useState();
  const { categories } = props;
  const navigation = useNavigate();

  //get current user
  const user = JSON.parse(localStorage.getItem("user"));
  //logout
  const handleLogout = ()=>{
    localStorage.removeItem("loggedin")
    navigation("/");
  }

  // function createLesson(){
  //     setIsChecked(true);
  // }
  const [tabKey, initTabKey] = useState("one");
  return (
    <>
      <div className="wrapper-pupil">
        <br />
        <div className="row justify-content-between">
          <div className="col">
            <h2> שלום, {user.userName}</h2>
          </div>
          <div className="col-md-auto">
          <button
              type="button"
              class="btn btn-outline-primary btn"
              // onClick={insertToAccount}
            >
              עדכון פרטים
            </button>
            </div>
          <div className="col-lg-2">
            <button
              type="button"
              class="btn btn-outline-danger btn"
              onClick={handleLogout}
            >
              התנתק
            </button>
          </div>
        </div>
        <br />
        <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
          <Tab eventKey="one" title="חפש מורה">
            <CreateLesson categories={categories} />
          </Tab>
          <Tab eventKey="two" title="היסטוריית שיעורים">
            <p>Tab 2</p>
          </Tab>
          <Tab eventKey="three" title="מחיקת חשבון">
            <p>Tab 3</p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(AccountPupil);
