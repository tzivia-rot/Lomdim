import { produce } from "immer";

const initialState = {
  category: [],
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case "SET_ALL_CATEGORY":
      state.category = action.payLoad;
      break;
    case "DELETE_CATEGOTY":
      state.categoty.filter((index) => index.name !== action.payload.name);
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
