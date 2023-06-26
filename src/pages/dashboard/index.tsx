import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import DashboardLayout from '@/layouts/DashboardLayout'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import * as Rsuite from 'rsuite'
import { INFO } from '../api'

const Dashboard = () => {
  const [info, setInfo]: any = React.useState([]);
  const [nama, setNama] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [logo, setLogo] = React.useState();
  const [selectedImage, setSelectedImage] = React.useState(logo)
  const [previewImage, setPreviewImage] = React.useState("")

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/admin/sekolah`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODcyMjUzNTUsIm5iZiI6MTY4NzIyNTM1NSwianRpIjoiY2RiOTAxNWQtNmRjMy00ZDA1LWE2NTktNWRhZjVkZDgxYTM2IiwiZXhwIjoxNjg3ODMwMTU1LCJpZGVudGl0eSI6IntcImlkXCI6IDEsIFwidW5hbWVcIjogXCJrZWx2aW5kbTcxMDJAZ21haWwuY29tXCIsIFwidGltZVwiOiAxNjg3MjI1MzU1Ljc4NTc2NH0iLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.e_bZmiKjzJ_chAJFQZ1Dp2g_Fg3T8qg7b425QvyZWa8`
          },
        });
        setInfo(response.data.data);
        setNama(response.data.data.nama);
        setDeskripsi(response.data.data.deskripsi);
        setLogo(response.data.data.logo);
        // console.log(response.data.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData()
  }, [])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    console.log(file)
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };

  const handleContentChange = (e: any) => {
    setDeskripsi(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      insertBoldTag;
    }
  };

  const insertBoldTag = (e: any) => {
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    const newContent =
      deskripsi.substring(0, selectionStart) +
      '**' +
      deskripsi.substring(selectionStart, selectionEnd) +
      '**' +
      deskripsi.substring(selectionEnd);
      setDeskripsi(newContent);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log('Data artikel:', { title, content, selectedImage });

    const a = {
      nama: nama,
      deskripsi: deskripsi,
      logo: selectedImage,
    }

    

    INFO.editArtikel({
      nama_sekolah: nama,
      deskripsi_sekolah: deskripsi,
      logo_sekolah: selectedImage,
    }).then(
      res => console.log(res)
    )

    console.log(a)
    // uploadImage()
    // ARTICLE.tambahArtikel({
    //   gambar: selectedImage,
    //   judul: title,
    //   isi_artikel: content,
    //   kategori_id: 1
    // })
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="">
        <Rsuite.ButtonToolbar>
          <Rsuite.Button onClick={handleOpen}> Informasi Sekolah</Rsuite.Button>
        </Rsuite.ButtonToolbar>

        <Rsuite.Modal open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <Rsuite.Modal.Header>
              <Rsuite.Modal.Title>Info Sekolah</Rsuite.Modal.Title>
            </Rsuite.Modal.Header>
            <Rsuite.Modal.Body>
              <div className="h-full bg-red-300 lg:w-1/4 -order-1 lg:order-none ">
                <div className="relative bg-black dnd aspect-w-16 aspect-h-9 ">
                  <img src={previewImage ? previewImage : logo} className='object-cover rounded-xl' alt="" />
                  <div className="w-full h-full bg-black " />
                  <div className="flex items-center justify-center w-full wb">
                    <div className="w-11/12 border-4 border-white border-dashed rounded-2xl h-5/6" />
                  </div>
                  <div className='flex flex-col items-center justify-center text'>
                    <p>Unggah Logo baru</p>
                    <span className='text-base font-normal'>atau drag n drop gambar kesini</span>
                  </div>
                  <input type="file" className='w-full h-full opacity-0' onChange={handleImageUpload} />
                </div>
              </div>
              <Input
                label='Nama Sekolah'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <Textarea
                value={deskripsi}
                label='Konten Artikel:'
                onChange={handleContentChange}
                onKeyDown={handleKeyDown}
              />
              {/* <Rsuite.Placeholder.Paragraph /> */}
            </Rsuite.Modal.Body>
            <Rsuite.Modal.Footer>
              <Rsuite.Button type='submit' onClick={handleClose} appearance="primary">
                Ok
              </Rsuite.Button>
              <Rsuite.Button onClick={handleClose} appearance="subtle">
                Cancel
              </Rsuite.Button>
            </Rsuite.Modal.Footer>
          </form>
        </Rsuite.Modal>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard