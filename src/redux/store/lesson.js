import { produce } from "immer";

const initialState = {
  lesson: [{}],
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "SET_ALL_LESSONS":
      state.lesson = action.payLoad;
      break;
    default:
      break;
  }
}, initialState);


export default reducer
