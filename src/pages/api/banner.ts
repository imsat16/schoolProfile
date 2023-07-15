import { api, token } from "./api"

type addBanner = {
    img: FormData | undefined
    deskripsi: string
}

type editBanner = {
    id: number
    img: FormData | undefined
    deskripsi: string
}

export const getBanner = async () => {
  try {
    const res = await api.get(
      `/admin/banner`,
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

export const tambahBanner = async (banner:addBanner) => {
    try {
        const res = await api.post(`/admin/banner`, banner,
        {
            data: banner,
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

export const editBanner = async (banner:editBanner) => {
    try {
        const res = await api.put(`/admin/banner`, banner,
        {
            data: banner,
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

export const deleteBanner = async (id:any) => {
  try {
    const response = await api.delete(`/admin/banner?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 
    return response.data;
} catch (error:any) {
    throw new Error(error.message);
}
}

export const selectedBanner = async (banner:any) => {
    try {
        const res = await api.patchForm(`/admin/banner?ids=${banner}`, banner,
        {
            data: banner,
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

