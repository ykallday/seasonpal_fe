import Client from "./api";

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("api/token/obtain/", data);
    localStorage.setItem('token', res.data.access)
    localStorage.setItem('token_refresh', res.data.refresh)
    return res.data;
  } catch (error) {
    return (alert("Sorry, that password's incorrect - please try again!"));
  }
};

export const assignUser = async (data) => {
  try {
    let user = {}
    const res = await Client.get("api/users");
    const userArray = Array.from(res.data)
    userArray.map((item) => {
      if (item.username == data.username) {
        user.id = item.id
        user.username = item.username
        user.password = item.password
        user.location = item.location
      }
      return (user)
    })
    return user;
  } catch (error) {
    throw error;
  }
};

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("api/user/create/", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  if (localStorage.token || localStorage.token_refresh) {
    return true;
  } else {
    return false;
  }
}