import DashboardLayout from '@/layouts/DashboardLayout'
import TablePendaftar from '@/view/ppdb/table'
import React from 'react'

const PPDBDashboard = () => {
  return (
    <DashboardLayout>
      <TablePendaftar/>
    </DashboardLayout>
  )
}

export default PPDBDashboard