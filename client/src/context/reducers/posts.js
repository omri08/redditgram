export default function postsReducer(state, action) {
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
        posts: action.payload.data,
        loading: false,
      };

    default:
      break;
  }
}
