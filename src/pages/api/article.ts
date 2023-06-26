import { api } from "./api"

type addArticle = {
    judul : string
    isi_artikel: string
    kategori_id: number | undefined
    gambar: FormData | null
}

export const tambahArtikel = async (artikel:addArticle) => {
    try {
        const res = await api.post(`/admin/artikel`, artikel,
        {
            data: artikel,
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODcyMjUzNTUsIm5iZiI6MTY4NzIyNTM1NSwianRpIjoiY2RiOTAxNWQtNmRjMy00ZDA1LWE2NTktNWRhZjVkZDgxYTM2IiwiZXhwIjoxNjg3ODMwMTU1LCJpZGVudGl0eSI6IntcImlkXCI6IDEsIFwidW5hbWVcIjogXCJrZWx2aW5kbTcxMDJAZ21haWwuY29tXCIsIFwidGltZVwiOiAxNjg3MjI1MzU1Ljc4NTc2NH0iLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.e_bZmiKjzJ_chAJFQZ1Dp2g_Fg3T8qg7b425QvyZWa8`
            },
            // headers:{
            //     Authorization: `Bearer ${token}`
            // },
        }
        );
        return res.data
    } catch (error:any) {
        throw new Error(error.message);
    }
}

interface EA {
    id: number,
    judul: string,
    isi_artikel: string,
    kategori_id: number,
    gambar: FormData | null
}

export const editArtikel = async (edit: EA) => {
    try {
      const res = await api.put(`/admin/artikel`, edit, {
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