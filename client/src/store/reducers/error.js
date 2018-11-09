import { ADD_ERROR, REMOVE_ERROR } from "../../types";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_ERROR:
      return action.error;
    case REMOVE_ERROR:
      return "";
    default:
      return state;
  }
};

export default errorReducer;
