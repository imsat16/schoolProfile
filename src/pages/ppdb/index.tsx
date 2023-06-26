import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Layout from "@/layouts";
import axios from "axios";
import moment from "moment";
import { InferGetServerSidePropsType } from "next";
import React from "react";
import * as Rsuite from "rsuite";
import { PPDB } from "../api";

const PPDBPage = ({ data, infoData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const info = infoData.data
  const prof = React.useRef(info.profile)
  const school = prof.current
  const jur = React.useRef(info.jurusan)
  const jurusan = jur.current
  console.log(jur)

  const [idJurusan, setIdJurusan]:any = React.useState<number>();
  const [namaPendaftar, setNamaPendaftar] = React.useState<string>('');
  const [nisn, setNisn] = React.useState<string>('');
  const [teleponPendaftar, setTeleponPendaftar] = React.useState<string>('');
  const [tanggalLahir, setTanggalLahir]:any = React.useState<number>();
  const [tempatLahir, setTempatLahir] = React.useState<string>('');
  const [jenisKelamin, setJenisKelamin] = React.useState<string>('');
  const [golDarah, setGolDarah] = React.useState<string>('');
  const [agama, setAgama] = React.useState<string>('');
  // const [statusTinggal, setStatusTinggal] = React.useState<string>('');
  const [asalSekolah, setAsalSekolah] = React.useState<string>('');
  const [alamatSekolah, setAlamatSekolah] = React.useState<string>('');
  const [tahunLulus, setTahunLulus]:any = React.useState<number>();
  const [namaWali, setNamaWali] = React.useState<string>('');
  const [teleponWali, setTeleponWali] = React.useState<string>('');
  const [pendidikanWali, setPendidikanWali] = React.useState<string>('');
  const [pekerjaanWali, setPekerjaanWali] = React.useState<string>('');
  const [instansiWali, setInstansiWali] = React.useState<string>('');
  const [penghasilanWali, setPenghasilanWali] = React.useState<string>('');
  const [alamatWali, setAlamatWali] = React.useState<string>('');

  const lj: any = data.data
  // console.log(listJur)

  const gndr = ["Laki - laki", "Perempuan"].map((item) => ({
    label: item,
    value: item,
  }));

  const gldr = ["A", "B", "AB", "0", "Tidak Tahu"].map((item) => ({
    label: item,
    value: item,
  }));

  const religion = ["Islam", "Kristen", "Protestan", "Hindu", "Budha", "Kong Hu Cu"].map((item) => ({
    label: item,
    value: item,
  }));

  const sTinggal = ["Ikut Orang Tua", "Kost", "Rumah Sendiri", "Ikut Saudara", "Lainnya"].map((item) => ({
    label: item,
    value: item,
  }));

  // const salary = ["< 1.500.000", "1.500.000 - 3.000.000", "3.000.000 - 5.000.000", "> 5.000.000"].map((item) => ({
  //   label: item,
  //   value: item,
  // }));
  
  const salary = [ 1500000, 3000000, 5000000].map((item) => ({
    label: item,
    value: item,
  }));

  const listJur = lj.map(
    (item: any) => (
      {
        label: item.nama_jurusan,
        value: item.id_jurusan
      }
    )
  )

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang telah disimpan
    const data = {
      id_jurusan: idJurusan,
      nama_pendaftar: namaPendaftar,
      nisn: nisn,
      telepon_pendaftar: teleponPendaftar,
      tanggal_lahir: tanggalLahir,
      tempat_lahir: tempatLahir,
      jenis_kelamin: jenisKelamin,
      gol_darah: golDarah,
      agama: agama,
      asal_sekolah: asalSekolah,
      alamat_sekolah: alamatSekolah,
      tahun_lulus: tahunLulus,
      nama_wali: namaWali,
      telepon_wali: teleponWali,
      pendidikan_wali: pendidikanWali,
      pekerjaan_wali: pekerjaanWali,
      instansi_wali: instansiWali,
      penghasilan_wali: Number(penghasilanWali),
      alamat_wali: alamatWali
    };
    console.log(data);
    PPDB.tambah({
      id_jurusan: idJurusan,
      nama_pendaftar: namaPendaftar,
      nisn: nisn,
      telepon_pendaftar: teleponPendaftar,
      tanggal_lahir: tanggalLahir,
      tempat_lahir: tempatLahir,
      jenis_kelamin: jenisKelamin,
      gol_darah: golDarah,
      agama: agama,
      asal_sekolah: asalSekolah,
      alamat_sekolah: alamatSekolah,
      tahun_lulus: tahunLulus,
      nama_wali: namaWali,
      telepon_wali: teleponWali,
      pendidikan_wali: pendidikanWali,
      pekerjaan_wali: pekerjaanWali,
      instansi_wali: instansiWali,
      penghasilan_wali: penghasilanWali,
      alamat_wali: alamatWali
    })
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   console.log('Data artikel:', { title, content, selectedImage });

  //   PPDB.tambah({
  //     //seluruh
  //   })

  //   // const a = {
  //   //   gambar: selectedImage,
  //   //   judul: title,
  //   //   isi_artikel: content,
  //   //   kategori_id: 1
  //   // }
  //   // console.log(a)
  // };
  return (
    <Layout logo={school.logo} vocation={jurusan}>
      <div className="p-4 py-10 bg-gray-300 md:p-10 lg:p-20">
        <form 
          className="grid gap-5 p-4 bg-white rounded-lg md:p-10 lg:p-20"
          onSubmit={handleSubmit}
        >
          <div className="">
            <h3>Data Pribadi</h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <Input 
                label="Nama Lengkap" 
                type="text" 
                value={namaPendaftar} 
                onChange={(e) => setNamaPendaftar(e.target.value)}
              />
              <Input 
                label="Nisn" 
                type="number" 
                value={nisn} 
                onChange={(e) => setNisn(e.target.value)}
              />
              <Input 
                label="Tempat Lahir" 
                type="text" 
                value={tempatLahir} 
                onChange={(e) => setTempatLahir(e.target.value)}
              />
              <div className="w-full min-w-xs form-control">
                <label className="label">
                  <span className="label-text">Tanggal Lahir</span>
                </label>
                <Rsuite.DatePicker
                  format="dd MMMM yyyy"
                  className="mt-2 text-black"
                  onChange={(e: any) =>
                    setTanggalLahir(moment(e, "dd MMMM yyyy").unix())
                  }
                  placement="bottom"
                />
              </div>

              <div className="flex gap-3">
                <div className="w-full min-w-xs form-control">
                  <label className="label">
                    <span className="label-text">Jenis Kelamin</span>
                  </label>
                  <Rsuite.InputPicker 
                    data={gndr} 
                    className="mt-2" 
                    value={jenisKelamin}
                    onChange={(e) => setJenisKelamin(e)}
                  />
                </div>
                <div className="w-full min-w-xs form-control">
                  <label className="label">
                    <span className="label-text">Golongan Darah</span>
                  </label>
                  <Rsuite.InputPicker 
                    data={gldr} 
                    className="mt-2" 
                    value={golDarah} 
                    onChange={(e) => setGolDarah(e)}
                  />
                </div>
              </div>

              <div className="w-full min-w-xs form-control">
                <label className="label">
                  <span className="label-text">Agama</span>
                </label>
                <Rsuite.InputPicker 
                  data={religion} 
                  className="mt-2" 
                  value={agama} 
                  onChange={(e) => setAgama(e)}
                />
              </div>
              
              {/* <div className="w-full min-w-xs form-control">
                <label className="label">
                  <span className="label-text">Status Tinggal</span>
                </label>
                <Rsuite.InputPicker 
                  data={sTinggal} 
                  className="mt-2" 
                  value={statusTinggal} 
                  onChange={(e) => setStatusTinggal(e.target.value)}
                />
              </div> */}

              <Input 
                label="No Whatsapp" 
                type="number" 
                value={teleponPendaftar} 
                onChange={(e) => setTeleponPendaftar(e.target.value)} 
              />
            </div>
          </div>
          <div className="">
            <h3>Latar Belakang Sekolah</h3>
            <div className="grid gap-3 lg:grid-cols-3">
              <Input 
                label="Asal Sekolah" 
                type="text" 
                value={asalSekolah} 
                onChange={(e) => setAsalSekolah(e.target.value)}
              />
              <Input 
                label="Tahun Lulus" 
                type="text" 
                value={tahunLulus} 
                onChange={(e) => setTahunLulus(Number(e.target.value))}
              />
              <Textarea
                label="Alamat Sekolah"
                className="col-span-4"
                value={alamatSekolah} 
                onChange={(e) => setAlamatSekolah(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <h3>Data Orang Tua</h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <Input 
                label="Nama Orang Tua" 
                type="text" 
                value={namaWali} 
                onChange={(e) => setNamaWali(e.target.value)}
              />
              <Input 
                label="No Telp Orang Tua" 
                type="number" 
                value={teleponWali} 
                onChange={(e) => setTeleponWali(e.target.value)}
              />
              <Input 
                label="Pendidikan" 
                type="text" 
                value={pendidikanWali} 
                onChange={(e) => setPendidikanWali(e.target.value)}
              />
              <Input 
                label="Pekerjaan" 
                type="text" 
                value={pekerjaanWali} 
                onChange={(e) => setPekerjaanWali(e.target.value)}
              />
              <Input 
                label="Instansi" 
                type="text" 
                value={instansiWali} 
                onChange={(e) => setInstansiWali(e.target.value)}
              />
              <div className="w-full min-w-xs form-control">
                <label className="label">
                  <span className="label-text">Penghasilan Wali</span>
                </label>
                <Rsuite.InputPicker 
                  data={salary} 
                  className="mt-2" 
                  value={penghasilanWali} 
                  onChange={(e) => setPenghasilanWali(e)}
                />
              </div>
              <div className="md:col-span-2 lg:col-span-2">
                <Textarea
                  label="Alamat Orang Tua"
                  value={alamatWali} 
                  onChange={(e) => setAlamatWali(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="">
            <h3>Jurusan</h3>
            <div className="">
              <div className="w-full min-w-xs form-control">
                <label className="label">
                  <span className="label-text">Pilih Jurusan</span>
                </label>
                <Rsuite.InputPicker 
                  data={listJur} 
                  className="mt-2" 
                  value={idJurusan} onChange={(e) => setIdJurusan(Number(e))}
                  />
              </div>
            </div>
          </div>
          {/* <div className="bg-[#252525] text-white hover:bg-black/80 btn"> */}
            <button
              onSubmit={handleSubmit} 
              type="submit"
              className="bg-[#252525] text-white hover:bg-black/80 btn"
            >
              Kirim Form Pendaftaran
            </button>
          {/* </div> */}
        </form>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await axios.get(`http://localhost:8000/api/jurusan`);
    const sch = await axios.get(`http://localhost:8000/api/sekolah`);

    return {
      props: {
        data: res.data,
        infoData: sch.data
      }
    }
  } catch (error) {
    return {
      props: {
        data: null, // Atau berikan nilai default jika permintaan gagal
        infoData: null
      },
    };
  }
}

export default PPDBPage;
