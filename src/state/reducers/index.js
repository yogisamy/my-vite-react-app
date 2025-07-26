export const initialState = {
  users:{
    loading: false,
    data: null,
    error: null,
  }, 
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  createPost :{
    loading: false,
    data: null,
    error: null
  }
};

export function reducer(state, action) {

  const {type, payload } = action;

  // const [resource, status] = type.split("_");

  // const key = {
  //   users: "users",
  //   posts: "posts"
  // }

  // if(!key) return state;

  switch (type) {
    case "USERS_INIT":
      return { ...state, users:{...state["users"], loading: true, error: null} };
    case "USERS_SUCCESS":
      return { ...state, users:{...state["users"], loading: false, data: payload} };
    case "USERS_FAILURE":
      return { ...state, users:{...state["users"],loading: false, error: payload} };
     case "POSTS_INIT":
      return { ...state, posts:{...state["posts"], loading: true, error: null} };
    case "POSTS_SUCCESS":
      return { ...state, posts:{...state["posts"], loading: false, data: payload} };
    case "POSTS_FAILURE":
      return { ...state, posts:{...state["posts"],loading: false, error: payload} };
    default:
      return state;
  }
}