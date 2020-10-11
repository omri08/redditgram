export default function postsReducer(state, action) {
  console.log("here");
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      return {
        ...state,
        error: true,
      };
    case "COMPLETE":
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    default:
      break;
  }
}
