import DashboardLayout from "@/layouts/DashboardLayout"
import moment from "moment";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import * as React from "react";
import * as Rsuite from "rsuite";
import { HiOutlineTrash, HiOutlineViewGrid, HiViewGrid, HiOutlineGlobeAlt, HiPlus } from "react-icons/hi";
import { MdEdit, MdOutlineFormatListBulleted } from "react-icons/md";
import { ARTICLE } from "@/pages/api";

const ArticleDashboard = () => {
  const [article, setArticle] = React.useState([])

  const [layout, setLayout] = React.useState(true)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedDel, setSelectedDel]:any = React.useState()

  React.useEffect(()=>{
    getArticle()
  },[])
  
  const handleDelete = () => {
    ARTICLE.deleteArtikel(
      selectedDel?.artikel_id
    ).then(
      res =>{
        handleClose()
        getArticle()
      }
    )
  }
  
  const getArticle = () =>{
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
        <title>Article</title>
      </Head>
      <div className="">
        <div className="flex justify-between">
          <h5 className="">Artikel</h5>
          <Link className="hidden text-[#252525] hover:no-underline md:block" href={'/dashboard/article/create'}>
            <h5 className="flex items-center gap-3">
              Tulis Artikel Baru <HiPlus className="text-xl" />
            </h5>
          </Link>
        </div>
        <hr />
        
        <Link title="Tambah artikel baru" className="absolute p-4 text-white bg-black rounded-full hover:text-white md:hidden bottom-24 right-4 hover:no-underline" href={'/dashboard/article/create'}>
          <h5 className="flex items-center gap-3">
            <HiPlus className="text-xl" />
          </h5>
        </Link>

        <div className="flex justify-end gap-3 p-2 text-2xl">
          <button
            className={layout ? "bg-blue-300 rounded-md p-1 text-white" : " p-1"}
            onClick={() => setLayout(true)}>
            {layout ? <HiViewGrid /> : <HiOutlineViewGrid />}
          </button>
          <button
            className={layout ? " p-1" : "bg-blue-300 rounded-md p-1 text-white"}
            onClick={() => setLayout(false)}>
            {layout ? <MdOutlineFormatListBulleted /> : <MdOutlineFormatListBulleted />}
          </button>
        </div>
        <div className={`${layout ? "grid grid-cols-2 lg:grid-cols-3" : "flex flex-col"} gap-5 `}>
          {article?.map((ctx: any, idx: any) => {
            // console.log(data)
            return (
              <div className={`bg-white rounded-lg ${layout ? "flex flex-col gap-3" : "grid grid-cols-3 lg:w-10/12"} min-h-[10rem]`} key={idx}>
                <div className={`bg-gray-300 ${layout ? "aspect-w-6 aspect-h-3" : "w-full aspect-w-6 aspect-h-3 rounded-lg"}`}>
                  {/* <Image
                    src={ctx.gambar}
                    alt=""
                    fill
                    className={`object-cover ${layout ? "rounded-t-lg" : "rounded-l-lg"}`}
                  /> */}
                <img src={ctx.gambar} alt={ctx.judul} className={`object-cover rounded-xl ${layout ? "rounded-t-lg" : "rounded-l-lg"}`} />

                </div>
                <div className={`relative col-span-2 p-3 flex flex-col gap-3 ${layout ? "px-3 py-0" : ""}`}>
                  <h3 className="text-xl leading-none line-clamp-2 md:text-2xl">{ctx.judul}</h3>
                  <p className='leading-snug text-justify line-clamp-3'>
                    {ctx.isi_artikel.split('\n').map((paragraph: string, index: any) => (
                      <span key={index}>
                        {paragraph.includes('**')
                          ? paragraph.split('**').map((text: string, index: any) =>
                            index % 2 === 0 ? (
                              text
                            ) : (
                              <strong key={index}>{text}</strong>
                            )
                          )
                          : paragraph}
                        <br />
                      </span>
                    ))
                    }
                  </p>
                  <div className="flex justify-between">
                    <p>
                      {moment.unix(ctx.tgl_dibuat).format("dddd, DD MMMM YYYY")}
                    </p>
                    <div className={`${layout ? "py-3" : "absolute bottom-3 right-2"} flex justify-end gap-2 `}>
                      <button 
                        onClick={
                          ()=>{
                            handleOpen()
                            setSelectedDel(ctx)}
                        }
                        className="flex items-center justify-center w-8 h-8 p-1 text-xl rounded-md hover:text-red-600 hover:bg-red-200"
                      >
                        <HiOutlineTrash />
                      </button>
                      <Link title="Edit" href={`\article/edit/${ctx.slug}`} className="text-[#252525]">
                        <button className="flex items-center justify-center w-8 h-8 p-1 text-xl rounded-md hover:text-blue-600 hover:bg-blue-200"><MdEdit /></button>
                      </Link>
                      <Link title="preview" target="_blank" href={`/article/${ctx.slug}`} className="text-[#252525]">
                        <div className="flex items-center justify-center w-8 h-8 p-1 text-xl rounded-md hover:text-gray-600 hover:bg-gray-200"><HiOutlineGlobeAlt /></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Delete Modal */}
      <Rsuite.Modal open={open} onClose={handleClose}>
        <Rsuite.Modal.Body>
          <div className="text-xl">
            Apakah anda yakin akan menghapus artikel dengan judul {" "}
            <strong>{selectedDel?.judul}</strong>?
          </div>
        </Rsuite.Modal.Body>
        <Rsuite.Modal.Footer>
          {/* <Rsuite.Button onClick={handleClose} appearance="primary" color="red"> */}
          <Rsuite.Button onClick={handleDelete} appearance="primary" color="red">
            Hapus
          </Rsuite.Button>
          <Rsuite.Button onClick={handleClose} appearance="subtle">
            Batal
          </Rsuite.Button>
        </Rsuite.Modal.Footer>
      </Rsuite.Modal>
    </DashboardLayout>
  )
}

export default ArticleDashboard