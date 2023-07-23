import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import "./accountPupil.css";
import CreateLesson from "./createLesson";
import { Tabs } from "react-bootstrap";
import { Tab } from "semantic-ui-react";


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
  return (
    <>
      <div className="wrapper-pupil">
        <div>
          <h1>ברוכים הבאים {currentUser.userName}</h1>
        </div>

        {/* <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs> */}

        <div className="buttons">
          <button onClick={() => setPage(1)}>לקביעת שיעור פרטי</button>
          <button onClick={() => setPage(2)}>היסטוריית שיעורים</button>
          <button onClick={() => setPage(3)}>למחיקת חשבון</button>
        </div>

        {page === 1 ? (
          <div>
            <CreateLesson categories={categories} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(AccountPupil);
