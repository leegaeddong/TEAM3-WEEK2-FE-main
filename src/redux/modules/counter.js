const PLUS = "PLUS";
const MINUS = "MINUS";

export const plusCount = (payload) => {
  return {
    type: PLUS,
    payload,
  };
};

export const minusCount = (payload) => {
  return {
    type: MINUS,
    payload,
  };
};

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return {
        count: state.count + action.payload,
      };
    case "MINUS":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
