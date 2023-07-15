import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import DashboardLayout from '@/layouts/DashboardLayout'
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import * as Rsuite from 'rsuite'
import {IoIosArrowBack} from 'react-icons/io'
import { useRouter } from 'next/router';
import { ARTICLE } from '@/pages/api';

const CreateArticle = () => {
  const [title, setTitle] = React.useState('');
  const [penulis, setPenulis] = React.useState('');
  const [content, setContent] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState(null)
  const [previewImage, setPreviewImage] = React.useState("")
  const [msg, setMsg] = React.useState('');
  const [msgColor, setMsgColor] = React.useState('green');
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Data artikel:', { title, content, selectedImage });

    ARTICLE.tambahArtikel({
      gambar: selectedImage,
      judul: title,
      isi_artikel: content,
      kategori_id: 1
    }).then(
      res => {
        setMsg(res.message)
        setMsgColor("green")
        setTimeout(() => {
          router.replace('/dashboard/article')
        }, 3000);
      }
    ).catch(
      err => {
        console.error(err)
        setMsg(err.message)
        setMsgColor("red")
        setTimeout(() => {
          setMsg("")
        }, 3000);
      }
    )

    console.log({msgColor, msg})

    // const a = {
    //   gambar: selectedImage,
    //   judul: title,
    //   isi_artikel: content,
    //   kategori_id: 1
    // }
    // console.log(a)
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const insertBoldTag = (e: any) => {
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    const newContent =
      content.substring(0, selectionStart) +
      '**' +
      content.substring(selectionStart, selectionEnd) +
      '**' +
      content.substring(selectionEnd);
    setContent(newContent);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      insertBoldTag;
    }
  };

  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file:any = event.target.files?.[0];
    console.log(file)
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Article</title>
      </Head>
      {msg && 
        <div className={`absolute top-0 left-0 z-10 flex items-center justify-center w-full min-h-screen `}>
          <div className={`bg-${msgColor}-400 p-4 px-6 font-bold text-xl text-white rounded-lg`}>
          {/* <div className={`bg-red-500 p-4 px-6 font-bold text-xl text-white`}> */}
            {msg}
          </div>
        </div>
      }
      <div className=''>
        <Rsuite.ButtonToolbar>
          <div className="flex items-center justify-between w-full">
            <button onClick={router.back} className='flex items-center'><IoIosArrowBack/>Tulis Artikel Baru</button>
            <Rsuite.Button onClick={handleOpen}>Preview</Rsuite.Button>
          </div>
        </Rsuite.ButtonToolbar>
        <Rsuite.Modal size='md' open={open} onClose={handleClose}>
          <Rsuite.Modal.Header>
            <Rsuite.Modal.Title>Preview Content</Rsuite.Modal.Title>
          </Rsuite.Modal.Header>
          <Rsuite.Modal.Body>
            <div className="flex flex-col gap-5">
              <div className="aspect-w-16 aspect-h-9">
                {previewImage ? <Image fill className='object-cover rounded-md' src={previewImage} alt="Gambar" />:<div className='flex items-center justify-center bg-gray-300 rounded-md '>"Gambar belum tersedia"</div>}
              </div>
              <h2 className='text-3xl font-semibold md:font-bold'>{title}</h2>
              {/* {penulis?
                <p>Diposting oleh {penulis}, 28 Mar 2023</p>:""
              } */}
              <p className='text-justify'>
                {content ? content.split('\n').map((paragraph, index) => (
                  <span key={index}>
                    {paragraph.includes('**')
                      ? paragraph.split('**').map((text, index) =>
                        index % 2 === 0 ? (
                          text
                        ) : (
                          <strong key={index}>{text}</strong>
                        )
                      )
                      : paragraph}
                    <br />
                  </span>
                )):
                <div className="">
                  Anda Belum menuliskan apapun
                  <Rsuite.Placeholder.Paragraph rows={8} />
                </div>
                }
              </p>
            </div>
            
          </Rsuite.Modal.Body>
          <Rsuite.Modal.Footer>
            {/* <Rsuite.Button onClick={handleClose} appearance="primary">
              Ok
            </Rsuite.Button> */}
            <Rsuite.Button onClick={handleClose} appearance="subtle">
              Tutup
            </Rsuite.Button>
          </Rsuite.Modal.Footer>
        </Rsuite.Modal>
        <div className="flex gap-4">
          {/* <div className="flex-1 p-4 bg-white rounded-md">
            <h2 className='text-3xl font-medium'>Preview Content:</h2><br />
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p>
              {content.split('\n').map((paragraph, index) => (
                <span key={index}>
                  {paragraph.includes('**')
                    ? paragraph.split('**').map((text, index) =>
                      index % 2 === 0 ? (
                        text
                      ) : (
                        <strong key={index}>{text}</strong>
                      )
                    )
                    : paragraph}
                  <br />
                </span>
              ))}
            </p>
          </div> */}
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <input required type="file" onChange={handleImageUpload} />
              {/* <Input
                type='file'
                onChange={handleImageUpload}
                value={selectedImage}
              /> */}
              <Input
                label='Judul Artikel'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                minLength={12}
                maxLength={200}
              />
              {/* <Input
                label='Penulis'
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
              /> */}
              <Textarea
                label='Konten Artikel:'
                onChange={handleContentChange}
                onKeyDown={handleKeyDown}
              />
              <button type="submit">Simpan Artikel</button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CreateArticle