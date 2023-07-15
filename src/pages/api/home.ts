import { api, token } from "./api";

export const getHome = async () => {
    try {
      const res = await api.get(
        `/sekolah`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };