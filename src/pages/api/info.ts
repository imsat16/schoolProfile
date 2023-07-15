import { api, token } from "./api";

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
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };