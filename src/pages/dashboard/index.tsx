import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import DashboardLayout from '@/layouts/DashboardLayout'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import * as Rsuite from 'rsuite'
import { ARTICLE, BANNER, HOME, INFO, JURUSAN, PPDB, STAFF } from '../api'
import { token } from '../api/api'
import { MdAdd, MdEdit } from 'react-icons/md'
import TablePendaftar from '@/view/ppdb/table'
import { FaCheckCircle, FaEdit, FaRegCheckCircle } from 'react-icons/fa'
import Link from 'next/link'



const Dashboard = () => {
  const [info, setInfo]: any = React.useState([]);
  const [nama, setNama] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("");
  const [deskripsiBanner, setDeskripsiBanner] = React.useState("");

  const [logo, setLogo] = React.useState();
  const [selectedImage, setSelectedImage] = React.useState(logo)
  const [previewImage, setPreviewImage] = React.useState("")
  const [banner, setBanner]: any = React.useState([]);
  const [activeBanner, setActiveBanner]: any = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openCreate, setOpenCreate] = React.useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const [openAllbanner, setOpenAllbanner] = React.useState(false);
  const handleOpenAllbanner = () => setOpenAllbanner(true);
  const handleCloseAllbanner = () => setOpenAllbanner(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  React.useEffect(() => {
    getSchool()
    getBanner()
    getActiveBanner()
    getJurusan()
    getStaff()
    getPendaftar(1)
    getArticle()
  }, [])

  const getSchool = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/admin/sekolah`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          },
        });
        setInfo(response.data.data);
        setNama(response.data.data.nama);
        setDeskripsi(response.data.data.deskripsi);
        setLogo(response.data.data.logo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }

  const getBanner = () => {
    BANNER.getBanner().then(
      res => {
        setBanner(res.data)
      }
    )
  }

  const getActiveBanner = () => {
    HOME.getHome()
      .then(res => {
        setActiveBanner(res.data.banner)
        const ids = res.data.banner.map((item: any) => item.id);
        setBanAk(ids)
      })
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };

  const handleContentChange = (e: any) => {
    setDeskripsi(e.target.value);
  };

  const handleBannerContentChange = (e: any) => {
    setDeskripsiBanner(e.target.value);
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

    INFO.editArtikel({
      nama_sekolah: nama,
      deskripsi_sekolah: deskripsi,
      logo_sekolah: selectedImage,
    }).then(
      res => {
        getSchool()
      }
    )
  };

  const handleAddBanner = async (e: any) => {
    e.preventDefault()

    BANNER.tambahBanner({
      img: selectedImage,
      deskripsi: deskripsiBanner
    }).then(() => {
      getActiveBanner()
      getBanner()
      setSelectedImage(undefined)
      setPreviewImage("")
      setDeskripsiBanner("")
    })
  }

  const [banAk, setBanAk]: any = React.useState([])
  const [activeInfo, setActiveInfo]: any = React.useState("")

  const handleClick = (id: any) => {
    // Cek apakah ID sudah ada dalam state banAk
    const index = banAk.indexOf(id);

    if (index === -1) {
      // Cek apakah sudah mencapai batas maksimal (3)
      if (banAk.length < 5) {
        // Jika belum mencapai batas maksimal, tambahkan ke state
        setBanAk([...banAk, id]);
      } else {
        // Jika sudah mencapai batas maksimal, tampilkan pesan atau lakukan tindakan lain
        setActiveInfo("Batas maksimal item telah tercapai");
      }
    } else {
      // Jika ID sudah ada, hapus dari state
      const updatedBanAk = [...banAk];
      updatedBanAk.splice(index, 1);
      setBanAk(updatedBanAk);
    }
  };

  const postActiveBanner = () => {
    // banAk
    BANNER.selectedBanner(banAk)
      .then(() => {
        getActiveBanner()
      })
  }

  const [selectedBanner, setSelectedBanner]: any = React.useState([])

  const handleEditBanner = async (e: any) => {
    e.preventDefault()

    BANNER.editBanner({
      id: Number(selectedBanner.id),
      img: selectedImage ? selectedImage : selectedBanner.img,
      deskripsi: deskripsiBanner ? deskripsiBanner : selectedBanner.deskripsi
    }).then(() => {
      getActiveBanner()
      getBanner()
      setPreviewImage("");
      setSelectedImage(undefined)
      setDeskripsiBanner("")
    })
  }

  const handleDeleteBanner = () => {
    BANNER.deleteBanner(
      Number(selectedBanner.id)
    ).then(() => {
      getActiveBanner()
      getBanner()
      setPreviewImage("");
      setSelectedImage(undefined)
      setDeskripsiBanner("")
    })
  }

  const [jurusan, setJurusan]: any = React.useState([])
  const [staff, setStaff]: any = React.useState([])
  const [pendaftar, setPendaftar]: any = React.useState([])
  const [article, setArticle] = React.useState([])

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

  const getPendaftar = (id: number) => {
    PPDB.getRegistered(id).then(
      res => {
        setPendaftar(res.data)
        console.log(res.data)
      }
    )
  }

  const getArticle = () => {
    ARTICLE.getArtikel()
      .then(
        res => {
          setArticle(res.data)
        }
      )
  }


  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-col justify-between gap-3 lg:flex-row">
          <div className="relative flex flex-col w-full gap-3 p-3 bg-white rounded-lg lg:max-h-72">
            <Rsuite.Carousel autoplay className="relative custom-slider">
              {activeBanner.map((_: any, idx: any) => {
                return (
                  <img
                    key={idx}
                    src={_.img}
                    className='object-cover rounded-xl'
                    alt=""
                  />
                )
              })}
            </Rsuite.Carousel>
            <div className="relative flex justify-between">
              <div className="flex gap-3">
                <button onClick={handleOpenCreate} className="p-2 border btn-sm btn btn-square"><MdAdd /></button>
                <Rsuite.Modal size='md' open={openCreate} onClose={handleCloseCreate} className='px-2'>
                  <form onSubmit={handleAddBanner}>
                    <Rsuite.Modal.Header>
                      <Rsuite.Modal.Title>Tambah Banner Baru</Rsuite.Modal.Title>
                    </Rsuite.Modal.Header>
                    <Rsuite.Modal.Body className='flex flex-col gap-5'>
                      <div className="h-full -order-1 lg:order-none ">
                        <div className="relative bg-black dnd aspect-w-3 aspect-h-1 ">
                          <img src={previewImage} className='object-cover rounded-xl' alt="" />
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

                      <div className="flex flex-col w-full">
                        <Textarea
                          value={deskripsiBanner}
                          label='Deskripsi:'
                          onChange={handleBannerContentChange}
                          onKeyDown={handleKeyDown}
                        />
                      </div>
                    </Rsuite.Modal.Body>
                    <Rsuite.Modal.Footer>
                      <Rsuite.Button type='submit' onClick={handleCloseCreate} appearance="primary">
                        Simpan
                      </Rsuite.Button>
                      <Rsuite.Button onClick={()=>{
                        handleCloseCreate()
                        setPreviewImage("")
                        setSelectedImage(undefined)
                      }} appearance="subtle">
                        Cancel
                      </Rsuite.Button>
                    </Rsuite.Modal.Footer>
                  </form>
                </Rsuite.Modal>
              </div>
              <button
                onClick={() => {
                  handleOpenAllbanner()
                  getActiveBanner()
                }}
                className="p-2 border btn-sm btn"
              >
                {activeBanner.length} / {banner.length} Banner aktif
              </button>
              <Rsuite.Modal size='md' open={openAllbanner} onClose={handleCloseAllbanner} className='px-2'>
                <Rsuite.Modal.Header>
                  <Rsuite.Modal.Title>Tambah Banner Baru</Rsuite.Modal.Title>
                </Rsuite.Modal.Header>
                <Rsuite.Modal.Body className='relative flex flex-col gap-5'>
                  {activeInfo &&
                    <div className="absolute z-10 flex items-center justify-center w-full h-full ">
                      <div className="p-5 bg-yellow-400 rounded-lg">
                        <p className=''>{activeInfo}</p> <br />
                        <span className='float-right font-semibold cursor-pointer' onClick={() => setActiveInfo("")}>mengerti!</span>
                      </div>
                    </div>
                  }
                  <div className="grid grid-cols-2 gap-4">
                    {banner.map((_: any, i: any) => {
                      return (
                        <div key={i} className="relative">
                          <div className="aspect-w-16 aspect-h-8">
                            <img src={_.img} className='object-cover' />
                          </div>

                          <div className="selected-banner">
                            <div onClick={() => {
                              setSelectedBanner(_)
                              handleOpenEdit()
                            }} className="flex gap-1"><FaEdit /> Edit</div>
                            <Rsuite.Modal size='md' open={openEdit} onClose={handleCloseEdit} className='px-2'>
                              <Rsuite.Modal.Header>
                                <Rsuite.Modal.Title>Edit Banner Baru</Rsuite.Modal.Title>
                              </Rsuite.Modal.Header>
                              <form onSubmit={handleEditBanner}>
                                <Rsuite.Modal.Body className='relative flex flex-col gap-5'>
                                  <div className="h-full -order-1 lg:order-none ">
                                    <div className="relative bg-black dnd aspect-w-3 aspect-h-1 ">
                                      <img src={previewImage ? previewImage : selectedBanner.img} className='object-cover rounded-xl' alt="" />
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
                                  <Textarea
                                    value={deskripsiBanner ? deskripsiBanner : selectedBanner.deskripsi}
                                    label='Deskripsi:'
                                    onChange={handleBannerContentChange}
                                    onKeyDown={handleKeyDown}
                                  />
                                </Rsuite.Modal.Body>
                                <Rsuite.Modal.Footer>
                                  <Rsuite.Button onClick={() => {
                                    handleCloseEdit()
                                    handleDeleteBanner()
                                  }} type='button' appearance="primary" color='red'>
                                    Hapus
                                  </Rsuite.Button>
                                  <Rsuite.Button onClick={handleCloseEdit} type='submit' appearance="primary">
                                    Simpan
                                  </Rsuite.Button>
                                  <Rsuite.Button onClick={() => {
                                    handleCloseEdit()
                                    setPreviewImage("");
                                    setSelectedImage(undefined)
                                  }} appearance="subtle">
                                    Cancel
                                  </Rsuite.Button>
                                </Rsuite.Modal.Footer>
                              </form>
                            </Rsuite.Modal>

                            <div onClick={() => handleClick(_.id)} className="">
                              {banAk.indexOf(_.id) === -1 ? <FaRegCheckCircle /> : <FaCheckCircle />}
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 ">
                            {banAk.indexOf(_.id) === -1
                              ?
                              <div className=""></div>
                              :
                              <div className="flex items-center gap-1 p-1 px-2 bg-green-400"><FaCheckCircle /> Selected</div>
                            }
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Rsuite.Modal.Body>
                <Rsuite.Modal.Footer>
                  <Rsuite.Button type='submit' onClick={
                    () => {
                      postActiveBanner()
                      handleCloseAllbanner()
                    }
                  } appearance="primary">
                    Simpan
                  </Rsuite.Button>
                  <Rsuite.Button onClick={handleCloseAllbanner} appearance="subtle">
                    Cancel
                  </Rsuite.Button>
                </Rsuite.Modal.Footer>
              </Rsuite.Modal>
            </div>
          </div>
          <div className="bg-white relative lg:w-[70%] flex flex-col gap-3 py-3 rounded-lg">
            <div className="p-3 px-5 rounded-lg left-5 right-5 top-3">
              <div className="flex justify-between">
                <h4>Informasi Sekolah</h4>
                <Rsuite.ButtonToolbar>
                  <Rsuite.Button onClick={handleOpen} color='blue' appearance='primary'> Edit</Rsuite.Button>
                </Rsuite.ButtonToolbar>

                <Rsuite.Modal size='md' open={open} onClose={handleClose} className='px-2'>
                  <form onSubmit={handleSubmit}>
                    <Rsuite.Modal.Header>
                      <Rsuite.Modal.Title>Info Sekolah</Rsuite.Modal.Title>
                    </Rsuite.Modal.Header>
                    <Rsuite.Modal.Body className='flex flex-col gap-5 md:flex-row'>
                      <div className="h-full md:w-1/3 -order-1 lg:order-none ">
                        <div className="relative bg-black dnd aspect-w-1 aspect-h-1 ">
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

                      <div className="flex flex-col w-full">
                        <Input
                          label='Nama Sekolah'
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                        />
                        <Textarea
                          value={deskripsi}
                          label='Deskripsi Sekolah:'
                          onChange={handleContentChange}
                          onKeyDown={handleKeyDown}
                        />
                      </div>
                    </Rsuite.Modal.Body>
                    <Rsuite.Modal.Footer>
                      <Rsuite.Button type='submit' onClick={handleClose} appearance="primary">
                        Simpan
                      </Rsuite.Button>
                      <Rsuite.Button onClick={handleClose} appearance="subtle">
                        Cancel
                      </Rsuite.Button>
                    </Rsuite.Modal.Footer>
                  </form>
                </Rsuite.Modal>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 px-5 rounded-lg">
              <div className="w-[95%] min-w-[30%] flex items-center justify-center aspect-1">
                <img src={logo} className='object-cover w-full h-full ' alt="" />
              </div>
              <div className="max-w-[65%]">
                <h4>{nama}</h4>
                <span className='line-clamp-2 lg:line-clamp-4'>{deskripsi}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={"/dashboard/academic/jurusan"} className="rounded-xl hover:no-underline p-2 min-w-[15%] bg-gray-500 hover:bg-gray-600 text-[#f2f2f2] hover:text-[#f2f2f2] font-medium">
            <p className='text-lg font-medium'>Jurusan</p>
            <h3>{jurusan.length}</h3>
          </Link>
          <Link href={"/dashboard/academic/staff"} className="rounded-xl hover:no-underline p-2 min-w-[15%] bg-gray-500 hover:bg-gray-600 text-[#f2f2f2] hover:text-[#f2f2f2] font-medium">
            <p className='text-lg font-medium'>Staff</p>
            <h3>{staff.length}</h3>
          </Link>
          <Link href={"/dashboard/article"} className="rounded-xl hover:no-underline p-2 min-w-[15%] bg-gray-500 hover:bg-gray-600 text-[#f2f2f2] hover:text-[#f2f2f2] font-medium">
            <p className='text-lg font-medium'>Artikel</p>
            <h3>{article.length}</h3>
          </Link>
          <Link href={"/dashboard/ppdb"} className="rounded-xl hover:no-underline p-2 min-w-[15%] bg-gray-500 hover:bg-gray-600 text-[#f2f2f2] hover:text-[#f2f2f2] font-medium">
            <p className='text-lg font-medium'>Pendaftar</p>
            <h3>{pendaftar.length}</h3>
          </Link>
        </div>
        <TablePendaftar />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard