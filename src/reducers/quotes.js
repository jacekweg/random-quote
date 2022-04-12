// noinspection SpellCheckingInspection
export const NEWQUOTE = "NEWQUOTE";

const quoteReducer = (state = {}, action) => {
  switch (action.type) {
    case NEWQUOTE:
      return {
        text: action.text,
        author: action.author,
      };
    default:
      return state;
  }
};

export default quoteReducer;
