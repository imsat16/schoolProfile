import { api, token } from "./api";

type addStaff = {
    nama: string
    email: string
    no_telp: string
    jabatan: string
    foto: FormData | undefined
    status: string
}

type editStaff = {
    id: number,
    nama: string
    email: string
    no_telp: string
    jabatan: string
    status: string
}

type imageStaff = {
    id:number
    foto: FormData | undefined
}

export const getStaff = async () => {
    try {
      const res = await api.get(
        `/admin/staff`,
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

  export const tambahStaff = async (staff:addStaff) => {
    try {
        const res = await api.post(`/admin/staff`, staff,
        {
            data: staff,
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        }
        );
        return res.data
    } catch (error:any) {
      console.log("ini", error.response.data.message)
        throw new Error(error.response.data.message);
    }
}

  export const editStaff = async (staff:editStaff) => {
    try {
        const res = await api.put(`/admin/staff`, staff,
        {
            data: staff,
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

export const deleteStaff = async (id: any) => {
  try {
      const response = await api.delete(`/admin/staff?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
      return response.data;
  } catch (error:any) {
      throw new Error(error.message);
  }
};

export const editImageStaff = async (staff:imageStaff) => {
  try {
      const res = await api.patchForm(`/admin/staff`, staff,
      {
          data: staff,
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
