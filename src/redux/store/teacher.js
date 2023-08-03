import { produce } from "immer";

const initialState = {
  teacherDetails: [],
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "ADD_TEACHER_DETAILS":
      if (state.teacherDetails.lengh) {state.teacherDetails.push(action.payLoad)};
      break;
    case "UPDATE_TEACHER_DETAILS":
      state.teacherDetails.filter((index) => index._id !== action.payload._id);
      break;
    case "SET_ALL_TEACHERS":
      state.teacherDetails = action.payLoad;
      break;
    case "GET_ALL_TEACHERS":
      return state.teacherDetails;
    default:
      break;
  }
}, initialState);

export default reducer;
