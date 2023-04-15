import Client from "./api";

export const getAllProduce = async () => {
    try {
      const res = await Client.get("api/produce/");
      return res.data;
    } catch (error) {
      throw error;
    }
  }

export const getUsers = async () => {
    try {
      const res = await Client.get("api/users/");
      return res.data;
    } catch (error) {
      throw error;
    }
  }


  