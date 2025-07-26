
export const setPostsAction = (response) => {
  if (!response) return { type: "POSTS_INIT" };

  if (response.error) {
    return { type: "POSTS_FAILURE", payload: response.error };
  }

  return { type: "POSTS_SUCCESS", payload: response.data };
};