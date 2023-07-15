import { api, token } from "./api";

type addJurusan = {
    staff_id: number
    nama_jurusan: string
    deskripsi: string
    logo: FormData | undefined
}

type edJurusan = {
    id: number
    staff_id: number
    nama_jurusan: string
    deskripsi: string
}

type logoJurusan = {
  id:number
  foto: FormData | undefined
}

export const getJurusan = async () => {
    try {
      const res = await api.get(
        `/admin/jurusan`,
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

  export const tambahJurusan = async (jurusan:addJurusan) => {
    try {
        const res = await api.post(`/admin/jurusan`, jurusan,
        {
            data: jurusan,
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        }
        );
        return res.data
    } catch (error:any) {
        throw new Error(error.response.data.message);
    }
}

  export const editJurusan = async (jurusan:edJurusan) => {
    try {
        const res = await api.put(`/admin/jurusan`, jurusan,
        {
            data: jurusan,
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        }
        );
        return res.data
    } catch (error:any) {
        throw new Error(error.response.data.message);
    }
}

export const editLogoJurusan = async (jurusan:logoJurusan) => {
  try {
      const res = await api.patchForm(`/admin/jurusan`, jurusan,
      {
          data: jurusan,
          headers:{
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
          },
      }
      );
      return res.data
  } catch (error:any) {
      throw new Error(error.response.data.message);
  }
}


export const deleteJurusan = async (id: any) => {
  try {
      const response = await api.delete(`/admin/jurusan?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
      return response.data;
  } catch (error:any) {
      throw new Error(error.message);
  }
};