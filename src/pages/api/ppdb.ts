import { api, token } from "./api";

export const getRegistered = async (id:number) => {
    try {
      const res = await api.get(
        `/admin/ppdb?id=${id}`,
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