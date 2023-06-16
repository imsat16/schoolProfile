import Input from '@/components/Input'
import Layout from '@/layouts'
import React from 'react'

const Contact = () => {
  return (
    <Layout>
      <Input
        label='name'
        maxLength={5}
      />
    </Layout>
  )
}

export default Contact