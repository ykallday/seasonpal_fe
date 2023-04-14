import Client from "./api";

export const CreateNote = async (data) => {
    try {
      const res = await Client.post("api/notes/", data);
      console.log(data)
      return res.data;
    } catch (error) {
      throw error;
    }
  }

