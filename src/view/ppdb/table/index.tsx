import { PPDB } from '@/pages/api';
import moment from 'moment';
import React from 'react'
import * as Rsuite from 'rsuite'
const { Column, HeaderCell, Cell } = Rsuite.Table;

const TablePendaftar = () => {
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([]);

    const handleChangeLimit = (dataKey: any) => {
        setPage(1);
        setLimit(dataKey);
    };

    React.useEffect(() => {
        getData(1)
    }, [])

    const getData  = (id:number) => {
        PPDB.getRegistered(id).then(
            res => {
                setData(res.data)
                console.log(res.data)
            }
        )
    }

    const ppdbData = data.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });

    return (
        <div className='p-4 bg-white rounded-xl'>
            <Rsuite.Table 
                height={420} 
                data={ppdbData}
                autoHeight
            >
                <Column width={150} fixed>
                    <HeaderCell>Nama</HeaderCell>
                    <Cell dataKey="nama_pendaftar" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Asal sekolah</HeaderCell>
                    <Cell dataKey="asal_sekolah" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Jenis Kelamin</HeaderCell>
                    <Cell dataKey="jenis_kelamin" />
                </Column>
                
                <Column width={150}>
                    <HeaderCell>Tanggal Lahir</HeaderCell>
                    <Cell>
                        {(rowData)=>{
                            const formattedDate = moment(rowData.tanggal_lahir, 'ddd, DD MMM YYYY HH:mm:ss [GMT]');
                            const formattedDateString = formattedDate.format('DD/MM/YYYY');
                            return (
                                <div>
                                    {formattedDateString}
                                </div>
                            )
                        }}
                    </Cell>
                </Column>
                
                <Column width={150}>
                    <HeaderCell>Tanggal Lahir</HeaderCell>
                    <Cell dataKey='tempat_lahir'/>
                </Column>
                
                <Column width={100}>
                    <HeaderCell>gelombang</HeaderCell>
                    <Cell dataKey="id_gelombang" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Kode</HeaderCell>
                    <Cell dataKey="kode_unik" />
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
                    total={data.length}
                    limitOptions={[10, 30, 50]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </div>
        </div>
    )
}

export default TablePendaftar