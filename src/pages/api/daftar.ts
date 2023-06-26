import { api } from "./api"

export type daftar = {
    id_jurusan: number
    nama_pendaftar: string //
    nisn: string //
    telepon_pendaftar: string //
    tanggal_lahir: number //
    tempat_lahir: string //
    jenis_kelamin: string //
    gol_darah: string //
    agama: string //
    asal_sekolah: string //
    alamat_sekolah: string //
    tahun_lulus: number //
    nama_wali: string //
    telepon_wali: string //
    pendidikan_wali: string //
    pekerjaan_wali: string //
    instansi_wali: string //
    penghasilan_wali: string //
    alamat_wali: string //
}

export const tambah = async (pendaftar:daftar) => {
    try {
        const res = await api.post(`/ppdb`, pendaftar, {
            data: pendaftar,
            // headers:{
            //     Authorization: `Bearer ${token}`
            // },
        });
        return res.data
    } catch (error:any) {
        throw new Error(error.message);
    }
}