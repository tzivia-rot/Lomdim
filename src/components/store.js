//import React from "react";
import { produce } from "immer";
import { createStore } from "redux";

const initialState = {
  techerDetails:
    {
      firstName: "הדסה",
      lastName: "פלג",
      email: "hadas5785@gmail.com",
      password: "12345",
      gender: "נקבה",
      yearOfBirth: 1998,
      city: "רחובות",
      phone: "0533467631",
      subjectStudy: ["אנגלית", "מתמטיקה"],
      active: "מורה פרטי בחלק מהזמן",
      area: "מרכז",
      textDetail: "cjjmmmmmm",
      place: "בבית המורה",
      price: 100,
    },
  currentUser:{}
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "UPDATE_PHONE":
        state.techerDetails.phone = action.payLoad;
      break;

    case "UPDATE_PASSWORD":
        state.techerDetails.password = action.payLoad;
      break;
    case "ADD_USER":
        state.techerDetails.push(action.payLoad);
      break;
    default:
      break;
  }
}, initialState);

const store = createStore(reducer);
window.store = store;
export default store;
