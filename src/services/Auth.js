import Client from "./api";



export const SignInUser = async (data) => {
  try {
    const res = await Client.post("api/token/obtain/", data);
    console.log(res.data)
    localStorage.setItem('token', res.data.access)
    localStorage.setItem('token-refresh', res.data.refresh)
    return res.data;
  } catch (error) {
    throw error;
  }
};
//need to find a way to grab user info along with token
//need to find a way to trigger refresh token - another function?
//refresh should be triggered every page (if no token, log in ; if token expired, refresh)
export const RegisterUser = async (data) => {
  try {
    const res = await Client.post("api/user/create/", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CheckSession = async () => {
  try {
    const res = await Client.get("/obtain/token");
    return res.data;
  } catch (error) {
    throw error;
  }
};
