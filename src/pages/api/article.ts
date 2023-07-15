import { api, token } from "./api"

type addArticle = {
    judul : string
    isi_artikel: string
    kategori_id: number | undefined
    gambar: FormData | null
}

export const getArtikel = async () => {
  try {
    const res = await api.get(
      `/admin/artikel`,
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

export const tambahArtikel = async (artikel:addArticle) => {
    try {
        const res = await api.post(`/admin/artikel`, artikel,
        {
            data: artikel,
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        }
        );
        return res.data
    } catch (error:any) {
      // console.log("ini", error.response.data.message)
        throw new Error(error.response.data.message);
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
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  export const deleteArtikel = async (id: any) => {
    try {
        const response = await api.delete(`/admin/artikel?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        return response.data;
    } catch (error:any) {
        throw new Error(error.message);
    }
  };

