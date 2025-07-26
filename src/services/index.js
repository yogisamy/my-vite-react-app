export const getUserList = () =>{
    return {
      url: `http://localhost:3333/users`,
      method: "GET",
    }
}

export const getPostsList = () =>{
    return {
      url: `http://localhost:3333/posts`,
      method: "GET",
    }
}