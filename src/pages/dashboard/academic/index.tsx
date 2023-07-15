import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import DashboardLayout from '@/layouts/DashboardLayout'
import { JURUSAN, STAFF } from '@/pages/api'
import { editStaff } from '@/pages/api/staff'
import AddStaffView from '@/view/academic/addStaff'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import * as Rsuite from 'rsuite'
const AcademicDashboard = () => {
  const [jurusan, setJurusan]: any = React.useState([])
  const [staff, setStaff]: any = React.useState([])

  const [staffName, setStaffName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [jabatan, setJabatan] = React.useState("");
  const [status, setStatus] = React.useState("");

  const [selectedItem, setSelectedItem]: any = React.useState([])

  const [staffId, setStaffId] = React.useState();
  const [namaJurusan, setNamaJurusan] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");

  const [selectedImage, setSelectedImage] = React.useState()
  const [previewImage, setPreviewImage] = React.useState("")

  const [message, setMessage] = React.useState("")
  const [infoColor, setInfoColor] = React.useState("")

  const [openStaff, setOpenStaff] = React.useState(false);
  const handleOpenStaff = () => setOpenStaff(true);
  const handleCloseStaff = () => setOpenStaff(false);

  const [openEditStaff, setOpenEditStaff] = React.useState(false);
  const handleOpenEditStaff = () => setOpenEditStaff(true);
  const handleCloseEditStaff = () => setOpenEditStaff(false);

  const [openJurusan, setOpenJurusan] = React.useState(false);
  const handleOpenJurusan = () => setOpenJurusan(true);
  const handleCloseJurusan = () => setOpenJurusan(false);

  const [openEditJurusan, setOpenEditJurusan] = React.useState(false);
  const handleOpenEditJurusan = () => setOpenEditJurusan(true);
  const handleCloseEditJurusan = () => setOpenEditJurusan(false);


  const activity = ["AKTIF", "NONAKTIF"].map((item) => ({
    label: item,
    value: item,
  }));

  const getJurusan = () => {
    JURUSAN.getJurusan()
      .then(
        (res) => {
          setJurusan(res.data)
          console.log(res.data)
        }
      )
  }

  const getStaff = () => {
    STAFF.getStaff()
      .then(
        (res) => {
          setStaff(res.data)
          console.log(res.data)
        }
      )
  }

  React.useEffect(() => {
    getJurusan()
    getStaff()
  }, [])

  const handleSaveStaff = () => {
    STAFF.tambahStaff({
      nama: staffName,
      email: email,
      no_telp: phone,
      jabatan: jabatan,
      status: status,
      foto: selectedImage
    }).then(
      (res: any) => {
        getStaff()
        handleCloseStaff()
        setInfoColor("bg-green-300")
        setStaffName("")
        setEmail("")
        setPhone("")
        setJabatan("")
        setStatus("")
        setSelectedImage(undefined)
        setPreviewImage("")
        setMessage(res.message)
      }
    ).catch(
      err => {
        console.error(err)
        setMessage(err.message)
        setInfoColor("bg-red-300")
      }
    )
  }

  const handleEditStaff = () => {
    STAFF.editImageStaff({
      id: Number(selectedItem.staff_id),
      foto: selectedImage ? selectedImage : selectedItem.foto
    })
    STAFF.editStaff({
      id: Number(selectedItem.staff_id),
      nama: staffName ? staffName : selectedItem.nama,
      email: email ? email : selectedItem.email,
      no_telp: phone ? phone : selectedItem.no_telp,
      jabatan: jabatan ? jabatan : selectedItem.jabatan,
      status: status ? status : selectedItem.status,
    }).then(
      (res: any) => {
        getStaff()
        handleCloseEditStaff()
        setInfoColor("bg-green-300")
        setStaffName("")
        setEmail("")
        setPhone("")
        setJabatan("")
        setStatus("")
        setTimeout(() => {
          setSelectedImage(undefined)
          setPreviewImage("")
        }, 2000);
        setMessage(res.message)
      }
    ).catch(
      err => {
        console.error(err)
        setMessage(err.message)
        setInfoColor("bg-red-300")
      }
    )
  }

  const handleDeleteStaff = (id:any) => {
    STAFF.deleteStaff(
      id
    ).then(
      (res: any) => {
        getStaff()
        handleCloseEditStaff()
        setSelectedItem([])
        setInfoColor("bg-green-300")
        setMessage(res.message)
      }
    ).catch(
      err => {
        console.error(err)
        setMessage(err.message)
        setInfoColor("bg-red-300")
      }
    )

    // console.log("si", selectedItem?.staff_id)
  }

  const handleSaveJurusan = () => {
    JURUSAN.tambahJurusan({
      staff_id: Number(staffId),
      nama_jurusan: namaJurusan,
      deskripsi: deskripsi,
      logo: selectedImage
    }).then(
      (res: any) => {
        getJurusan()
        handleCloseJurusan()
        setInfoColor("bg-green-300")
        setStaffName("")
        setEmail("")
        setPhone("")
        setJabatan("")
        setStatus("")
        setSelectedImage(undefined)
        setPreviewImage("")
        setMessage(res.message)
      }
    ).catch(
      err => {
        console.error(err)
        setMessage(err.message)
        setInfoColor("bg-red-300")
      }
    )

    const a = {
      staff_id: Number(staffId),
      nama_jurusan: namaJurusan,
      deskripsi: deskripsi,
      foto: selectedImage
    }

    console.log(a)
  }

  const handleEditJurusan = (e: any) => {
    e.preventDefault()
    const img = {
      id: Number(selectedItem?.id_jurusan),
      foto: selectedImage ? selectedImage : selectedItem.logo
    }
    const jur = {
      id: Number(selectedItem?.id_jurusan),
      staff_id: Number(staffId ? staffId : selectedItem?.id_staff),
      nama_jurusan: namaJurusan ? namaJurusan : selectedItem?.nama_jurusan,
      deskripsi: deskripsi ? deskripsi : selectedItem?.deskripsi,
    }
    console.log({
      img,
      jur
    })
    JURUSAN.editLogoJurusan({
      id: Number(selectedItem?.id_jurusan),
      foto: selectedImage? selectedImage : selectedItem.logo
    })
    JURUSAN.editJurusan({
      id: Number(selectedItem?.id_jurusan),
      staff_id: Number(staffId ? staffId : selectedItem?.id_staff),
      nama_jurusan: namaJurusan ? namaJurusan : selectedItem?.nama_jurusan,
      deskripsi: deskripsi ? deskripsi : selectedItem?.deskripsi,
    }).then(
      (res: any) => {
        getJurusan()
        handleCloseEditJurusan()
        setInfoColor("bg-green-300")
        setStaffName("")
        setEmail("")
        setPhone("")
        setJabatan("")
        setStatus("")
        setSelectedImage(undefined)
        setPreviewImage("")
        setMessage(res.message)
      }
    ).catch(
      err => {
        console.error(err)
        setMessage(err.message)
        setInfoColor("bg-red-300")
      }
    )
  }

  const handleDeleteJurusan = (id: any) => {
    JURUSAN.deleteJurusan(
      id
    ).then(
      (res: any) => {
        getJurusan()
        handleCloseEditJurusan()
        setInfoColor("bg-green-300")
        setStaffName("")
        setEmail("")
        setPhone("")
        setJabatan("")
        setStatus("")
        setSelectedImage(undefined)
        setPreviewImage("")
        setMessage(res.message)
      }
    ).catch(
      err => {
        console.error(err)
        setMessage(err.message)
        setInfoColor("bg-red-300")
      }
    )
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    console.log(file)
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };

  const stf = staff.map(
    (_: any) => ({ label: _.nama, value: _.staff_id })
  );

  setTimeout(() => {
    if (message) {
      setMessage("")
    }
  }, 3000);

  const [queryStaff, setQueryStaff] = React.useState('');
  const [resultsStaff, setResultsStaff] = React.useState([]);
  const [queryJurusan, setQueryJurusan] = React.useState('');
  const [resultsJurusan, setResultsJurusan] = React.useState([]);

  React.useEffect(() => {
    const searchResults = staff?.filter((item: any) =>
      item?.nama?.toLowerCase().includes(queryStaff?.toLowerCase())
    );
    console.log(searchResults)
    setResultsStaff(searchResults);
  }, [queryStaff, staff]);

  React.useEffect(() => {
    const searchResults = jurusan?.filter((item: any) =>
      item?.nama_jurusan?.toLowerCase().includes(queryJurusan?.toLowerCase())
    );
    console.log(searchResults)
    setResultsJurusan(searchResults);
  }, [queryJurusan, jurusan]);

  React.useEffect(() => {
    console.log(selectedItem)
  }, [selectedItem])

  return (
    <DashboardLayout>
      <Head>
        <title>Akademik</title>
      </Head>
      {
        message && (
          <div className={`fixed p-2 px-4 ${infoColor} rounded-lg right-3`} role="alert">
            {message}
          </div>
        )
      }
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>Akademik</h2>
          <div className="flex items-center gap-4">
            <div onClick={handleOpenStaff} className="p-2 font-medium text-white bg-yellow-500 rounded-lg cursor-pointer">
              Tambah Staff
            </div>
            <div onClick={handleOpenJurusan} className="p-2 font-medium text-white bg-blue-500 rounded-lg cursor-pointer">
              Tambah Jurusan
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={"/dashboard/academic/jurusan"} className="rounded-xl hover:no-underline p-2 min-w-[30%] lg:min-w-[15%] bg-gray-500 hover:bg-gray-600 text-[#f2f2f2] hover:text-[#f2f2f2] font-medium">
            <p className='text-lg font-medium'>Jurusan</p>
            <h3>{jurusan.length}</h3>
          </Link>
          <Link href={"/dashboard/academic/staff"} className="rounded-xl hover:no-underline p-2 min-w-[30%] lg:min-w-[15%] bg-gray-500 hover:bg-gray-600 text-[#f2f2f2] hover:text-[#f2f2f2] font-medium">
            <p className='text-lg font-medium'>Staff</p>
            <h3>{staff.length}</h3>
          </Link>
        </div>

        <div className="flex flex-col gap-5 md:flex-row lg:max-h-[70vh]">
          <div className="flex flex-col w-full gap-3 p-3 bg-white rounded-lg max-h-[50vh] lg:max-h-none">
            <div className="flex items-center justify-between">
              <h3>List Jurusan</h3>
              <Link href={"/dashboard/academic/jurusan"} className="cursor-pointer hover:no-underline">Show all</Link>
            </div>
            <div className="">
              <Input
                value={queryJurusan}
                onChange={e => setQueryJurusan(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-5 overflow-y-auto'>
              {resultsJurusan.map((_: any, i: any) => {
                return (
                  <div className="flex gap-4 max-h-[10rem]" key={i}>
                    <div className="max-w-[20%] w-full ">
                      <div className="aspect-w-1 aspect-h-1">
                        <img src={_.logo} className='object-cover' alt="" />
                      </div>
                    </div>
                    <div className="flex justify-between w-full -translate-y-2">
                      <div className="">
                        <h4>{_.nama_jurusan}</h4>
                      </div>
                      <div className="flex items-end gap-3 ">
                        <div onClick={() => {
                          handleOpenEditJurusan()
                          setSelectedItem(_)
                        }} className="p-2 text-white bg-blue-400 rounded-md cursor-pointer">Edit</div>
                        <div 
                        onClick={()=>{
                          handleDeleteJurusan(_.id_jurusan)
                        }}
                        className="p-2 text-white bg-red-400 rounded-md cursor-pointer">Delete</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col w-full gap-3 p-3 bg-white rounded-lg max-h-[50vh] lg:max-h-none">
            <div className="flex items-center justify-between">
              <h3>List Staff</h3>
              <Link href={"/dashboard/academic/staff"} className="cursor-pointer hover:no-underline">Show all</Link>
            </div>
            <div className="">
              <Input
                value={queryStaff}
                onChange={e => setQueryStaff(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-5 overflow-y-auto'>
              {resultsStaff.map((_: any, i: any) => (
                <div className="flex gap-4 max-h-[10rem]" key={i}>
                  <div className="max-w-[20%] w-full ">
                    <div className="aspect-w-1 aspect-h-1">
                      <img src={_.foto} className='object-cover' alt="" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between w-full -translate-y-2">
                    <div className="">
                      <h4>{_.nama}</h4>
                      <div className="flex flex-col">
                        <span>Jabatan : {_.jabatan}</span>
                        <span>No Telp : {_.no_telp}</span>
                        <span>Email : {_.email}</span>
                        <span>Status : {_.status}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div onClick={() => {
                        handleOpenEditStaff()
                        setSelectedItem(_)
                      }} className="p-2 text-white bg-blue-400 rounded-md cursor-pointer">Edit</div>
                      <div onClick={() => {
                        handleDeleteStaff(_.staff_id)
                      }} className="p-2 text-white bg-red-400 rounded-md cursor-pointer">Delete</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Rsuite.Modal size='md' open={openStaff} onClose={handleCloseStaff}>
          <Rsuite.Modal.Header>
            <Rsuite.Modal.Title>Tambah Staff</Rsuite.Modal.Title>
          </Rsuite.Modal.Header>
          <form onSubmit={handleSaveStaff}>
            <Rsuite.Modal.Body>
              <div className="flex gap-3">
                <div className="w-1/3">
                  <div className="relative dnd aspect-w-3 aspect-h-3 ">
                    <img src={previewImage} className='object-cover rounded-xl' alt="" />
                    <div className="w-full h-full bg-black " />
                    <div className="flex items-center justify-center w-full wb">
                      <div className="w-11/12 border-4 border-white border-dashed rounded-2xl h-5/6" />
                    </div>
                    <div className='flex flex-col items-center justify-center text'>
                      <p>Unggah Foto</p>
                      <span className='text-base font-normal'>atau drag n drop gambar kesini</span>
                    </div>
                    <input type="file" className='w-full h-full opacity-0' onChange={handleImageUpload} required />
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-3">
                    <Input
                      label='Nama'
                      value={staffName}
                      onChange={(e) => setStaffName(e.target.value)}
                    />
                    <Input
                      label='Jabatan'
                      value={jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Input
                      label='No Telepon'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      label='Email'
                      value={email}
                      type='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full min-w-xs form-control">
                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                    <Rsuite.InputPicker
                      data={activity}
                      className="mt-2"
                      value={status}
                      onChange={(e) => setStatus(e)}
                    />
                  </div>
                </div>
              </div>
            </Rsuite.Modal.Body>
            <Rsuite.Modal.Footer>
              <Rsuite.Button onClick={handleSaveStaff} appearance="primary">
                Ok
              </Rsuite.Button>
              <Rsuite.Button onClick={handleCloseStaff} appearance="subtle">
                Cancel
              </Rsuite.Button>
            </Rsuite.Modal.Footer>
          </form>
        </Rsuite.Modal>

        <Rsuite.Modal size='md' open={openJurusan} onClose={handleCloseJurusan}>
          <Rsuite.Modal.Header>
            <Rsuite.Modal.Title>Tambah Jurusan</Rsuite.Modal.Title>
          </Rsuite.Modal.Header>
          <form onSubmit={handleSaveJurusan}>
            <Rsuite.Modal.Body>
              <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                <div className="w-1/2 md:w-1/3">
                  <div className="relative dnd aspect-w-3 aspect-h-3 ">
                    <img src={previewImage} className='object-cover rounded-xl' alt="" />
                    <div className="w-full h-full bg-black " />
                    <div className="flex items-center justify-center w-full wb">
                      <div className="w-11/12 border-4 border-white border-dashed rounded-2xl h-5/6" />
                    </div>
                    <div className='flex flex-col items-center justify-center text'>
                      <p>Unggah Foto</p>
                      <span className='text-base font-normal'>atau drag n drop gambar kesini</span>
                    </div>
                    <input type="file" className='w-full h-full opacity-0' onChange={handleImageUpload} />
                  </div>
                </div>
                <div className="w-4/5 md:w-full">
                  <div className="gap-3 md:flex">
                    <div className="flex items-center w-full">
                      <Rsuite.SelectPicker onChange={(e: any) => setStaffId(e)} label="Staff" data={stf} className='w-full' />
                    </div>
                    <Input
                      label='Nama Jurusan'
                      value={namaJurusan}
                      onChange={(e) => setNamaJurusan(e.target.value)}
                    />
                  </div>
                  <Textarea
                    label='Deskripsi'
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                </div>
              </div>
            </Rsuite.Modal.Body>
            <Rsuite.Modal.Footer>
              <Rsuite.Button onClick={handleSaveJurusan} appearance="primary">
                Ok
              </Rsuite.Button>
              <Rsuite.Button onClick={handleCloseJurusan} appearance="subtle">
                Cancel
              </Rsuite.Button>
            </Rsuite.Modal.Footer>
          </form>
        </Rsuite.Modal>

        <Rsuite.Modal size='md' open={openEditStaff} onClose={handleCloseEditStaff}>
          <Rsuite.Modal.Header>
            <Rsuite.Modal.Title>Edit Staff</Rsuite.Modal.Title>
          </Rsuite.Modal.Header>
          <form onSubmit={() => { console.log("belum dibuat handle edit staff") }}>
            <Rsuite.Modal.Body>
              <div className="flex gap-3">
                <div className="w-1/3">
                  <div className="relative dnd aspect-w-3 aspect-h-3 ">
                    <img src={previewImage ? previewImage : selectedItem?.foto} className='object-cover rounded-xl' alt="" />
                    <div className="w-full h-full bg-black " />
                    <div className="flex items-center justify-center w-full wb">
                      <div className="w-11/12 border-4 border-white border-dashed rounded-2xl h-5/6" />
                    </div>
                    <div className='flex flex-col items-center justify-center text'>
                      <p>Unggah Foto</p>
                      <span className='text-base font-normal'>atau drag n drop gambar kesini</span>
                    </div>
                    <input type="file" className='w-full h-full opacity-0' onChange={handleImageUpload} required />
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-3">
                    <Input
                      label='Nama'
                      value={staffName !== "" ? staffName : selectedItem?.nama}
                      onChange={(e) => setStaffName(e.target.value)}
                    />
                    <Input
                      label='Jabatan'
                      value={jabatan !== "" ? jabatan : selectedItem?.jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Input
                      label='No Telepon'
                      value={phone !== "" ? phone : selectedItem?.no_telp}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      label='Email'
                      value={email !== "" ? email : selectedItem.email}
                      type='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full min-w-xs form-control">
                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                    <Rsuite.InputPicker
                      data={activity}
                      className="mt-2"
                      value={status ? status : selectedItem.status}
                      onChange={(e) => setStatus(e)}
                    />
                  </div>
                </div>
              </div>
            </Rsuite.Modal.Body>
            <Rsuite.Modal.Footer>
              <Rsuite.Button onClick={handleEditStaff} appearance="primary">
                Ok
              </Rsuite.Button>
              <Rsuite.Button onClick={handleCloseEditStaff} appearance="subtle">
                Cancel
              </Rsuite.Button>
            </Rsuite.Modal.Footer>
          </form>
        </Rsuite.Modal>

        <Rsuite.Modal size='md' open={openEditJurusan} onClose={handleCloseEditJurusan}>
          <Rsuite.Modal.Header>
            <Rsuite.Modal.Title>Edit Jurusan</Rsuite.Modal.Title>
          </Rsuite.Modal.Header>
          <form onSubmit={handleEditJurusan}>
            <Rsuite.Modal.Body>
              <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                <div className="flex flex-col w-1/2 gap-3 md:w-1/3">
                  <div className="relative dnd aspect-w-3 aspect-h-3 ">
                    <img src={previewImage ? previewImage : selectedItem?.logo} className='object-cover rounded-xl' alt="" />
                    <div className="w-full h-full bg-black " />
                    <div className="flex items-center justify-center w-full wb">
                      <div className="w-11/12 border-4 border-white border-dashed rounded-2xl h-5/6" />
                    </div>
                    <div className='flex flex-col items-center justify-center text'>
                      <p>Unggah Foto</p>
                      <span className='text-base font-normal'>atau drag n drop gambar kesini</span>
                    </div>
                    <input type="file" className='w-full h-full opacity-0' onChange={handleImageUpload} />
                  </div>
                  <button className="p-2 text-center text-red-600 bg-red-200 border border-red-600 rounded-lg hover:bg-red-300">
                    Remove Logo
                  </button>
                </div>
                <div className="w-4/5 md:w-full">
                  <div className="gap-3 md:flex">
                    <div className="flex items-center w-full">
                      <Rsuite.SelectPicker value={staffId ? staffId : selectedItem?.id_staff} onChange={(e: any) => setStaffId(e)} label="Staff" data={stf} className='w-full' />
                    </div>
                    <Input
                      label='Nama Jurusan'
                      value={namaJurusan ? namaJurusan : selectedItem?.nama_jurusan}
                      onChange={(e) => setNamaJurusan(e.target.value)}
                    />
                  </div>
                  <Textarea
                    label='Deskripsi'
                    value={deskripsi !== "" ? deskripsi : selectedItem?.deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                </div>
              </div>
            </Rsuite.Modal.Body>
            <Rsuite.Modal.Footer>
              <Rsuite.Button onClick={handleEditJurusan} appearance="primary">
                Ok
              </Rsuite.Button>
              <Rsuite.Button onClick={() => {
                handleCloseEditJurusan()
                setSelectedItem([])
              }} appearance="subtle">
                Cancel
              </Rsuite.Button>
            </Rsuite.Modal.Footer>
          </form>
        </Rsuite.Modal>
      </div>
    </DashboardLayout>
  )
}

export default AcademicDashboard