import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import "./accountPupil.css";
import CreateLesson from "./createLesson";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    categories: state.category.category,
  };
}

function AccountPupil(props) {
  const [page, setPage] = useState();
  const { currentUser, categories } = props;

  // function createLesson(){
  //     setIsChecked(true);
  // }
  const [tabKey, initTabKey] = useState("one");
  return (
    <>
      <div className="wrapper-pupil">
        <div>
          <h1>ברוכים הבאים {currentUser.userName}</h1>
        </div>

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
