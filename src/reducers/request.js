export const REQUESTING_DATA = "REQUESTING_DATA";
export const RECEIVED_DATA = "RECEIVED_DATA";

const defaultState = {
  fetching: false,
  quotes: [],
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        quotesJson: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        quotesJson: action.quotes,
      };
    default:
      return state;
  }
};

export default asyncDataReducer;
