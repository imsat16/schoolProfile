import { api } from "./api";

type infoSekolah = {
    nama_sekolah : string
    deskripsi_sekolah: string
    logo_sekolah?: FormData | undefined
}

export const editArtikel = async (edit: infoSekolah) => {
    try {
      const res = await api.put(`/admin/sekolah`, edit, {
        data: edit,
        headers: {
        'Content-Type': 'multipart/form-data',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODcyMjUzNTUsIm5iZiI6MTY4NzIyNTM1NSwianRpIjoiY2RiOTAxNWQtNmRjMy00ZDA1LWE2NTktNWRhZjVkZDgxYTM2IiwiZXhwIjoxNjg3ODMwMTU1LCJpZGVudGl0eSI6IntcImlkXCI6IDEsIFwidW5hbWVcIjogXCJrZWx2aW5kbTcxMDJAZ21haWwuY29tXCIsIFwidGltZVwiOiAxNjg3MjI1MzU1Ljc4NTc2NH0iLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.e_bZmiKjzJ_chAJFQZ1Dp2g_Fg3T8qg7b425QvyZWa8`,
        },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };