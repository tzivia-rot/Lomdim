import { produce } from "immer";

const initialState = {
 
  currentUser: {},
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "SET_USER":
      state.currentUser=(action.payLoad);
      break;


      
    // case "UPDATE_USER":
    //   state.cu = action.payLoad;
    //   break;
    // case "DELETE_USER":
    //   state.user.filter( index => index.userName !== action.payload.userName);
    //   break;
    default:
      break;
  }
}, initialState);


export default reducer
