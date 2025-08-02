import "./App.css";

import { getPostsList, getUserList } from "./services";
import { initialState, reducer } from "./state/reducers";
import { useEffect, useReducer } from "react";

import { setPostsAction } from "./state/actions/postActions";
import { setUsersAction } from "./state/actions/userActions";
import { useApi } from "./useApi";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // reducer , state
  // state and dispatch
  const [usersResponse, getUsers] = useApi();
   const [postsResponse, getPosts] = useApi();
  //console.log
  useEffect(() => {
    dispatch({ type: "USERS_INIT" });
    getUsers(getUserList());
  }, []);

  useEffect(() => {
    if (usersResponse) {
      console.log("users", usersResponse);
      dispatch(setUsersAction(usersResponse));
    }
  }, [usersResponse]);

    useEffect(() => {
    if (postsResponse) {
      console.log("posts", postsResponse);
      dispatch(setPostsAction(postsResponse));
    }
  }, [postsResponse]);

  function getPostDetails(){
     dispatch({ type: "POSTS_INIT" });
    getPosts(getPostsList());
  }

  const { users, posts } = state;

  console.log("state--->",state);
  return (
    <>
      <div>
           {posts?.loading ? "loading" : ""}
      <div>
        <h1>Posts</h1>
        <button onClick={getPostDetails}>Get Posts</button>
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            {posts?.data &&
              posts?.data?.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.views}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>

       <div>
           {users?.loading ? "loading" : ""}
      <div>
        <h1>Users</h1>
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>userName</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {users?.data &&
              users?.data?.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.userName}</td>
                  <td>{row.password}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
     
    </>
  );
}

export default App;
