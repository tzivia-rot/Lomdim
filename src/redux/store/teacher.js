import { produce } from "immer";

const initialState = {
  teacherDetails: {},
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "ADD_TEACHER_DETAILS":
      state.teacherDetais.push(action.payLoad);
      break;
    case "UPDATE_TEACHER_DETAILS":
      state.teacherDetais = action.payLoad;
      break;
    case "SET_ALL_TEACHERS":
      state.category = action.payLoad;
      break;

    default:
      break;
  }
}, initialState);

export default reducer;
