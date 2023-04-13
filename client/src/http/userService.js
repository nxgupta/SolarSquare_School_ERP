import api from "./axiosPublic";

const register = async (userData) => {
  const resposne = await api.post("/user/register", userData);

  return resposne.data.user;
};

const login = async (userData) => {
  const resposne = await api.post("/user/login", userData);

  if (resposne.data) {
    localStorage.setItem("user", JSON.stringify(resposne.data.user));
    localStorage.setItem("token", JSON.stringify(resposne.data.token));
  }
  return resposne.data;
};



const getUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.get(`/user/${userId}`, config);

  return response.data.user;
};

const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.get("/user", config);

  return response.data.users;
};

const userService = {
  register,
  login,
  getUser,
  getUsers,
};

export default userService;