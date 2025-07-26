export const setUsersAction = (response) => {
  if (!response) return { type: "USERS_INIT" };

  if (response.error) {
    return { type: "USERS_FAILURE", payload: response.error };
  }

  return { type: "USERS_SUCCESS", payload: response.data };
};