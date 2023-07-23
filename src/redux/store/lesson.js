import { produce } from "immer";

const initialState = {
  lesson: [
    {

    }
  ],
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "ADD_LESSON":
      state.teacherDetais.push(action.payLoad);
      break;
    default:
      break;
  }
}, initialState);


export default reducer
