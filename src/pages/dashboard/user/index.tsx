import DashboardLayout from '@/layouts/DashboardLayout'
import React from 'react'
import { AUTH } from '@/pages/api';
import * as Rsuite from 'rsuite'
import { FaUserEdit } from "react-icons/fa"
import Input from '@/components/Input';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

const { Column, HeaderCell, Cell } = Rsuite.Table;

const UserDashboard = () => {
  const router = useRouter()
  
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [userList, setUserList] = React.useState([]);
  const [selectedData, setSelectedData]:any = React.useState();
  
  const [nama, setNama] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const handleChangeLimit = (dataKey: any) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = userList.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  React.useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    AUTH.userList()
      .then(
        res => setUserList(res.data)
      )
  }

  const handleEdit = (e:any) => {
    e.preventDefault()
    AUTH.editUser({
        id: selectedData?.user_id,
        nama: nama ? nama : selectedData?.nama,
        email: email ? email : selectedData?.email,
        password: password ? password : selectedData?.password
    }).then(
        res => {
            handleCloseEdit()
            setNama("")
            setEmail("")
            setPassword("")
            getData()
        }
    )
  }
  const handleAdd = (e:any) => {
    e.preventDefault()
    AUTH.tambahUser({
        nama: nama ? nama : selectedData?.nama,
        email: email ? email : selectedData?.email,
        password: password
    }).then(
        res => {
            setNama("")
            setEmail("")
            setPassword("")
            getData()
        }
    )
  }

  const handleLogout = () => {
    destroyCookie(null, 'token',{
        path:'/dashboard'
    })
    destroyCookie(null, 'timelessToken',{
        path:'/auth'
    })
    router.reload()
}

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between pb-5">
        <h3 className="">User Configuration</h3>
        <div onClick={handleOpenAdd} className="p-2 bg-green-400 rounded-md cursor-pointer">Add User</div>
      </div>
      <div>
        <Rsuite.Table
          height={420}
          data={data}
          autoHeight
          onRowClick={(rowData: any) => {
            console.log(rowData)
            setSelectedData(rowData)
          }}
        >
          <Column width={200}>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="nama" />
          </Column>

          <Column width={200}   >
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>

          <Column width={200} flexGrow={1}>
            <HeaderCell>{ }</HeaderCell>
            <Cell>
              {() => (
                <button
                  title='Participant'
                  onClick={handleOpenEdit}
                  className="absolute flex gap-3 btn btn-sm top-2"
                >
                  <FaUserEdit />
                </button>
                // <p className='cursor-pointer' onClick={handleOpen}>{rowData.partisipasi.length}</p>
              )}
              {/* <button onClick={()=>{}} className='btn-sm btn btn-square'><FaUserEdit/></button> */}
            </Cell>
          </Column>

        </Rsuite.Table>
        <div style={{ padding: 20 }}>
          <Rsuite.Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="xs"
            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
            total={userList.length}
            limitOptions={[10, 30, 50]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
      </div>
      <button className='btn' onClick={handleLogout}>Logout</button>


      <Rsuite.Modal 
        open={openEdit} 
        onClose={handleCloseEdit}
        // size='xs'
      >
        <Rsuite.Modal.Header>
          <Rsuite.Modal.Title>Edit User</Rsuite.Modal.Title>
        </Rsuite.Modal.Header>
        <form onSubmit={handleEdit}>
          <Rsuite.Modal.Body>
            <Input
              type='text'
              label='Nama'
              value={nama ? nama : selectedData?.nama}
              onChange={(e:any)=>setNama(e.target.value)}
            />
            <Input
              type='email'
              label='Email'
              value={email ? email : selectedData?.email}
              onChange={(e:any)=>setEmail(e.target.value)}
            />
            <Input
              type='password'
              label='Set New Password'
              value={password}
              onChange={(e:any)=>setPassword(e.target.value)}
            />
          </Rsuite.Modal.Body>
          <Rsuite.Modal.Footer>
            <Rsuite.Button type='submit' appearance="primary">
              Simpan
            </Rsuite.Button>
            <Rsuite.Button type='button' onClick={handleCloseEdit} appearance="subtle">
              Cancel
            </Rsuite.Button>
          </Rsuite.Modal.Footer>
        </form>
      </Rsuite.Modal>
      
      <Rsuite.Modal 
        open={openAdd} 
        onClose={handleCloseAdd}
        // size='xs'
      >
        <Rsuite.Modal.Header>
          <Rsuite.Modal.Title>Add User</Rsuite.Modal.Title>
        </Rsuite.Modal.Header>
        <form onSubmit={handleAdd}>
          <Rsuite.Modal.Body>
            <Input
              type='text'
              label='Nama'
              value={nama ? nama : selectedData?.nama}
              onChange={(e:any)=>setNama(e.target.value)}
            />
            <Input
              type='email'
              label='Email'
              value={email ? email : selectedData?.email}
              onChange={(e:any)=>setEmail(e.target.value)}
            />
            <Input
              type='password'
              label='Set New Password'
              value={password}
              onChange={(e:any)=>setPassword(e.target.value)}
            />
          </Rsuite.Modal.Body>
          <Rsuite.Modal.Footer>
            <Rsuite.Button type='submit' appearance="primary">
              Simpan
            </Rsuite.Button>
            <Rsuite.Button type='button' onClick={handleCloseAdd} appearance="subtle">
              Cancel
            </Rsuite.Button>
          </Rsuite.Modal.Footer>
        </form>
      </Rsuite.Modal>
    </DashboardLayout>
  )
}

export default UserDashboard